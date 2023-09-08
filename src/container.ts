import 'reflect-metadata';
import { Container } from 'inversify';

import serviceContainer from './services';
import featureContainer from './features';

const appContainer = Container.merge(serviceContainer, featureContainer);

export default appContainer;
