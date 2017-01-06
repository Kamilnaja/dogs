/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PugComponent } from './pug.component';

describe('PugComponent', () => {
  let component: PugComponent;
  let fixture: ComponentFixture<PugComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PugComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
