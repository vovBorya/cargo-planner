import {
  FETCH_SHIPMENTS_ERROR,
  FETCH_SHIPMENTS_REQUESTED,
  FETCH_SHIPMENTS_SUCCESS,
  FILTER_LIST, SET_IS_LIST_OPEN, SET_SHIPMENT_BOXES
} from "./types";

const initialState: ShipmentState = {
  shipments: [],
  isLoading: false,
  tempShipments: [],
  isListOpen: false
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
      const filterStr = action.payload;
      return {
        ...state,
        tempShipments: state.shipments.filter(item => item.name.toLowerCase().includes(filterStr)),
        isListOpen: true
      };
    }
    case SET_SHIPMENT_BOXES: {
      const {id, boxes} = action.payload;
      const {shipments} = state;
      const oldItemIndex = shipments.findIndex(item => item.id === id);
      const newShipments = [
        ...shipments.splice(0, oldItemIndex),
        {...shipments[oldItemIndex], boxes},
        ...shipments.splice(oldItemIndex + 1)
      ];
      return {
        ...state,
        shipments: newShipments,
        tempShipments: newShipments
      };
    }
    case SET_IS_LIST_OPEN: {
      return {
        ...state,
        isListOpen: action.payload
      };
    }
    default:
      return {...state}
  }
};
