import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Column } from 'src/app/core/models/column.model';
import { Board } from 'src/app/core/models/board.model';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  board: Board;
  columns: Column[];
  boardId: string;

  constructor(
    private _route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.boardId = this._route.snapshot.paramMap.get('boardId');
  }

}
