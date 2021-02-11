/*
 * Copyright (c) 2020 the Octant contributors. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

import { TestBed } from '@angular/core/testing';

import { PreferencesService } from './preferences.service';

describe('PreferencesService', () => {
  let service: PreferencesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PreferencesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('collapsed set properly', () => {
    service.navCollapsed.next(false);
    const defaultPrefs = service.getPreferences();
    const defaultElement = defaultPrefs.panels[0].sections[1].elements[0];
    expect(defaultElement.name).toEqual('general.navigation');
    expect(defaultElement.value).toEqual('expanded');

    service.navCollapsed.next(true);
    const newPrefs = service.getPreferences();
    const newElement = newPrefs.panels[0].sections[1].elements[0];
    expect(newElement.name).toEqual('general.navigation');
    expect(newElement.value).toEqual('collapsed');
  });

  it('properties are persisted', () => {
    // default values
    service.navCollapsed.next(true);
    service.showLabels.next(true);
    expect(
      JSON.parse(service.getStoredValue('navigation.labels', true))
    ).toEqual(true);
    expect(
      JSON.parse(service.getStoredValue('navigation.collapsed', true))
    ).toEqual(true);

    // change through exposed variables
    service.navCollapsed.next(false);
    expect(
      JSON.parse(service.getStoredValue('navigation.collapsed', true))
    ).toEqual(false);

    service.showLabels.next(false);
    expect(
      JSON.parse(service.getStoredValue('navigation.labels', true))
    ).toEqual(false);

    // change by modifying stored values
    service.setStoredValue('navigation.collapsed', true);
    expect(
      JSON.parse(service.getStoredValue('navigation.collapsed', false))
    ).toEqual(true);

    service.setStoredValue('navigation.labels', true);
    expect(
      JSON.parse(service.getStoredValue('navigation.labels', false))
    ).toEqual(true);
  });
});
