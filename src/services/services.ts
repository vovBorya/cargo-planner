import shipments from '../shipments.json';

export const getShipments = async (): Promise<IShipment[]> => {
  // setTimeout(() => {
  //   return shipments;
  // }, 1000);
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve(shipments)
    }, 2000);
  });
};

// export const getLocalShipments = (): IShipment[] => {
export const getLocalShipments = (): any => {
  return JSON.parse(localStorage.getItem("shipments") ?? '[]');
};

export const saveLocalShipments = (shipments: IShipment[]) => {
  localStorage.setItem('shipments', JSON.stringify(shipments));
};
