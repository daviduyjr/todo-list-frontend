import { Container } from 'inversify';
import Types from '../types';

import Config from './config';
import TodoClient from './todo-client'
import SessionLocal from './session-local';

const container = new Container();

container.bind(Types.Config).to(Config);
container.bind(Types.TodoClient).to(TodoClient)
container.bind(Types.SessionDataSource).to(SessionLocal);

export default container;