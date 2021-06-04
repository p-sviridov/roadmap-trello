import {
  BoardsStoreState
} from '../features';

export interface AppState {
  readonly boards: BoardsStoreState.State;
}

export const mockStoreState = {
  boards: BoardsStoreState.initialState
};
