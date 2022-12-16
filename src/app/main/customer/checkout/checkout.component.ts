import { ApiService } from './../../../core/services/api.service';
import { Component, Injector, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { BaseComponent } from 'src/app/core/common/base-component';
ApiService
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent extends BaseComponent implements OnInit {
  list_checkout:any
  public frmKhach!: FormGroup;
  public list_items: any;
  public tTong: any;
  host = environment.BASE_API
  total:any;
  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
     this.list_checkout = JSON.parse(localStorage.getItem('cart')|| '[]');
     this.total = this.list_checkout.map((x:any)=>{this.total+=x.quantity*x.giatien})
     this.frmKhach = new FormGroup({
      'txt_name': new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
      'txt_sdt': new FormControl('', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      'txt_email': new FormControl('', [Validators.email]),
      'txt_diachi': new FormControl('', [Validators.required]),
  })
}

get hoten() {
  return this.frmKhach.get('txt_name')!;
}
get sodienthoai() {
  return this.frmKhach.get('txt_sdt')!;
}
get email() {
  return this.frmKhach.get('txt_email')!;
}
get diachi() {
  return this.frmKhach.get('txt_diachi')!;
}
public onSubmit(val:any) {
  let obj: any = {};
  obj.khach = {
    tenKhachHang: val.txt_name,
    diaChi: val.txt_diachi,
    soDienThoai: val.txt_sdt,
    email: val.txt_email
  };
  
  obj.donhang = [];
  this.list_checkout.forEach((x: any) => {
    obj.donhang.push({
      maSanPham: x.maSanPham,
      soLuong: x.quantity,
      giaMua: x.giatien
    });
  });
  console.log(obj);
  this._api.post('/api/customers/create-giohang', obj).subscribe(res => {
    debugger
    if (res && res.data) {
      alert('Thêm dữ liệu thành công')
    } else {
      alert('Có lỗi')
    }
  });
}
}
