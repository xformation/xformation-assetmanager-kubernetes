/*
 * Copyright (c) 2020 the Octant contributors. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { Preferences } from '../../models/preference';
import { ThemeService } from '../theme/theme.service';
import { skip } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PreferencesService implements OnDestroy {
  private subscriptionCollapsed: Subscription;
  private subscriptionLabels: Subscription;
  private subscriptionTheme: Subscription;
  private electronStore: any;

  public preferencesOpened: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  public navCollapsed: BehaviorSubject<boolean>;
  public showLabels: BehaviorSubject<boolean>;

  constructor(private themeService: ThemeService) {
    if (this.isElectron()) {
      const Store = window.require('electron-store');
      this.electronStore = new Store();
    }

    this.navCollapsed = new BehaviorSubject<boolean>(
      JSON.parse(this.getStoredValue('navigation.collapsed', false))
    );
    this.showLabels = new BehaviorSubject<boolean>(
      JSON.parse(this.getStoredValue('navigation.labels', true))
    );

    this.subscriptionCollapsed = this.navCollapsed.subscribe(col => {
      this.setStoredValue('navigation.collapsed', col);
    });

    this.subscriptionLabels = this.showLabels.subscribe(labels => {
      this.setStoredValue('navigation.labels', labels);
    });

    this.subscriptionTheme = this.themeService.themeType
      .pipe(skip(1))
      .subscribe(theme => {
        this.setStoredValue('theme', theme);
      });

    this.themeService.themeType.next(
      this.getStoredValue('theme', this.themeService.themeType.value)
    );
  }

  ngOnDestroy(): void {
    this.subscriptionCollapsed?.unsubscribe();
    this.subscriptionLabels?.unsubscribe();
    this.subscriptionTheme?.unsubscribe();
  }

  setStoredValue(key: string, value: any) {
    if (this.isElectron()) {
      this.electronStore.set(key, value);
    } else {
      localStorage.setItem(key, value);
    }
  }

  getStoredValue(key: string, defaultValue: any) {
    if (this.isElectron()) {
      return this.electronStore.get(key, defaultValue);
    } else {
      return localStorage.getItem(key) || defaultValue;
    }
  }

  isElectron(): boolean {
    if (typeof process === 'undefined') {
      return false;
    }
    return (
      process && process.versions && process.versions.electron !== undefined
    );
  }

  public preferencesChanged(update: Preferences) {
    const collapsed = update['general.navigation'] === 'collapsed';
    const showLabels = update['general.labels'] === 'show';
    const isLightTheme = update['general.theme'] === 'light';

    if (this.showLabels.value !== showLabels) {
      this.showLabels.next(showLabels);
    }

    if (this.navCollapsed.value !== collapsed) {
      this.navCollapsed.next(collapsed);
    }

    if (this.themeService.isLightThemeEnabled() !== isLightTheme) {
      this.themeService.switchTheme();
    }
  }

  // TODO move to better place and merge with server side prefs.
  public getPreferences(): Preferences {
    return {
      updateName: 'generalPreferences',
      panels: [
        {
          name: 'General',
          sections: [
            {
              name: 'Color Theme',
              elements: [
                {
                  name: 'general.theme',
                  type: 'radio',
                  value: this.themeService.isLightThemeEnabled()
                    ? 'light'
                    : 'dark',
                  config: {
                    values: [
                      {
                        label: 'Dark',
                        value: 'dark',
                      },
                      {
                        label: 'Light',
                        value: 'light',
                      },
                    ],
                  },
                },
              ],
            },
            {
              name: 'Navigation',
              elements: [
                {
                  name: 'general.navigation',
                  type: 'radio',
                  value: this.navCollapsed.value ? 'collapsed' : 'expanded',
                  config: {
                    values: [
                      {
                        label: 'Expanded',
                        value: 'expanded',
                      },
                      {
                        label: 'Collapsed',
                        value: 'collapsed',
                      },
                    ],
                  },
                },
              ],
            },
            {
              name: 'Navigation labels',
              elements: [
                {
                  name: 'general.labels',
                  type: 'radio',
                  value: this.showLabels.value ? 'show' : 'hide',
                  config: {
                    values: [
                      {
                        label: 'Show Labels',
                        value: 'show',
                      },
                      {
                        label: 'Hide Labels',
                        value: 'hide',
                      },
                    ],
                  },
                },
              ],
            },
          ],
        },
      ],
    };
  }
}
