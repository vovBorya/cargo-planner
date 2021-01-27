import {
  FETCH_SHIPMENTS,
  FETCH_SHIPMENTS_ERROR,
  FETCH_SHIPMENTS_REQUESTED,
  FETCH_SHIPMENTS_SUCCESS, FILTER_LIST
} from "./types";

export const fetchShipments = (): ShipmentAction => ({
  type: FETCH_SHIPMENTS
});

export const fetchShipmentsRequested = (): ShipmentAction => ({
  type: FETCH_SHIPMENTS_REQUESTED
});

export const fetchShipmentsSuccess = (shipments: IShipment[]): ShipmentAction => ({
  type: FETCH_SHIPMENTS_SUCCESS,
  payload: shipments
});

export const fetchShipmentsError = (err: any): ShipmentAction => ({
  type: FETCH_SHIPMENTS_ERROR,
  payload: err
});

export const filterList = (str: string): ShipmentAction => ({
  type: FILTER_LIST,
  payload: str
});