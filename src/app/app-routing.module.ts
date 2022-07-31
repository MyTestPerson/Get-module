import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [

  { path: '', loadChildren: () => import('./mod-main/mod-main.module').then(m => m.ModMainModule) },

  { path: 'admin', loadChildren: () => import('./mod-admin/mod-admin.module').then(m => m.ModAdminModule) },

  { path: 'user', loadChildren: () => import('./mod-user/mod-user.module').then(m => m.ModUserModule) },

  { path: '**', loadChildren: () => import('./mod-error/mod-error.module').then(m => m.ModErrorModule) }

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
