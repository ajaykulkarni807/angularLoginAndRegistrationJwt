import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterPaymmentComponent } from './master-paymment.component';

describe('MasterPaymmentComponent', () => {
  let component: MasterPaymmentComponent;
  let fixture: ComponentFixture<MasterPaymmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterPaymmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterPaymmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
