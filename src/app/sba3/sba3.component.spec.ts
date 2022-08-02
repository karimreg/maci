import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sba3Component } from './sba3.component';

describe('Sba3Component', () => {
  let component: Sba3Component;
  let fixture: ComponentFixture<Sba3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sba3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sba3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
