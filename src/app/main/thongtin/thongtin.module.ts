import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SinhvienComponent } from './sinhvien/sinhvien.component';
import { GiaovienComponent } from './giaovien/giaovien.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';

import { AppModule } from 'src/app/app.module';
//



@NgModule({
  declarations: [SinhvienComponent, GiaovienComponent],
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild([
      {
        path:'giaovien',
        component:GiaovienComponent,
      },
      {
        path:'sinhvien',
        component:SinhvienComponent,
      },
    ]),
  ]

})
export class ThongtinModule { }
