import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddJobPageComponent } from './add-job-page.component';

describe('AddJobPageComponent', () => {
  let component: AddJobPageComponent;
  let fixture: ComponentFixture<AddJobPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddJobPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddJobPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
