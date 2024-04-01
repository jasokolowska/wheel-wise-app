import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventSigninDialogComponent } from './event-signin-dialog.component';

describe('EventSigninDialogComponent', () => {
  let component: EventSigninDialogComponent;
  let fixture: ComponentFixture<EventSigninDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventSigninDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EventSigninDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
