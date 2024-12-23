import { z } from "zod";
const createConnectivitySchema = z.object({
  bluetooth: z.boolean(),
  wifi: z.boolean(),
  usbC: z.boolean(),
});
const createFeaturesValidationSchema = z.object({
  cameraResolution: z.string().optional(),
  storageCapacity: z.string(),
  screenSize: z.string(),
  weight: z.string(),
  dimension: z.string(),
});
const updateConnectivitySchema = z.object({
  bluetooth: z.boolean(),
  wifi: z.boolean().optional(),
  usbC: z.boolean().optional(),
});
const updateFeaturesValidationSchema = z.object({
  cameraResolution: z.string().optional(),
  storageCapacity: z.string().optional(),
  screenSize: z.string().optional(),
  weight: z.string().optional(),
  dimension: z.string().optional(),
});
const createProductValidationSchema = z.object({
  productName: z.string(),
  productPrice: z.number(),
  productQuantity: z.number(),
  brand: z.string(),
  modelNumber: z.string(),
  category: z.string(),
  operatingSystem: z.string().optional(),
  powerSource: z.enum(["battery-powered", "plug-in"]),
  connectivity: createConnectivitySchema,
  features: createFeaturesValidationSchema,
});
const updateProductValidationSchema = z.object({
  productName: z.string().optional(),
  productPrice: z.number().optional(),
  productQuantity: z.number().optional(),
  brand: z.string().optional(),
  modelNumber: z.string().optional(),
  category: z.string().optional(),
  operatingSystem: z.string().optional(),
  powerSource: z.enum(["battery-powered", "plug-in"]).optional(),
  connectivity: updateConnectivitySchema.optional(),
  features: updateFeaturesValidationSchema.optional(),
});
export const ProductValidations = {
  createProductValidationSchema,
  updateProductValidationSchema,
};
