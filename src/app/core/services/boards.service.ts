import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Board } from '../models/board.model';
import { FirestoreService } from './firestore.service';

@Injectable({
  providedIn: 'root'
})
export class BoardsService {
  constructor(
    private firestoreService: FirestoreService
  ) { }

  getBoards(userId: string): Observable<Board[]> {
    return this.firestoreService.getDocumentsByProperty('boards', );
  }

  addBoard(title: string, ownerId: string) {
    const board = {
      title,
      owner_id: ownerId,
      date_created: Date.now()
    }
    this._afs.collection('boards').add(board);
  }

  getBoard(boardId: string): Observable<Board> {
    return this._afs.doc<Board>(`boards/${boardId}`).get();
  }
}
