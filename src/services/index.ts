import { Container } from 'inversify';
import Types from '../types';

import Config from './config';
import TodoClient from './todo-client'

const container = new Container();

container.bind(Types.Config).to(Config);
container.bind(Types.TodoClient).to(TodoClient)

export default container;