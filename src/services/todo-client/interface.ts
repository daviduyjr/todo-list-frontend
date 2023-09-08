import { ITodo } from 'src/interfaces/models';

export interface IGetTodo {
    access_token: string,
    id?: string,
    name?: string,
    when_done?: string,
    page?: number,
    limit?: number,
}

export interface ICreateTodo extends Partial<ITodo> {
    access_token: string,
}

export interface IUpdateTodo extends Partial<ITodo> {
    access_token: string,
}

export interface ITodoClient {
    getTodos: (params: IGetTodo) => Promise<ITodo[]>
    createTodo: (params: ICreateTodo) => Promise<ITodo>
    updateTodo: (params: IUpdateTodo) => Promise<ITodo>
}