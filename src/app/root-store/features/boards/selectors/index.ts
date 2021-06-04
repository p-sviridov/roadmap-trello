import { createSelector } from '@ngrx/store';

import { AppState } from '@app/root-store/state';
import { State as BoardsState } from '../state';

export const boardsState = (state: AppState): BoardsState => state.boards;

export const BoardsMapSelector = createSelector(boardsState, (state: BoardsState): any => { //TODO: add type
  return state?.boardsMap || {};
});
