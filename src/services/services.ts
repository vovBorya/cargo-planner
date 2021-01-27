import shipments from '../shipments.json';

export const getShipments = async (): Promise<IShipment[]> => {
  setTimeout(() => {
    return shipments;
  }, 1000);
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve(shipments)
    }, 2000);
  });
};

export const getLocalShipments = (): IShipment[] | [] => [];
