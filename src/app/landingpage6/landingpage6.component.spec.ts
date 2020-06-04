import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Landingpage6Component } from './landingpage6.component';

describe('Landingpage6Component', () => {
  let component: Landingpage6Component;
  let fixture: ComponentFixture<Landingpage6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Landingpage6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Landingpage6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
