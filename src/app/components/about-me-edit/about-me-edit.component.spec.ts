import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMeEditComponent } from './about-me-edit.component';

describe('AboutMeEditComponent', () => {
  let component: AboutMeEditComponent;
  let fixture: ComponentFixture<AboutMeEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutMeEditComponent]
    });
    fixture = TestBed.createComponent(AboutMeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
