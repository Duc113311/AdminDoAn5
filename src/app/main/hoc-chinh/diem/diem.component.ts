import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import {QldsvService} from 'src/app/get_api/qldsv.service';
import { Diem } from 'src/app/models/khoa'
@Component({
  selector: 'app-diem',
  templateUrl: './diem.component.html',
  styleUrls: ['./diem.component.css']
})
export class DiemComponent implements OnInit {

  productDialog: boolean;

  public products: Diem[];

  product: Diem;

  selectedProducts: Diem[];

  submitted: boolean;

  constructor(private productService: QldsvService, private messageService: MessageService, private confirmationService: ConfirmationService) { }

  ngOnInit() {
      this.productService.getAlldiemsv().subscribe(data => this.products = data);
  }

  openNew() {
      // this.product = {
      //   maSv:'',
      //   tenHeDaoTao:''
      // };
      // this.submitted = false;
      // this.productDialog = true;
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

  editProduct(product: Diem) {
      this.product = {...product};
      this.productDialog = true;
  }

  deleteProduct(product: Diem) {
      // this.confirmationService.confirm({
      //     message: 'Are you sure you want to delete ' + product.tenHeDaoTao + '?',
      //     header: 'Confirm',
      //     icon: 'pi pi-exclamation-triangle',
      //     accept: () => {
      //       debugger
      //         this.productService.deleteHeDaoTao(product).subscribe(data=>
      //           {
      //             this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Deleted', life: 3000});
      //             this.getAll();

      //       });
      //     }
      // });
  }

  hideDialog() {
      this.productDialog = false;
      this.submitted = false;
  }
  getAll(){
    // this.productService.getHeDaoTao().subscribe(
    //   data=>
    //   {
    //     this.products=data;
    //   });
  }
  saveProduct() {
      // this.submitted = true;
      // debugger
      // if (this.product.tenHeDaoTao.trim()) {
      //   debugger
      //     if (this.product.maHeDaoTao) {
      //        this.productService.updatehdaotao(this.product).subscribe(data=>
      //         {

      //           this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Updated', life: 3000});
      //           this.getAll();
      //         });
      //     }
      //     else {
      //        this.productService.addHeDaoTao(this.product).subscribe(data=>
      //         {
      //           this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Created', life: 3000});
      //           this.getAll();
      //         });
      //     }

      //     this.products = [...this.products];
      //     this.productDialog = false;
      //     this.product = {
      //       maHeDaoTao:'',
      //       tenHeDaoTao:''
      //     };

    //   }
      }
  }
