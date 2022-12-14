import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/core/services/cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  list_Cart:any;
  constructor() { }

  ngOnInit(): void {
   this.list_Cart = JSON.parse(localStorage.getItem('cart') || '[]');
  }

}
