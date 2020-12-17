import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Board } from 'src/app/core/models/board.model';
import { AuthService } from 'src/app/core/services/auth.service';
import { BoardsService } from 'src/app/core/services/boards.service';
import { DialogService } from 'src/app/core/services/dialog.service';

@Component({
  selector: 'app-boards-list',
  templateUrl: './boards-list.component.html',
  styleUrls: ['./boards-list.component.scss']
})
export class BoardsListComponent implements OnInit {
  boards: Board[];
  userId: string;

  constructor(
    private _router: Router,
    private _boardsService: BoardsService,
    private _dialogService: DialogService,
    private _authService: AuthService
  ) { }

  ngOnInit(): void {
    this.userId = this._authService.currentUserId;
    this._boardsService.getBoards(this.userId).subscribe(boards => {
      this.boards = boards;
    });
  }

  viewBoard(boardId: string): void {
    this._router.navigate([`board/${boardId}`]);
  }

  openCreateBoardDialog(): void {
    this._dialogService.open('ItemTitleDialogComponent', {
      title: 'Create new board',
      handleConfirm: (title: string) => {
        this._boardsService.addBoard(title, this.userId);
      }
    });
  }

}
