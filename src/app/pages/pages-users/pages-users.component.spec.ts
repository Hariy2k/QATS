import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesUsersComponent } from './pages-users.component';

describe('PagesUsersComponent', () => {
  let component: PagesUsersComponent;
  let fixture: ComponentFixture<PagesUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesUsersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagesUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
