import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {AppserviceService} from 'src/app/get_api/appservice.service';
import { Khoa } from 'src/app/models/khoa';
import { ConfirmationService } from 'primeng/api';
@Component({
  selector: 'app-khoa',
  templateUrl: './khoa.component.html',
  styleUrls: ['./khoa.component.css']
})
export class KhoaComponent implements OnInit {
  confirmationService: any;
  products: any;
  product: {};
  messageService: any;

  constructor(private service:AppserviceService){}
  KhoaList:Khoa[];
  ActivateAddEditKhoa:boolean=false;
  dep:any;
  ModelTile:string;

  ngOnInit():void{
    this.refreshKhoalist();

  }

  refreshKhoalist(){

    this.service.getKhoaList().subscribe(data=>{
      this.KhoaList=data;
    })
  }
  addclick()
  {
    this.dep={
      maKhoa:0,
      tenKhoa:""
    }
    this.ModelTile="Thêm Khoa";
    this.ActivateAddEditKhoa=true;
  }

  editClick(item)
  {
    this.dep=item;
    this.ModelTile="Sửa Khoa";
    this.ActivateAddEditKhoa=true;
  }

  closeClick()
  {
    this.ActivateAddEditKhoa=false;
    this.refreshKhoalist();
  }

  deleteKhoa(item)
  {
    if(confirm('Bạn muốn xóa không?'))
    {
      debugger
      this.service.deleteKhoas(item.maKhoa).subscribe(data=>{
        alert(data.toString());
        this.refreshKhoalist();
      })
    }
  }


}


