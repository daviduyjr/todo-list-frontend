import { ITodo } from 'src/interfaces/models';

export interface ITodoClientLoginParams {
    user_name: string;
    password: string;
}

export interface ITodoClientLoginResponse {
    accessToken: string;
    refreshToken: string;
    expiresIn: number;
    type: 'Bearer';
}

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
    login: (params: ITodoClientLoginParams) => Promise<ITodoClientLoginResponse>;
    getTodos: (params: IGetTodo) => Promise<ITodo[]>
    createTodo: (params: ICreateTodo) => Promise<ITodo>
    updateTodo: (params: IUpdateTodo) => Promise<ITodo>
}