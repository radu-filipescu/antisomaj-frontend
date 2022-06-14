import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelancersPageComponent } from './freelancers-page.component';

describe('FreelancersPageComponent', () => {
  let component: FreelancersPageComponent;
  let fixture: ComponentFixture<FreelancersPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreelancersPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreelancersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
