import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
   host = environment.BASE_API;
   sanpham:any;
  constructor(private api:HttpClient) { }

  ngOnInit(): void {
   this.api.get('https://localhost:44393/get_all').subscribe(data => {
    this.sanpham = data;
    console.log(this.sanpham);
   })
  }

}
