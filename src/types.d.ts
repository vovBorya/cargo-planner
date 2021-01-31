interface IShipment {
  id: string,
  name: string,
  email: string,
  boxes: string | null
}

type ShipmentState = {
  shipments: IShipment[]
  isLoading: boolean,
  tempShipments: IShipment[]
  isListOpen: boolean
};

type ShipmentAction = {
  type: string,
  payload?: IShipment | any
};

type DispatchType = (args: ShipmentAction | void) => ShipmentAction;

