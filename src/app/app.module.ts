import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from "@angular/forms";
import { NgModule, Injectable } from '@angular/core';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BanerComponent } from './baner/baner.component';
import { DiscountsComponent } from './discounts/discounts.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgxGalleryModule } from 'ngx-gallery';
import { AboutComponent } from './about/about.component';
import { OfferComponent } from './offer/offer.component';
import { ContactComponent } from './contact/contact.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FooterComponent } from './footer/footer.component';
import { PrzezTelefonComponent } from './przez-telefon/przez-telefon.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule, HttpRequest, HttpHandler, HttpInterceptor, HTTP_INTERCEPTORS } from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { HttpInterceptorBasicAuthService } from './service/http/http-interceptor-basic-auth.service';
import { ProductsCategoryComponent } from './products-category/products-category.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BanerComponent,
    DiscountsComponent,
    GalleryComponent,
    AboutComponent,
    OfferComponent,
    ContactComponent,
    ContactFormComponent,
    FooterComponent,
    PrzezTelefonComponent,
    MainComponent,
    LoginComponent,
    AdminComponent,
    PageNotFoundComponent,
    EditProductComponent,
    ProductsListComponent,
    ProductsCategoryComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    NgxGalleryModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
     {provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorBasicAuthService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }