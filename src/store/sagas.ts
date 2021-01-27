import {all} from 'redux-saga/effects';
import {watchFetchShipments} from "./shipmentReducer/saga";

export function* rootSaga() {
  yield all([
    ...watchFetchShipments()
  ]);
}