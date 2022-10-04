import { RxJsonSchema, RxCollection, RxCollectionCreator } from "rxdb";
import { Prisma } from "@prisma/client";
import { COLLECTIONS_NAME, ENUMS } from "./lib";

export type PatientActivationCR =
  RxCollectionCreator<Prisma.PatientActivationCreateInput>;
export type PatientActivationC =
  RxCollection<Prisma.PatientActivationCreateInput>;

export const patientactiavtion: RxJsonSchema<Prisma.PatientActivationCreateInput> =
  {
    primaryKey: "id",
    title: "PatientActivation schema",
    description: "describes a PatientActivation",
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
      activationLevel: {
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
      isCurrent: {
        type: "boolean",
        default: true,
      },
    },
  };
