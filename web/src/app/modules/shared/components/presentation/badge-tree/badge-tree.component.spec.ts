// Copyright (c) 2019 the Octant contributors. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
//

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { BadgeTreeComponent } from './badge-tree.component';
import { SharedModule } from '../../../shared.module';
import { IndicatorComponent } from '../indicator/indicator.component';

describe('BadgeTreeComponent', () => {
  let component: BadgeTreeComponent;
  let fixture: ComponentFixture<BadgeTreeComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [IndicatorComponent],
        imports: [SharedModule],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(BadgeTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
