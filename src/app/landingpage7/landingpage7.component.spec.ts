import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Landingpage7Component } from './landingpage7.component';

describe('Landingpage7Component', () => {
  let component: Landingpage7Component;
  let fixture: ComponentFixture<Landingpage7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Landingpage7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Landingpage7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
