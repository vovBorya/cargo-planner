import shipments from '../shipments.json';

export const getShipments = async (): Promise<IShipment[]> => await new Promise(resolve => {
    setTimeout(() => {
        resolve(shipments)
    }, 2000);
});

export const getLocalShipments = (): IShipment[] => JSON.parse(localStorage.getItem("shipments") ?? '[]');

export const saveLocalShipments = (shipments: IShipment[]) => {
    localStorage.setItem('shipments', JSON.stringify(shipments));
};
