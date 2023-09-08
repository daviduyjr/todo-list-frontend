import { injectable } from 'inversify';
import { get } from 'lodash';
import config from '../../config';
import type { IConfig } from './interface';

@injectable()
export default class Config implements IConfig {
  get(key: string) {
    return get(config, key);
  }
}
