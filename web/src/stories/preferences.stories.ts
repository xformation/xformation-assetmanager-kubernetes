import { storiesOf } from '@storybook/angular';
import { object } from '@storybook/addon-knobs';
import {
  Operation,
  Preferences,
} from '../app/modules/shared/models/preference';

storiesOf('Other/Preferences', module).add('in general', () => ({
  props: {
    isOpen: false,
    preferences: object('preferences', {
      updateName: 'fake.updatePreferences',
      panels: [
        {
          name: 'Development',
          sections: [
            {
              name: 'Frontend Source',
              elements: [
                {
                  name: 'development.embedded',
                  type: 'radio',
                  value: 'embedded',
                  config: {
                    values: [
                      { label: 'Embedded', value: 'embedded' },
                      { label: 'Proxied', value: 'proxied' },
                    ],
                  },
                },
                {
                  name: 'development.frontendProxyURL',
                  type: 'text',
                  value: '',
                  disableConditions: [
                    {
                      lhs: 'development.embedded',
                      op: Operation.Equal,
                      rhs: 'proxied',
                    },
                  ],
                  config: {
                    label: 'Frontend Proxy URL',
                    placeholder: 'http://example.com',
                  },
                },
              ],
            },
          ],
        },
      ],
    } as Preferences),
    preferencesChanged: preferenceValues => {
      console.log(`preferences changed`, { preferenceValues });
    },
  },
  template: `
  <div class="main-container">
    <div class="content-container">
      <div class="content-area">
        <div class="clr-row">
          <button class="btn" (click)="isOpen = true">Open Modal</button>
        </div>
        <app-preferences
          [(isOpen)]="isOpen"
          [preferences]="preferences"
          (preferencesChanged)="preferencesChanged($event)"></app-preferences>
      </div>
    </div>
  </div>
  `,
}));
