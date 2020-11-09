import { Component, OnInit } from '@angular/core';
import { Kobiton } from 'protractor/built/driverProviders';
import {Lop,Khoa,HocKy, MonHoc, SinhVien, Diem} from 'src/app/models/khoa'
import { AppserviceService } from 'src/app/get_api/appservice.service';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-svtruot',
  templateUrl: './svtruot.component.html',
  styleUrls: ['./svtruot.component.css']
})

export class SvtruotComponent implements OnInit {
  public lstDiem:Diem[]

  public lstSV:SinhVien[]
  Sisosv:number;
    constructor(private productService: AppserviceService) {

    }
  ngOnInit(): void {


    this.productService.getListSV().subscribe(data=>this.lstSV= data);

  }
  oneDiemSV(seletcID:any):void{
    debugger
    this.productService.getdiemsinhvientruot(seletcID).subscribe(data=>{this.lstDiem=data;})
  }



}
