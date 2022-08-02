import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RamiContComponent } from './rami-cont.component';

describe('RamiContComponent', () => {
  let component: RamiContComponent;
  let fixture: ComponentFixture<RamiContComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RamiContComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RamiContComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
