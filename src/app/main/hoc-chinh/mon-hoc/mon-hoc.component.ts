import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/products';
import { ProductService } from 'src/app/productservice';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import {AppserviceService} from 'src/app/get_api/appservice.service';
import {MonHoc} from 'src/app/models/khoa';
import { NgForm } from '@angular/forms';

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

    MonHocList:MonHoc[];

    monhoc:MonHoc;

    selectMonHoc:MonHoc[];

    submitted: boolean;
  messageService: any;

    constructor(
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


}
