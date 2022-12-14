import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/core/services/cart.service';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  public id:any
  public date:any;
  public subscription!: Subscription;
  constructor(private http:HttpClient,private router:Router,private activatedRoute: ActivatedRoute,private cart:CartService) { }
  chitietSP:any;
  ngOnInit(): void {
    this.subscription = this.activatedRoute.params.subscribe(params =>{
      this.id = params['id'];
      console.log(this.id);
    })
    this.http.get('https://localhost:44393/get_by_id?id='+this.id).subscribe(data => { this.chitietSP = data
    console.log(this.chitietSP);})

  }
  addcart(item:any){
    this.cart.addToCart(item);
    alert('thêm thành công');
  }

}
