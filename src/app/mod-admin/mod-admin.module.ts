import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModAdminRoutingModule } from './mod-admin-routing.module';
import { ModAdminComponent } from './mod-admin.component';
import { AdminComponent } from './admin/admin.component';


@NgModule({
  declarations: [
    ModAdminComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    ModAdminRoutingModule
  ]
})
export class ModAdminModule { }
