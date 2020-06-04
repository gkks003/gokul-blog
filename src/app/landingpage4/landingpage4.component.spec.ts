import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Landingpage4Component } from './landingpage4.component';

describe('Landingpage4Component', () => {
  let component: Landingpage4Component;
  let fixture: ComponentFixture<Landingpage4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Landingpage4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Landingpage4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
