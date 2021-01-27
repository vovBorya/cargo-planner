import {call, put, takeEvery} from "redux-saga/effects";
import {
  fetchShipmentsError,
  fetchShipmentsRequested,
  fetchShipmentsSuccess
} from "./actions";
import {FETCH_SHIPMENTS} from "./types";
import {getShipments} from "../../services/services";

export function* fetchShipmentsAsync() {
  try {
    yield put(fetchShipmentsRequested());
    const shipments = yield call(getShipments);
    yield put(fetchShipmentsSuccess(shipments))
  } catch (err) {
    yield put(fetchShipmentsError(err))
  }
}

export function watchFetchShipments() {
  return [takeEvery(FETCH_SHIPMENTS, fetchShipmentsAsync)];
}
