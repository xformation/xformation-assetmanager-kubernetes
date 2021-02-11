/*
 * Copyright (c) 2020 the Octant contributors. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

import { storiesOf } from '@storybook/angular';

storiesOf('Other/Bottom Panel', module).add('Panel', () => {
  return {
    styles: [],

    template: `
    <div style="display: flex; flex-direction: column; height: 500px; background: hsl(198, 83%, 94%)">
        <div style="flex: 1 1 auto; background: hsl(198, 0%, 98%); overflow-y: scroll">
            <p *ngFor="let item of [].constructor(30); index as i">row {{i+1}}</p>
        </div>
        <app-bottom-panel>
            bottom content
        </app-bottom-panel>
    </div>
        `,
  };
});
