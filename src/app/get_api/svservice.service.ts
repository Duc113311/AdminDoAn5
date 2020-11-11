import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SinhVien } from '../models/khoa';

@Injectable({
  providedIn: 'root'
})
export class SVserviceService {

readonly APIURL="https://localhost:44306/api";
  readonly APIURLsearch="https://localhost:44306/api/SinhViens/search/";
  constructor(private http:HttpClient) { }
  status: string[] = ['OUTOFSTOCK', 'INSTOCK', 'LOWSTOCK'];

  productNames: string[] = [
      "Bamboo Watch",
      "Black Watch",
      "Blue Band",
      "Blue T-Shirt",
      "Bracelet",
      "Brown Purse",
      "Chakra Bracelet",
      "Galaxy Earrings",
      "Game Controller",
      "Gaming Set",
      "Gold Phone Case",
      "Green Earbuds",
      "Green T-Shirt",
      "Grey T-Shirt",
      "Headphones",
      "Light Green T-Shirt",
      "Lime Band",
      "Mini Speakers",
      "Painted Phone Case",
      "Pink Band",
      "Pink Purse",
      "Purple Band",
      "Purple Gemstone Necklace",
      "Purple T-Shirt",
      "Shoes",
      "Sneakers",
      "Teal T-Shirt",
      "Yellow Earbuds",
      "Yoga Mat",
      "Yoga Set",
  ];

  getSinhVien():Observable<SinhVien[]>
  {
    return this.http.get<SinhVien[]>(this.APIURL+ '/SinhViens');
  }
  updateSinhVien(val:any) : Observable<any>
  {
    return this.http.put<any>(this.APIURL+'/SinhViens/'+val.maSv, val);
  }
  addSinhVien(val:any)
  {
    debugger
    return this.http.post<SinhVien[]>(this.APIURL+ '/SinhViens',
    {
      maLop:val.maLop,
      hoVaTen:val.hoVaTen,
      ngaySinh:val.ngaySinh,
      soDienThoai:val.soDienThoai,
      diaChi:val.diaChi,
      gioiTinh:val.gioiTinh,
      email:val.email,
      cmnd:val.cmnd
    },
    );
  }
  deleteSinhVien(val:any)
  {
    debugger
    return this.http.delete(this.APIURL+'/SinhViens/'+val.maSv,val);
  }
  Timkiemsv(tensv:string):Observable<SinhVien[]>
  {
    return this.http.get<SinhVien[]>(this.APIURLsearch+tensv);
  }


  getProductsSmall() {
      return this.http.get<any>('assets/products-small.json')
      .toPromise()
      .then(res => <SinhVien[]>res.data)
      .then(data => { return data; });
  }

  // getProducts() {
  //     return this.http.get<HeDaoTao[]>(this.APIURL+ '/HeDaoTaos')
  //     .toPromise()
  //     .then(res => <HeDaoTao[]>res.data)
  //     .then(data => { return data; });
  // }

  getProductsWithOrdersSmall() {
      return this.http.get<any>('assets/products-orders-small.json')
      .toPromise()
      .then(res => <SinhVien[]>res.data)
      .then(data => { return data; });
  }

  // generatePrduct(): SinhVien {
  //     const product: SinhVien =  {
  //         maSv: this.generateId(),
  //         maLop:this
  //         tenHeDaoTao: this.generateName(),

  //     };


  //     return product;
  // }

  generateId() {
      let text = "";
      let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

      for (var i = 0; i < 5; i++) {
          text += possible.charAt(Math.floor(Math.random() * possible.length));
      }

      return text;
  }

  generateName() {
      return this.productNames[Math.floor(Math.random() * Math.floor(30))];
  }

  generatePrice() {
      return Math.floor(Math.random() * Math.floor(299)+1);
  }

  generateQuantity() {
      return Math.floor(Math.random() * Math.floor(75)+1);
  }

  generateStatus() {
      return this.status[Math.floor(Math.random() * Math.floor(3))];
  }

  generateRating() {
      return Math.floor(Math.random() * Math.floor(5)+1);
  }
}

