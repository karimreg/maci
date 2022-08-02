import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DominopComponent } from './dominop.component';

describe('DominopComponent', () => {
  let component: DominopComponent;
  let fixture: ComponentFixture<DominopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DominopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DominopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
