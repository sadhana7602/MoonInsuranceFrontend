import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryresponseComponent } from './queryresponse.component';

describe('QueryresponseComponent', () => {
  let component: QueryresponseComponent;
  let fixture: ComponentFixture<QueryresponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QueryresponseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QueryresponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
