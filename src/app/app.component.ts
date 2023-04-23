import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { StoreInterface } from './store/store';
import { LoadTodoAction } from './store/action/todos.action';
import { Todo } from './store/reducers/todo.reducer';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  count: any;
  title = 'ngrxTutorial';
  data: any
  constructor(private store: Store<StoreInterface>) {
    this.store.subscribe((state) => {
      this.count = state.counter.n;
      this.data =state.todos
      console.log(state.todos);

    });
  }
  increase() {
    this.store.dispatch({ type: 'increament', payload: 4 });
  }
  decrease() {
    this.store.dispatch({ type: 'dencreament', payload: 1 });
  }
  load(){
    this.store.dispatch(new LoadTodoAction())
  }
}
