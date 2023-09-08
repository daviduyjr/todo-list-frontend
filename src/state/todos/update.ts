import { createAsyncThunk } from '@reduxjs/toolkit';
import container from '../../container';
import Types from '../../types';
import type { ITodoClient, IUpdateTodo } from 'src/services/todo-client/interface';

export default createAsyncThunk('todos/update', async (parameters?: Omit<IUpdateTodo, 'access_token'>) => {
    const todoClient: ITodoClient = container.get(Types.TodoClient);
    return todoClient.updateTodo({
      access_token: '',
      ...parameters,
    });
})