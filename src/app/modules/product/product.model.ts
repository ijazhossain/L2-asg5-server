import { model, Schema } from "mongoose";
import { TConnectivity, TFeatures, TProduct } from "./product.interface";
import generateModelNumber from "../../utils/generateModelNumber";
const connectivitySchema = new Schema<TConnectivity>({
  bluetooth: {
    type: Boolean,
  },
  wifi: {
    type: Boolean,
  },
  usbC: {
    type: Boolean,
  },
});
const featuresSchema = new Schema<TFeatures>({
  cameraResolution: {
    type: String,
  },
  storageCapacity: {
    type: String,
  },
  screenSize: {
    type: String,
  },
  weight: {
    type: String,
  },
  dimension: {
    type: String,
  },
});
const productSchema = new Schema<TProduct>(
  {
    productName: {
      type: String,
      required: [true, "Product name is required"],
    },
    productPrice: {
      type: Number,
      required: [true, "Product price is required"],
    },
    productQuantity: {
      type: Number,
      required: [true, "Product quantity is required"],
    },
    brand: {
      type: String,
      required: [true, "Brand name is required"],
    },
    modelNumber: {
      type: String,
      default: generateModelNumber,
      unique: true,
      required: [true, "Model number is required"],
    },
    category: {
      type: String,
      required: [true, "Product category is required"],
    },
    operatingSystem: {
      type: String,
    },
    powerSource: {
      type: String,
      enum: ["battery-powered", "plug-in"],
      required: [true, "Power source is required"],
    },
    connectivity: {
      type: connectivitySchema,
    },
    features: {
      type: featuresSchema,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);
export const Product = model<TProduct>("Product", productSchema);
