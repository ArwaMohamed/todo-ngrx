import { FAILD, SUCCESS } from "../action/todos.action";
import { CustomAction } from "../store";

export interface Todo{
  userId:number,
  id:number,
  title:string,
  completed:boolean
}


export function TodoReducer(state :Todo[],action:any){
   switch(action.type){
    case SUCCESS:
      return action.payload
    case FAILD:
      return state
   }
}
