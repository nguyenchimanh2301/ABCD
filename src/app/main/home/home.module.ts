import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { DetailComponent } from './detail/detail.component';
import { ListProductComponent } from './list-product/list-product.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    IndexComponent,
    DetailComponent,
    ListProductComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    BrowserModule
  ]
})
export class HomeModule { }
