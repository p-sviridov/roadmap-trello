import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Board } from '../models/board.model';
import { Column } from '../models/column.model';
import { FirestoreService } from './firestore.service';

@Injectable({
  providedIn: 'root',
})
export class BoardsService {
  constructor(private firestoreService: FirestoreService) {}

  getBoards(userId: string): Observable<Board[]> {
    return this.firestoreService.getDocumentsByProperty(
      'boards',
      'owner_id',
      userId
    );
  }

  addBoard(title: string, ownerId: string): any {
    const board = {
      title,
      owner_id: ownerId,
      date_created: Date.now(),
    };
    return this.firestoreService.addDocument('boards', board);
  }

  getBoard(boardId: string): Observable<Board> {
    return this.firestoreService.getDocument(`boards/${boardId}`);
  }

  getColumns(boardId: string): Observable<Column[]> {
    return this.firestoreService.getCollection(`boards/${boardId}/columns`);
  }

  addColumn(boardId: string, title: string): void {}
}
