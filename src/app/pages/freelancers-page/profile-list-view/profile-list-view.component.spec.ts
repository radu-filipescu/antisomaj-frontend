import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileListViewComponent } from './profile-list-view.component';

describe('ProfileListViewComponent', () => {
  let component: ProfileListViewComponent;
  let fixture: ComponentFixture<ProfileListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileListViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
