export const SUCCESS = "Success"
export const FAILD = "Faild"
export const LOAD = "Faild"

export class LoadTodoAction {
  type:string  = LOAD
}

export class SuccessAction {
  type : string = SUCCESS
  payload :any

  constructor(payload:any){
    this.payload =payload
  }
}
export class FaildAction {
  type : string = FAILD
  payload :any

  constructor(payload:any){
    this.payload =payload
  }
}
