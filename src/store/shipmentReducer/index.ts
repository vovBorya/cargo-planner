import {
  FETCH_SHIPMENTS_ERROR,
  FETCH_SHIPMENTS_REQUESTED,
  FETCH_SHIPMENTS_SUCCESS,
  FILTER_LIST, SET_SHIPMENT_BOXES
} from "./types";

const initialState: ShipmentState = {
  shipments: [],
  isLoading: false,
  tempShipments: []
};

export const shipmentReducer = (state: ShipmentState = initialState, action: ShipmentAction) => {
  switch (action.type) {
    case FETCH_SHIPMENTS_REQUESTED: {
      return {
        ...state,
        isLoading: true,
        shipments: [],
        tempShipments: []
      };
    }
    case FETCH_SHIPMENTS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        shipments: action.payload,
        tempShipments: action.payload
      };
    }
    case FETCH_SHIPMENTS_ERROR: {
      return {
        ...state,
        isLoading: false
      };
    }
    case FILTER_LIST: {
      const filterStr = action.payload
      return {
        ...state,
        tempShipments: state.shipments.filter(item => item.name.includes(filterStr))
      };
    }
    case SET_SHIPMENT_BOXES: {
      const {id, boxes} = action.payload
      return {
        ...state
      };
    }
    default:
      return {...state}
  }
};
