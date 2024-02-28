import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimsModuleComponent } from './claims-module.component';

describe('ClaimsModuleComponent', () => {
  let component: ClaimsModuleComponent;
  let fixture: ComponentFixture<ClaimsModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClaimsModuleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClaimsModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
