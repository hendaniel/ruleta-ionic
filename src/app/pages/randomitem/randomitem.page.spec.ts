import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomitemPage } from './randomitem.page';

describe('RandomitemPage', () => {
  let component: RandomitemPage;
  let fixture: ComponentFixture<RandomitemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomitemPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomitemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
