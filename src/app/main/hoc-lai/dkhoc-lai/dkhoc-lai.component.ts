import { Component, OnInit } from '@angular/core';
import { QldsvService } from 'src/app/get_api/qldsv.service';
import { DkHocLai } from 'src/app/models/khoa';

@Component({
  selector: 'app-dkhoc-lai',
  templateUrl: './dkhoc-lai.component.html',
  styleUrls: ['./dkhoc-lai.component.css']
})
export class DKHocLaiComponent implements OnInit {

  public dkhoklai:DkHocLai[];
  constructor(private qlsvServer:QldsvService) { }

  ngOnInit(): void {
  };
  onclick(tenKhoa:string,tenLop:string,maSv:number)
  {
    debugger
    this.qlsvServer.getDangKyHocLai(tenKhoa,tenLop,maSv).subscribe(data=>this.dkhoklai=data);

  }

}
