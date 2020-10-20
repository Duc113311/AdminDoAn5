import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {HeDaoTao} from 'src/app/models/khoa';
@Injectable({
  providedIn: 'root'
})
export class HcserviceService {
  readonly APIURL="https://localhost:44306/api";
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

  getHeDaoTao():Observable<HeDaoTao[]>
  {
    return this.http.get<HeDaoTao[]>(this.APIURL+ '/HeDaoTaos');
  }
  updatehdaotao(val:any) : Observable<any>
  {
    return this.http.put<any>(this.APIURL+'/HeDaoTaos/'+val.maHeDaoTao, val);
  }
  addHeDaoTao(val:any)
  {
    debugger
    return this.http.post<HeDaoTao[]>(this.APIURL+ '/HeDaoTaos',{tenHeDaoTao:val.tenHeDaoTao});
  }
  deleteHeDaoTao(val:any)
  {
    debugger
    return this.http.delete(this.APIURL+'/HeDaoTaos/'+val.maHeDaoTao,val);
  }

  getProductsSmall() {
      return this.http.get<any>('assets/products-small.json')
      .toPromise()
      .then(res => <HeDaoTao[]>res.data)
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
      .then(res => <HeDaoTao[]>res.data)
      .then(data => { return data; });
  }

  generatePrduct(): HeDaoTao {
      const product: HeDaoTao =  {
          maHeDaoTao: this.generateId(),
          tenHeDaoTao: this.generateName(),

      };


      return product;
  }

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

