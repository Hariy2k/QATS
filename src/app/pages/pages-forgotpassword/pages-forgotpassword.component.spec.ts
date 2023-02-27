import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesForgotpasswordComponent } from './pages-forgotpassword.component';

describe('PagesForgotpasswordComponent', () => {
  let component: PagesForgotpasswordComponent;
  let fixture: ComponentFixture<PagesForgotpasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesForgotpasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagesForgotpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
