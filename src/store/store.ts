import {
  Store,
  compose,
  createStore,
  applyMiddleware
} from 'redux';
import {rootSaga} from "./sagas";
import createSagaMiddleware from 'redux-saga';
import {shipmentReducer as reducer} from "./shipmentReducer";

const sagaMiddleware = createSagaMiddleware();
// @ts-ignore
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store: Store<ShipmentState, ShipmentAction> & {
  dispatch: DispatchType
} = createStore(reducer, composeEnhancer(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootSaga);

export default store;