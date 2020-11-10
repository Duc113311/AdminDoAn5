import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import {HcserviceService} from 'src/app/get_api_hocchinh/hcservice.service';
import { HeDaoTao } from 'src/app/models/khoa';
@Component({
  selector: 'app-he-dao-tao',
  templateUrl: './he-dao-tao.component.html',
  styleUrls: ['./he-dao-tao.component.css'],

})
export class HeDaoTaoComponent implements OnInit {

  productDialog: boolean;

  public products: HeDaoTao[];

  product: HeDaoTao;

  selectedProducts: HeDaoTao[];

  submitted: boolean;

  constructor(private productService: HcserviceService, private messageService: MessageService, private confirmationService: ConfirmationService) { }

  ngOnInit() {
      this.productService.getHeDaoTao().subscribe(data => this.products = data);
  }

  openNew() {
      this.product = {
        maHeDaoTao:'',
        tenHeDaoTao:''
      };
      this.submitted = false;
      this.productDialog = true;
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

  editProduct(product: HeDaoTao) {
      this.product = {...product};
      this.productDialog = true;
  }

  deleteProduct(product: HeDaoTao) {
      this.confirmationService.confirm({
          message: 'Are you sure you want to delete ' + product.tenHeDaoTao + '?',
          header: 'Confirm',
          icon: 'pi pi-exclamation-triangle',
          accept: () => {
            debugger
              this.productService.deleteHeDaoTao(product).subscribe(data=>
                {
                  this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Deleted', life: 3000});
                  this.getAll();

            });
          }
      });
  }

  hideDialog() {
      this.productDialog = false;
      this.submitted = false;
  }
  getAll(){
    this.productService.getHeDaoTao().subscribe(
      data=>
      {
        this.products=data;
      });
  }

  }
