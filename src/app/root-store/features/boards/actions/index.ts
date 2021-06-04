import { createAction, props } from '@ngrx/store';

import { createConstants } from '@app/root-store/features/utils';

const typesNames = [
  'GET_BOARDS',
  'GET_BOARDS_SUCCESS',
  'GET_BOARDS_FAILED'
];

export type BoardsActionType = {
  [Key in typeof typesNames[number]]: string;
};

export const prefix = 'DESKS';

export const desksActionTypes: BoardsActionType = createConstants<BoardsActionType>(
  typesNames,
  prefix
);
