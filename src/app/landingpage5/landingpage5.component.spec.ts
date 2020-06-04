import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Landingpage5Component } from './landingpage5.component';

describe('Landingpage5Component', () => {
  let component: Landingpage5Component;
  let fixture: ComponentFixture<Landingpage5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Landingpage5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Landingpage5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
