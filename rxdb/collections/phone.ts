import { RxJsonSchema, RxCollection, RxCollectionCreator } from "rxdb";
import { Prisma } from "@prisma/client";
import { COLLECTIONS_NAME, ENUMS } from "./lib";

export type PhoneCR = RxCollectionCreator<Prisma.PhoneCreateInput>;
export type PhoneC = RxCollection<Prisma.PhoneCreateInput>;

export const phone: RxJsonSchema<Prisma.PhoneCreateInput> = {
  primaryKey: "id",
  title: "Phone schema",
  description: "describes a Phone",
  version: 0,
  type: "object",

  properties: {
    id: {
      type: "string",
    },
    patient: {
      ref: COLLECTIONS_NAME.PATIENT,
      type: "string",
    },
    archived: {
      type: "boolean",
      default: false,
    },
    createdAt: {
      type: "string",
      format: "date-time",
    },
    note: {
      type: "string",
    },
    number: {
      type: "string",
    },
    preferred: {
      type: "boolean",
      default: true,
    },
    updatedAt: {
      type: "string",
      format: "date-time",
    },
    source: {
      type: "string",
    },
    type: {
      type: "string",
    },
    status: {
      type: "string",
      enum: ENUMS.ContactInformationStatus,
    },
    verified: {
      type: "boolean",
      default: false,
    },
    Waymarker: {
      type: "string",
      ref: COLLECTIONS_NAME.WAYMARKER,
    },
  },
};
