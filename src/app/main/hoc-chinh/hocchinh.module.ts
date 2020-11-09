import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KhoaComponent } from './khoa/khoa.component';
import { LopComponent } from './lop/lop.component';
import { HeDaoTaoComponent } from './he-dao-tao/he-dao-tao.component';
import { HocKyComponent } from './hoc-ky/hoc-ky.component';
import { GiangDayComponent } from './giang-day/giang-day.component';
import { MonHocComponent } from './mon-hoc/mon-hoc.component';
import { BoMonComponent } from './bo-mon/bo-mon.component';
import { NganhDTComponent } from './nganh-dt/nganh-dt.component';
import { DiemComponent } from './diem/diem.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { AddUpdateComponent } from './khoa/add-update/add-update.component';
import { SvtruotComponent } from './svtruot/svtruot.component';




@NgModule({
  declarations: [KhoaComponent, LopComponent, HeDaoTaoComponent, HocKyComponent, GiangDayComponent, MonHocComponent, BoMonComponent, NganhDTComponent, DiemComponent, AddUpdateComponent, SvtruotComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path:'bo-mon',
        component:BoMonComponent,
      },
      {
        path:'diem',
        component:DiemComponent,
      },
      {
        path:'giang-day',
        component:GiangDayComponent,
      },
      {
        path:'he-dao-tao',
        component:HeDaoTaoComponent,
      },
      {
        path:'hoc-ky',
        component:HocKyComponent,
      },
      {
        path:'khoa',
        component:KhoaComponent,
      },
      {
        path:'lop',
        component:LopComponent,
      },
      {
        path:'mon-hoc',
        component:MonHocComponent,
      },
      {
        path:'nganh-dt',
        component:NganhDTComponent,
      },
      {
        path:'sv_truot',
        component:SvtruotComponent,
      },

    ]),
  ]
})
export class HocChinhModule { }
