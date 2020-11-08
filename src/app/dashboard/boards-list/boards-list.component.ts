import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import boards from './boards';

@Component({
  selector: 'app-boards-list',
  templateUrl: './boards-list.component.html',
  styleUrls: ['./boards-list.component.scss']
})
export class BoardsListComponent implements OnInit {
  boards = boards;

  constructor(
    private _router: Router
  ) { }

  ngOnInit(): void {
  }

  viewBoard(boardId: string): void {
    this._router.navigate([`board/${boardId}`]);
  }

}
