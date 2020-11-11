import { Component, OnInit } from '@angular/core';
import { Product } from '../../../products';
import { ProductService } from '../../../productservice';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import {AppserviceService} from 'src/app/get_api/appservice.service';
import {SinhVien} from 'src/app/models/khoa'
import { HcserviceService } from 'src/app/get_api_hocchinh/hcservice.service';
import { mainModule } from 'process';
import { SVserviceService } from 'src/app/get_api/svservice.service';
// import { ExcelService } from 'src/app/get_api/excel.service';
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


  productDialog: boolean;

  public products: SinhVien[];

  product: SinhVien;

  selectedProducts: SinhVien[];

  submitted: boolean;

  constructor(private productService: SVserviceService, private messageService: MessageService, private confirmationService: ConfirmationService
    ) { }

  ngOnInit() {
      this.productService.getSinhVien().subscribe(data => this.products = data);
  }
  // exportAsXLSX():void {
  //   this.excelService.exportAsExcelFile(this.products, 'sample');
  // }
  openNew() {
      this.product = {
        maSv:0,
        maLop:0,
        tenLop:'',
        hoVaTen:'',
        ngaySinh:'',
        soDienThoai:'',
        diaChi:'',
        gioTinh:'',
        email:'',
        cmnd:''
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

  editProduct(product: SinhVien) {
      this.product = {...product};
      this.productDialog = true;
  }

  deleteProduct(product: SinhVien) {
      this.confirmationService.confirm({
          message: 'Are you sure you want to delete ' + product.hoVaTen + '?',
          header: 'Confirm',
          icon: 'pi pi-exclamation-triangle',
          accept: () => {
            debugger
              this.productService.deleteSinhVien(product).subscribe(data=>
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
  saveProduct() {
    this.submitted = true;
    debugger
    if (this.product.hoVaTen.trim()) {
      debugger
        if (this.product.maSv) {
           this.productService.updateSinhVien(this.product).subscribe(data=>
            {

              this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Updated', life: 3000});
              this.getAll();
            });
        }
        else {
           this.productService.addSinhVien(this.product).subscribe(data=>
            {
              this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Created', life: 3000});
              this.getAll();
            });
        }

        this.products = [...this.products];
        this.productDialog = false;
        this.product = {
          maSv:0,
        maLop:0,
        tenLop:'',
        hoVaTen:'',
        ngaySinh:'',
        soDienThoai:'',
        diaChi:'',
        gioTinh:'',
        email:'',
        cmnd:''
        };

    }
    }

    findIndexById(id: number): number {
      let index = -1;
      for (let i = 0; i < this.products.length; i++) {
          if (this.products[i].maSv === id) {
              index = i;
              break;
          }
      }

      return index;
  }


  getAll(){
    this.productService.getSinhVien().subscribe(
      data=>
      {
        this.products=data;
      });
  }

  }
