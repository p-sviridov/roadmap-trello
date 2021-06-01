import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Board } from 'src/app/core/models/board.model';
import { AuthService } from 'src/app/core/services/auth.service';
import { BoardsService } from 'src/app/core/services/boards.service';
import { DialogService } from 'src/app/core/services/dialog.service';

@Component({
  selector: 'app-boards-list',
  templateUrl: './boards-list.component.html',
  styleUrls: ['./boards-list.component.scss'],
})
export class BoardsListComponent implements OnInit {
  boards: Board[];
  userId: string;

  constructor(
    private router: Router,
    private boardsService: BoardsService,
    private dialogService: DialogService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.userId = this.authService.currentUserId;
    this.boardsService.getBoards(this.userId).subscribe((boards) => {
      this.boards = boards;
    });
  }

  viewBoard(boardId: string): void {
    this.router.navigate([`board/${boardId}`]);
  }

  openCreateBoardDialog(): void {
    this.dialogService.open('ItemTitleDialogComponent', {
      title: 'Create new board',
      handleConfirm: (title: string) => {
        this.boardsService.addBoard(title, this.userId);
      },
    });
  }
}
