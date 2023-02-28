import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesJobsComponent } from './pages-jobs.component';

describe('PagesJobsComponent', () => {
  let component: PagesJobsComponent;
  let fixture: ComponentFixture<PagesJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesJobsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagesJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
