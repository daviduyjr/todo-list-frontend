import { createAsyncThunk } from '@reduxjs/toolkit';
import container from '../../container';
import Types from '../../types';
import type { ITodoClient, ICreateTodo } from 'src/services/todo-client/interface';

export default createAsyncThunk('todos/create', async (parameters?: Omit<ICreateTodo, 'access_token'>) => {
    const todoClient: ITodoClient = container.get(Types.TodoClient);
    return todoClient.createTodo({
      access_token: '',
      ...parameters,
    });
})