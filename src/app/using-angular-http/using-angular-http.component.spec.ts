/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UsingAngularHttpComponent } from './using-angular-http.component';

describe('UsingAngularHttpComponent', () => {
  let component: UsingAngularHttpComponent;
  let fixture: ComponentFixture<UsingAngularHttpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsingAngularHttpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsingAngularHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
