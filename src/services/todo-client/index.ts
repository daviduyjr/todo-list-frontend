import { injectable, inject } from 'inversify';
import axios from 'axios';
import qs from 'qs';
import Types from '../../types'
import type { IConfig } from '../config/interface';
import type {
    ITodoClient ,IGetTodo, ICreateTodo, IUpdateTodo
} from './interface';
import { ITodo } from 'src/interfaces/models';

@injectable()
export default class TodoClient implements ITodoClient {
    @inject(Types.Config)
    private config!: IConfig

  async getTodos(params: IGetTodo) {
    const { access_token, ...rest } = params;
    const baseUrl = this.config.get('api.baseUrl');
    const endpoint = this.config.get('api.endpoint.GetTodos');
    const query = qs.stringify(rest);

    const url = `${baseUrl}${endpoint}`;
    const res = await axios.get(`${url}?${query}`, {
      headers: {
        //Authorization: access_token,
      },
    });

    if (res.data.status === 'failed') {
      throw res.data.error;
    }

    return res.data.data;
  }

  async createTodo(params: ICreateTodo){
    const { access_token, ...rest } = params;
    const baseUrl = this.config.get('api.baseUrl');
    const endpoint = this.config.get('api.endpoint.CreateTodo');

    const url = `${baseUrl}${endpoint}`;

    const res = await axios.post(url, {...rest}, {
      headers: {
        // Authorization: accessToken,
      },
    });

    if (res.data.status === 'failed') {
      throw res.data.error;
    }

    return res.data.data;
  }

  async updateTodo(params: IUpdateTodo) {
    const { access_token, id, ...rest } = params
    const baseUrl = this.config.get('api.baseUrl');
    const endpoint = this.config.get('api.endpoint.UpdateTodo');

    const url = `${baseUrl}${endpoint}`.replace(':id', id!);
    const res = await axios.put(url, rest, {
      headers: {
        // Authorization: accessToken,
      },
    });
    if (res.data.status === 'failed') {
      throw JSON.stringify(res.data.error);
    }
    return res.data.data;
  }
}