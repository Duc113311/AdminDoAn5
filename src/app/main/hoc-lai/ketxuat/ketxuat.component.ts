import { Component, OnInit } from '@angular/core';

import { QldsvService } from "src/app/get_api/qldsv.service";
import { AppserviceService } from "src/app/get_api/appservice.service";
import { MonHoc, MonHocTruot } from 'src/app/models/khoa';
@Component({
  selector: 'app-ketxuat',
  templateUrl: './ketxuat.component.html',
  styleUrls: ['./ketxuat.component.css']
})
export class KetxuatComponent implements OnInit {

  public products: MonHoc[];
  public monhoctruot:MonHocTruot[];
  constructor(private productService: AppserviceService,private qlsvservice:QldsvService) { }

  ngOnInit(): void {
    this.productService.getMonHocList().subscribe(data=>this.products=data);

  };

  oneDiemSV(idmon:number,tenkhoa:string,tenlop:string){

    this.qlsvservice.getmonhocsvtruot(idmon,tenkhoa,tenlop).subscribe(data=>{this.monhoctruot=data;})

  }
}
