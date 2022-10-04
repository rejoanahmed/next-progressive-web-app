import { RxJsonSchema, RxCollection, RxCollectionCreator } from "rxdb";
import { Prisma } from "@prisma/client";
import { COLLECTIONS_NAME, ENUMS } from "./lib";

export type AddressCR = RxCollectionCreator<Prisma.AddressCreateInput>;
export type AddressC = RxCollection<Prisma.AddressCreateInput>;

export const address: RxJsonSchema<Prisma.AddressCreateInput> = {
  title: "Address schema",
  description: "describes an address",
  version: 0,

  type: "object",
  primaryKey: "id",
  properties: {
    id: {
      type: "string",
    },
    patient: {
      type: "string",
      ref: COLLECTIONS_NAME.PATIENT,
    },
    addressLine1: {
      type: "string",
    },
    addressLine2: {
      type: "string",
    },
    city: {
      type: "string",
    },
    state: {
      type: "string",
      enum: ENUMS.states,
    },
    archived: {
      type: "boolean",
      default: false,
    },
    createdAt: {
      type: "string",
      format: "date-time",
    },
    updatedAt: {
      type: "string",
      format: "date-time",
    },
    location: {
      type: "string",
    },
    note: {
      type: "string",
    },
    postalCode: {
      type: "string",
    },
    preferred: {
      type: "boolean",
      default: false,
    },
    type: {
      type: "string",
    },
    source: {
      type: "string",
    },
    status: {
      type: "string",
      enum: ["VERIFIED", "NEW", "DO_NOT_USE", "ARCHIVED"],
    },
    verified: {
      type: "boolean",
      default: false,
    },
    version: {
      type: "string",
    },
  },
};
