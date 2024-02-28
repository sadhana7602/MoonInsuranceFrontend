import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveclaimComponent } from './approveclaim.component';

describe('ApproveclaimComponent', () => {
  let component: ApproveclaimComponent;
  let fixture: ComponentFixture<ApproveclaimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApproveclaimComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApproveclaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
