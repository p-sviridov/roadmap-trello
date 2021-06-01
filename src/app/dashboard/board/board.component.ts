import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Column } from 'src/app/core/models/column.model';
import { Board } from 'src/app/core/models/board.model';
import { BoardsService } from 'src/app/core/services/boards.service';

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
    private route: ActivatedRoute,
    private boardsService: BoardsService
  ) { }

  ngOnInit(): void {
    this.boardId = this.route.snapshot.paramMap.get('boardId');
    this.boardsService.getColumns(this.boardId).subscribe(columns => {
      this.columns = columns;
    });
  }

}
