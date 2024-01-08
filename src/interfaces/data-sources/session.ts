/* eslint-disable no-unused-vars */

import { ISession } from 'src/interfaces/models';

export interface ISessionDataSource {

    create: (params: Partial<ISession>) => Promise<ISession>;
    get: () => Promise<ISession>;
    delete: () => Promise<void>;
}
