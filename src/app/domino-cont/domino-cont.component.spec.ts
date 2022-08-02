import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DominoContComponent } from './domino-cont.component';

describe('DominoContComponent', () => {
  let component: DominoContComponent;
  let fixture: ComponentFixture<DominoContComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DominoContComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DominoContComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
