import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RamipComponent } from './ramip.component';

describe('RamipComponent', () => {
  let component: RamipComponent;
  let fixture: ComponentFixture<RamipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RamipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RamipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
