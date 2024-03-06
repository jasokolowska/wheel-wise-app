import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationSideBarComponent } from './navigation-side-bar.component';

describe('NavigationSideBarComponent', () => {
  let component: NavigationSideBarComponent;
  let fixture: ComponentFixture<NavigationSideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavigationSideBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavigationSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
