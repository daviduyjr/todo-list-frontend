import { createAsyncThunk } from '@reduxjs/toolkit';
import container from '../../container';
import Types from '../../types';
import moment from 'moment';
import type { ISessionDataSource } from 'src/interfaces/data-sources';
import type { ISession } from '../../../src/interfaces/models';
import type { ITodoClient, ITodoClientLoginParams } from 'src/services/todo-client/interface';

export default createAsyncThunk('session/create', async (params: ITodoClientLoginParams) => {
    const todoClient: ITodoClient = container.get(Types.TodoClient);
    const sessionLocal: ISessionDataSource = container.get(Types.SessionDataSource);
    const res = await todoClient.login(params);
    console.log(res)
    return sessionLocal.create({...res, expiresAt: moment().add(res.expiresIn, 'seconds').toISOString()} as ISession);

});
