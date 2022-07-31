import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModAdminComponent } from './mod-admin.component';
import {AdminComponent} from "./admin/admin.component";

const routes: Routes = [

  { path: '', component: ModAdminComponent, children: [
      {path: '', component: AdminComponent}
    ] }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModAdminRoutingModule { }
