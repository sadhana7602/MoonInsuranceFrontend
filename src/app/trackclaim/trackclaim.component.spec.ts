import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackclaimComponent } from './trackclaim.component';

describe('TrackclaimComponent', () => {
  let component: TrackclaimComponent;
  let fixture: ComponentFixture<TrackclaimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrackclaimComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrackclaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
