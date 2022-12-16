import { CheckoutComponent } from './customer/checkout/checkout.component';
import { CartComponent } from './customer/cart/cart.component';
import { AppRoutingModule } from './../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { modulesRoutes } from './main.routes';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CartComponent,
    CheckoutComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forChild(modulesRoutes),
  ],
})
export class MainModule { }
