import { compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware({
  sagaMonitor:
    process.env.NODE_ENV === 'development'
      ? console.tron.createSagaMonitor()
      : null,
});

const enhancer =
  process.env.NODE_ENV === 'development'
    ? compose(
        applyMiddleware(sagaMiddleware),
        console.tron.createEnhancer(),
      )
    : applyMiddleware(sagaMiddleware);

export const middlewares = {
  saga: sagaMiddleware,
};

export default enhancer;
