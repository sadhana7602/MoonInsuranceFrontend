import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyModuleComponent } from './policy-module.component';

describe('PolicyModuleComponent', () => {
  let component: PolicyModuleComponent;
  let fixture: ComponentFixture<PolicyModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PolicyModuleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PolicyModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
