import { BaseStateModel } from '@app/root-store/models/base-state.model';

export interface State extends BaseStateModel {
  boardsMap: { [boardId: string]: any }; // TODO: add type
}

export const initialState: State = {
  loading: false,
  errorMessage: null,
  boardsMap: {}
};
