import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';

import { AppState } from '@app/root-store/state';

@Injectable()
export class BoardsEffects {
  private destroySubject = new Subject<void>();

  constructor(
    private actions$: Actions,
    private store$: Store<AppState>
  ) {}
}
