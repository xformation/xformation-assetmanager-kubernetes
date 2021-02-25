// Copyright (c) 2019 the Octant contributors. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
//

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { BadgeComponent } from './badge.component';
import { SharedModule } from '../../../shared.module';
import { IndicatorComponent } from '../indicator/indicator.component';
import { NgCircleProgressModule } from 'ng-circle-progress';

describe('BadgeComponent', () => {
  let component: BadgeComponent;
  let fixture: ComponentFixture<BadgeComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [IndicatorComponent],
        imports: [SharedModule, NgCircleProgressModule],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(BadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
