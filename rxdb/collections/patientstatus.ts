import { RxJsonSchema, RxCollection, RxCollectionCreator } from "rxdb";
import { Prisma } from "@prisma/client";
import { COLLECTIONS_NAME, ENUMS } from "./lib";

export type PatientStatusCR =
  RxCollectionCreator<Prisma.PatientStatusCreateInput>;
export type PatientStatusC = RxCollection<Prisma.PatientStatusCreateInput>;

export const patientstatus: RxJsonSchema<Prisma.PatientStatusCreateInput> = {
  primaryKey: "id",
  title: "PatientStatus schema",
  description: "describes a PatientStatus",
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
    patientStatusType: {
      type: "string",
      enum: ENUMS.PatientStatustypes,
    },
    createdAt: {
      type: "string",
      format: "date-time",
    },
    updatedAt: {
      type: "string",
      format: "date-time",
    },
    isCurrent: {
      type: "boolean",
      default: true,
    },
  },
};
