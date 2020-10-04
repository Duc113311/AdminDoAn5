import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';
import { RouterModule,Routes } from '@angular/router';

export const mainRouter: Routes=[
  {
    path: '',component:MainComponent,
    children: [
      {
        path:'',component:DashboardComponent
      },
      {
        path:'thongtin',loadChildren:() =>import('./thongtin/thongtin.module').then(m=>m.ThongtinModule)
      },
      {
        path:'hoc-chinh',loadChildren:()=>import('./hoc-chinh/hocchinh.module').then(m=>m.HocChinhModule)
      },
      {
        path:'hoc-lai',loadChildren:()=>import('./hoc-lai/hoc-lai.module').then(m=>m.HocLaiModule)
      },

    ]
  }

];

@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(mainRouter)
  ]
})
export class MainModule {

 }
