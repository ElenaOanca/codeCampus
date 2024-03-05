import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CourseListComponent } from './pages/course-list/course-list.component';
import { CourseDetailsComponent } from './pages/course-details/course-details.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { LoginSignupComponent } from './pages/login-signup/login-signup.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { FaqSupportComponent } from './pages/faq-support/faq-support.component';
import { BlogNewsComponent } from './pages/blog-news/blog-news.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { TermsOfServicePrivacyComponent } from './pages/terms-of-service-privacy/terms-of-service-privacy.component';
import { Error404Component } from './pages/error-404/error-404.component';
import { ConfirmationPageComponent } from './pages/confirmation-page/confirmation-page.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'course-list', component: CourseListComponent },
  { path: 'course-details/:id', component: CourseDetailsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'user-profile', component: UserProfileComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent },
  { path: 'login-signup', component: LoginSignupComponent },
  { path: 'search', component: SearchPageComponent },
  { path: 'faq-support', component: FaqSupportComponent },
  { path: 'blog-news', component: BlogNewsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'terms-of-service-privacy', component: TermsOfServicePrivacyComponent },
  { path: 'confirmation', component: ConfirmationPageComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: Error404Component } // Wildcard route for 404

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


