import { Component, OnInit,Input } from '@angular/core';
import { from } from 'rxjs';
import {AppserviceService} from 'src/app/get_api/appservice.service'
@Component({
  selector: 'app-add-update',
  templateUrl: './add-update.component.html',
  styleUrls: ['./add-update.component.css']
})
export class AddUpdateComponent implements OnInit {

  constructor(private service:AppserviceService) { }
  @Input() dep:any;
  maKhoa:string;
  tenKhoa:string;
  ngOnInit(): void {
    this.maKhoa=this.dep.maKhoa;
    this.tenKhoa=this.dep.tenKhoa;
  }
  addKhoa()
  {
    var val={maKhoa:this.maKhoa,tenKhoa:this.tenKhoa};
    this.service.addKhoas(val).subscribe(res=>{
      alert(res.toString());
    });
  }
  capnhatkhoa(){
    var val={
      maKhoa:this.maKhoa,
      tenKhoa:this.tenKhoa
    };
    this.service.updateKhoas(val).subscribe(res=>{
      alert(JSON.stringify(res));
    });
  }
}


