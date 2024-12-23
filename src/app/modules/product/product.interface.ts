export type TConnectivity = {
  bluetooth: boolean;
  wifi: boolean;
  usbC: boolean;
};
export type TFeatures = {
  cameraResolution?: string;
  storageCapacity: string;
  screenSize: string;
  weight: string;
  dimension: string;
};
export type TProduct = {
  productName: string;
  productPrice: number;
  productQuantity: number;
  brand: string;
  modelNumber: string;
  category: string;
  operatingSystem: string;
  powerSource: "battery-powered" | "plug-in";
  connectivity: TConnectivity;
  features: TFeatures;
  isDeleted: boolean;
};
