import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsOfServicePrivacyComponent } from './terms-of-service-privacy.component';

describe('TermsOfServicePrivacyComponent', () => {
  let component: TermsOfServicePrivacyComponent;
  let fixture: ComponentFixture<TermsOfServicePrivacyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TermsOfServicePrivacyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TermsOfServicePrivacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
