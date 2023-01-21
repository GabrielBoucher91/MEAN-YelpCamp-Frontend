import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampgroundHomeComponent } from './campground-home.component';

describe('CampgroundHomeComponent', () => {
  let component: CampgroundHomeComponent;
  let fixture: ComponentFixture<CampgroundHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampgroundHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampgroundHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
