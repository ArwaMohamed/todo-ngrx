import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { StoreInterface } from './store/store';
import { LoadTodoAction } from './store/action/todos.action';
import { Todo } from './store/reducers/todo.reducer';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  count: any;
  title = 'ngrxTutorial';
  data: any = []
  page: number = 1;
  countt: number = 0;
  tableSize: number = 7;
  tableSizes: any = [3, 6, 9, 12];
  constructor(private store: Store<StoreInterface>) {
    this.store.subscribe((state) => {
      this.count = state.counter.n;
      this.data =state.todos
      console.log(state.todos);

    });
    this.load();
  }

  pageSizes = [3, 5, 7];
  increase() {
    this.store.dispatch({ type: 'increament', payload: 4 });
  }
  decrease() {
    this.store.dispatch({ type: 'dencreament', payload: 1 });
  }
  load(){
    this.store.dispatch(new LoadTodoAction())
  }
  onTableDataChange(event:any){
    this.page = event;
    this.load();
  }
}
