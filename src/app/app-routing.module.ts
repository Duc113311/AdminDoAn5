import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './main/dashboard/dashboard.component';
import { MainComponent } from './main/main.component';
const routes: Routes = [
  {
    path:'',
    loadChildren:()=>import('./main/main.module').then((m)=>m.MainModule),

  },
  {
    path:'Loginadmin',
    component:LoginComponent,
  },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
