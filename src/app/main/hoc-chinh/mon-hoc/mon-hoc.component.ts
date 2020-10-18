import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/products';
import { ProductService } from 'src/app/productservice';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import {AppserviceService} from 'src/app/get_api/appservice.service';
import {MonHoc} from 'src/app/models/khoa';

@Component({
  selector: 'app-mon-hoc',
  templateUrl: './mon-hoc.component.html',
  styles: [`
        :host ::ng-deep .p-dialog .product-image {
            width: 150px;
            margin: 0 auto 2rem auto;
            display: block;
        }
    `]
})
export class MonHocComponent implements OnInit {

 monhocDialog: boolean;

    MonHocList:MonHoc[];
    products: Product[];
    monhoc:MonHoc;
    product: Product;
    selectMonHoc:MonHoc[];
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
      this.serviceMH.getMonHocList().subscribe(data=>{
        this.MonHocList=data;
      });
    }

    openNew() {
        this.product = {};
        this.submitted = false;
        this.monhocDialog = true;
    }

    deleteSelectedProducts() {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete the selected products?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.products = this.products.filter(val => !this.selectedProducts.includes(val));
                this.selectedProducts = null;
                this.messageService.add({severity:'success', summary: 'Successful', detail: 'Products Deleted', life: 3000});
            }
        });
    }



    deleteProduct(product: Product) {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete ' + product.name + '?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.products = this.products.filter(val => val.id !== product.id);
                this.product = {};
                this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Deleted', life: 3000});
            }
        });
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

    findIndexById(id: string): number {
        let index = -1;
        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].id === id) {
                index = i;
                break;
            }
        }

        return index;
    }

    createId(): string {
        let id = '';
        var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for ( var i = 0; i < 5; i++ ) {
            id += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return id;
    }
}
