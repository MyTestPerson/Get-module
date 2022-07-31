import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModErrorRoutingModule } from './mod-error-routing.module';
import { ModErrorComponent } from './mod-error.component';
import {HeadComponent} from "../mod-main/head/head.component";


@NgModule({
  declarations: [
    ModErrorComponent
  ],
  imports: [
    HeadComponent,
    CommonModule,
    ModErrorRoutingModule
  ]
})
export class ModErrorModule { }
