import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CourseListComponent } from './pages/course-list/course-list.component';
import { CourseDetailsComponent } from './pages/course-details/course-details.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { FaqSupportComponent } from './pages/faq-support/faq-support.component';
import { BlogNewsComponent } from './pages/blog-news/blog-news.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { TermsOfServicePrivacyComponent } from './pages/terms-of-service-privacy/terms-of-service-privacy.component';
import { Error404Component } from './pages/error-404/error-404.component';
import { ConfirmationPageComponent } from './pages/confirmation-page/confirmation-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { RegisterComponent } from './pages/register/register.component';
import { CosaImpareraiComponent } from './pages/cosa-imparerai/cosa-imparerai.component';



import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SubscriptionComponent } from './pages/subscription/subscription.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CourseListComponent,
    CourseDetailsComponent,
    CartComponent,
    CheckoutComponent,
    UserProfileComponent,
    AdminDashboardComponent,
    LoginComponent,
    SearchPageComponent,
    FaqSupportComponent,
    BlogNewsComponent,
    ContactUsComponent,
    TermsOfServicePrivacyComponent,
    Error404Component,
    ConfirmationPageComponent,
    FooterComponent,
    HeaderComponent,
    RegisterComponent,
    SubscriptionComponent,
    CosaImpareraiComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule.forRoot(),
    FormsModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
