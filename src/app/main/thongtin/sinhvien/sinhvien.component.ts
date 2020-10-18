import { Component, OnInit } from '@angular/core';
import { Product } from '../../../products';
import { ProductService } from '../../../productservice';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import {AppserviceService} from 'src/app/get_api/appservice.service';
import {SinhVien} from 'src/app/models/khoa'
@Component({
  selector: 'app-sinhvien',
  templateUrl: './sinhvien.component.html',
  styles: [`
  :host ::ng-deep .p-dialog .product-image {
      width: 150px;
      margin: 0 auto 2rem auto;
      display: block;
  }
`]
})
export class SinhvienComponent implements OnInit {


  monhocDialog: boolean;

  MonHocList:SinhVien[];

  monhoc:SinhVien;
  product: Product;
  selectMonHoc:SinhVien[];
  selectedProducts: Product[];
  valmh:any;
  submitted: boolean;

  constructor(
    private productService: ProductService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private serviceMH:AppserviceService

    ) { }

  ngOnInit():void {
    this.referentMonHocLisst();
  }

  referentMonHocLisst()
  {
    this.serviceMH.getSinhvienList().subscribe(data=>{
      this.MonHocList=data;
    });
  }

  openNew() {
      this.product = {};
      this.submitted = false;
      this.monhocDialog = true;
  }



  hideDialog() {
      this.monhocDialog = false;
      this.submitted = false;
  }

  // saveProduct() {
  //     this.submitted = true;

  //     if (this.product.name.trim()) {
  //         if (this.product.id) {
  //             this.products[this.findIndexById(this.product.id)] = this.product;
  //             this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Updated', life: 3000});
  //         }
  //         else {
  //             this.product.id = this.createId();
  //             this.product.image = 'product-placeholder.svg';
  //             this.products.push(this.product);
  //             this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Created', life: 3000});
  //         }

  //         this.products = [...this.products];
  //         this.productDialog = false;
  //         this.product = {};
  //     }
  // }


  createId(): string {
      let id = '';
      var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      for ( var i = 0; i < 5; i++ ) {
          id += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      return id;
  }
}
