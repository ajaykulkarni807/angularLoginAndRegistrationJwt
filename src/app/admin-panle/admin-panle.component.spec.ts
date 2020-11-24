import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPanleComponent } from './admin-panle.component';

describe('AdminPanleComponent', () => {
  let component: AdminPanleComponent;
  let fixture: ComponentFixture<AdminPanleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPanleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPanleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
