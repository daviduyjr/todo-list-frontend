import { createAsyncThunk } from '@reduxjs/toolkit';
import container from '../../container';
import Types from '../../types';
import type { ITodoClient, IGetTodo } from 'src/services/todo-client/interface';
import type { ISessionDataSource } from '../../../src/interfaces/data-sources';

export default createAsyncThunk('todos/list', async (parameters?: Omit<IGetTodo, 'access_token'>) => {
    const todoClient: ITodoClient = container.get(Types.TodoClient);
    const sessionDataSource: ISessionDataSource = container.get(Types.SessionDataSource);
    const session = await sessionDataSource.get();
    console.log(session)
    return todoClient.getTodos({
      access_token: session.accessToken,
      ...parameters,
    });
})