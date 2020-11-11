import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { AppserviceService } from 'src/app/get_api/appservice.service';
import { QldsvService } from 'src/app/get_api/qldsv.service';
import { Diem, HocKy } from 'src/app/models/khoa';


@Component({
  selector: 'app-tracuu',
  templateUrl: './tracuu.component.html',
  styleUrls: ['./tracuu.component.css']
})
export class TracuuComponent implements OnInit {
  public hokky:HocKy[];
  public diem:Diem[];

  constructor(private appServer:AppserviceService,private qlsvServer:QldsvService) { }

  ngOnInit(): void {
    this.appServer.getHocKyList().subscribe(data=>this.hokky=data);
  };
  onlick(tenkhoa:string,tenlop:string,masv:number,namhoc:number)
  {
    debugger
    this.qlsvServer.gettracuumonhoc(tenkhoa,tenlop,masv,namhoc).subscribe(data=>this.diem=data);
  }

}
