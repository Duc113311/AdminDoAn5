import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LopHocLaiComponent } from './lop-hoc-lai/lop-hoc-lai.component';
import { DKHocLaiComponent } from './dkhoc-lai/dkhoc-lai.component';
import { HocLaiComponent } from './hoc-lai/hoc-lai.component';
import { RouterModule } from '@angular/router';
import { BoMonComponent } from '../hoc-chinh/bo-mon/bo-mon.component';



@NgModule({
  declarations: [LopHocLaiComponent, DKHocLaiComponent, HocLaiComponent],
  imports: [
    CommonModule,
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
      }
    ]),
  ]
})
export class HocLaiModule { }
