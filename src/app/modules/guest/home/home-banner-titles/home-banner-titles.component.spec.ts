import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBannerTitlesComponent } from './home-banner-titles.component';

describe('HomeBannerTitlesComponent', () => {
  let component: HomeBannerTitlesComponent;
  let fixture: ComponentFixture<HomeBannerTitlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeBannerTitlesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeBannerTitlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
