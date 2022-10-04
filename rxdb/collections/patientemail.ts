import { RxJsonSchema, RxCollection, RxCollectionCreator } from "rxdb";
import { Prisma } from "@prisma/client";
import { COLLECTIONS_NAME } from "./lib";

export type PatientEmailCR =
  RxCollectionCreator<Prisma.PatientEmailCreateInput>;

export type PatientEmailC = RxCollection<Prisma.PatientEmailCreateInput>;

export const patientEmailSchema: RxJsonSchema<Prisma.PatientEmailCreateInput> =
  {
    title: "PatientEmail schema",
    description: "describes a PatientEmail",
    version: 0,

    type: "object",
    primaryKey: "id",
    properties: {
      id: {
        type: "string",
        // default: uuidv4(),
      },
      emailAddress: {
        type: "string",
      },
      preferred: {
        type: "boolean",
        default: false,
      },
      patient: {
        ref: COLLECTIONS_NAME.PATIENT,
        type: "string",
      },
      createdAt: {
        type: "string",
        format: "date-time",
      },
      updatedAt: {
        type: "string",
        format: "date-time",
      },
      archived: {
        type: "boolean",
        default: false,
      },
      note: {
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
    },
  };
