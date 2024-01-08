import { createAsyncThunk } from '@reduxjs/toolkit';
import container from '../../container';
import Types from '../../types';
import type { ITodoClient, IUpdateTodo } from 'src/services/todo-client/interface';
import type { ISessionDataSource } from '../../../src/interfaces/data-sources';

export default createAsyncThunk('todos/update', async (parameters?: Omit<IUpdateTodo, 'access_token'>) => {
    const todoClient: ITodoClient = container.get(Types.TodoClient);
    const sessionDataSource: ISessionDataSource = container.get(Types.SessionDataSource);
    const session = await sessionDataSource.get();

    return todoClient.updateTodo({
      access_token: session.accessToken,
      ...parameters,
    });
})