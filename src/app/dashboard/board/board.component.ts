import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import board from './board';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  boardId: string;
  board = board;

  constructor(
    private _route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.boardId = this._route.snapshot.paramMap.get('boardId');
    console.log(this.boardId);
  }

}
