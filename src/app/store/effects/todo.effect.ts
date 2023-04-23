import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { FaildAction, LOAD, SuccessAction } from '../action/todos.action';
import { catchError, mergeMap, map, of } from 'rxjs';

@Injectable()
export class todoEffect {
  todo$ = createEffect(() =>
    this.actions.pipe(
      ofType(LOAD),
      mergeMap(() =>
        this.http.get('https://jsonplaceholder.typicode.com/todos').pipe(
          map((data) => new SuccessAction(data)),
          catchError((err) => of(new FaildAction(err)))
        )
      )
    )
  );
  constructor(private http: HttpClient, private actions: Actions) {}
}
