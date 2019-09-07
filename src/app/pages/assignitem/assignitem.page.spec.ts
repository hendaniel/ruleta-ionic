import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignitemPage } from './assignitem.page';

describe('AssignitemPage', () => {
  let component: AssignitemPage;
  let fixture: ComponentFixture<AssignitemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignitemPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignitemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
