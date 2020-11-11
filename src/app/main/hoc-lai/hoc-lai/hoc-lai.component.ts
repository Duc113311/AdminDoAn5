import {Component, ViewChild,OnInit} from '@angular/core';
import { AppserviceService } from 'src/app/get_api/appservice.service';
import { QldsvService } from 'src/app/get_api/qldsv.service';
import { HocKy, TraCuuMon } from 'src/app/models/khoa';


@Component({
  selector: 'app-hoc-lai',
  templateUrl: './hoc-lai.component.html',
  styleUrls: ['./hoc-lai.component.css']
})
export class HocLaiComponent implements OnInit {


  public hokky:HocKy[]
  public tracuu:TraCuuMon[]
  constructor(private qlsvServer:QldsvService,private appServer:AppserviceService) { }

  ngOnInit(): void {
    this.appServer.getHocKyList().subscribe(data=>this.hokky=data);
  };
  onclick(tenkhoa:string,tenMon:string,namhoc:number)
  {
    this.qlsvServer.getTraCuuMonHoc(tenkhoa,tenMon,namhoc).subscribe(data=>this.tracuu=data);
  }

}
