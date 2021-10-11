export const selectShipments = (state: ShipmentState): Array<IShipment> => state.shipments;
export const selectTempShipments = (state: ShipmentState): Array<IShipment> => state.tempShipments;
export const selectIsListOpen = (state: ShipmentState): boolean => state.isListOpen;