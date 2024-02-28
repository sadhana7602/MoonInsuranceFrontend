import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepropertyComponent } from './homeproperty.component';

describe('HomepropertyComponent', () => {
  let component: HomepropertyComponent;
  let fixture: ComponentFixture<HomepropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomepropertyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomepropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
