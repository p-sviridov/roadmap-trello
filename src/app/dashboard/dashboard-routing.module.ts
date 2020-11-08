import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BoardComponent } from './board/board.component';
import { BoardsListComponent } from './boards-list/boards-list.component';
import { DashboardComponent } from './dashboard.component';

const dashboardRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        redirectTo: 'boardslist',
        pathMatch: 'full'
      },
      {
        path: 'board/:boardId',
        component: BoardComponent
      },
      {
        path: 'boardslist',
        component: BoardsListComponent
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(
      dashboardRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class DashboardRoutingModule { }
