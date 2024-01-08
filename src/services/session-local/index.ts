import { injectable, inject } from 'inversify';
import Types from '../../../src/types';
import type { ISessionDataSource } from '../../../src/interfaces/data-sources';
import type { ISession } from '../../../src/interfaces/models';

@injectable()
export default class SessionLocal implements ISessionDataSource {
    @inject(Types.LocalStorage) localStorage;

    async create(params: Partial<ISession>): Promise<ISession> {
      this.localStorage.setItem('session', JSON.stringify(params));
      return params as ISession;
    }

    async get() {
      const res = this.localStorage.getItem('session');
      return res && JSON.parse(res);
    }

    async delete(): Promise<void> {
      const res = this.localStorage.removeItem('session');
      this.localStorage.clear();
      return res;
    }
}
