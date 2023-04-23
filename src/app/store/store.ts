import { ActionReducerMap } from '@ngrx/store';
import { Counter, counterReducer } from './reducers/counter.reducer';
import { Todo, TodoReducer } from './reducers/todo.reducer';

export interface StoreInterface {
  counter :Counter
  todos:Todo
}

export interface CustomAction {
  type:string,
  payload:any
}


export const REDUCERS:ActionReducerMap<any> ={
  counter : counterReducer,
  todos:TodoReducer
}



