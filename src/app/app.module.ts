import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import localeFrExtra from '@angular/common/locales/extra/fr';

registerLocaleData(localeFr, 'fr-FR', localeFrExtra);
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { CartComponent } from './cart/cart.component';
import { CartService } from './cart.service';
import { ShippingDetailsComponent } from './shipping-details/shipping-details.component';
import { LoginComponent } from './login/login.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ProductCardComponent,
    CartComponent,
    ShippingDetailsComponent,
    LoginComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: LoginComponent},
      { path: 'poroduct-listing', component: ProductCardComponent },
      { path: 'cart', component: CartComponent},
      { path: 'shipping-details', component: ShippingDetailsComponent},
      { path: ' ', component: ProductDetailsComponent}
  
    ])
  ],
  providers: [
    CartService,
    NavComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
