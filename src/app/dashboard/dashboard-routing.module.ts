import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';

const dashboardRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    // children: [
      // {
      //   path: '',
      //   redirectTo: 'boardlist',
      //   pathMatch: 'full'
      // },
      // {
      //   path: 'board/:id',
      //   component: BoardComponent
      // },
      // {
      //   path: 'boardlist',
      //   component: BoardListComponent
      // }
    // ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(
      dashboardRoutes
    )
  ]
})
export class DashboardRoutingModule { }
