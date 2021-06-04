import { Action, createReducer } from '@ngrx/store';
import { initialState, State as BoardsState } from '../state';

const boardsReducer = createReducer(
  initialState
);

export function reducer(state: BoardsState | undefined, action: Action): any {
  return boardsReducer(state, action);
}
