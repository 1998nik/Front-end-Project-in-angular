import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatwiseproductComponent } from './catwiseproduct.component';

describe('CatwiseproductComponent', () => {
  let component: CatwiseproductComponent;
  let fixture: ComponentFixture<CatwiseproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatwiseproductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatwiseproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
