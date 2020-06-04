import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Landingpage9Component } from './landingpage9.component';

describe('Landingpage9Component', () => {
  let component: Landingpage9Component;
  let fixture: ComponentFixture<Landingpage9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Landingpage9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Landingpage9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
