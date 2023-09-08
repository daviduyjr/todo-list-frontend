import { createAsyncThunk } from '@reduxjs/toolkit';
import container from '../../container';
import Types from '../../types';
import type { ITodoClient, IGetTodo } from 'src/services/todo-client/interface';

export default createAsyncThunk('todos/list', async (parameters?: Omit<IGetTodo, 'access_token'>) => {
    const todoClient: ITodoClient = container.get(Types.TodoClient);
    return todoClient.getTodos({
      access_token: '',
      ...parameters,
    });
})