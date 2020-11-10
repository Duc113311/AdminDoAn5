import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LopHocLaiComponent } from './lop-hoc-lai/lop-hoc-lai.component';
import { DKHocLaiComponent } from './dkhoc-lai/dkhoc-lai.component';
import { HocLaiComponent } from './hoc-lai/hoc-lai.component';
import { RouterModule } from '@angular/router';
import { AppserviceService } from 'src/app/get_api/appservice.service';
import { KetxuatComponent } from './ketxuat/ketxuat.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [LopHocLaiComponent, DKHocLaiComponent, HocLaiComponent, KetxuatComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path:'hoc-lai',
        component:HocLaiComponent,
      },
      {
        path:'lop-hoc-lai',
        component:LopHocLaiComponent,
      },
      {
        path:'dkhoc-lai',
        component:DKHocLaiComponent,
      },
      {
        path:'ketxuat',
        component:KetxuatComponent,
      }
    ]),
  ],
  providers:[AppserviceService]
})
export class HocLaiModule { }
