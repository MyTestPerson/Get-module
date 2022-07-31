import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModUserRoutingModule } from './mod-user-routing.module';
import { ModUserComponent } from './mod-user.component';
import { UserComponent } from './user/user.component';


@NgModule({
  declarations: [
    ModUserComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    ModUserRoutingModule
  ]
})
export class ModUserModule { }
