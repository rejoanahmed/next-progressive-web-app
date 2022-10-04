import { RxJsonSchema, RxCollection, RxCollectionCreator } from "rxdb";
import { Prisma } from "@prisma/client";
import { COLLECTIONS_NAME, ENUMS } from "./lib";

export type PatientPreferenceCR =
  RxCollectionCreator<Prisma.PatientPreferenceCreateInput>;
export type PatientPreferenceC =
  RxCollection<Prisma.PatientPreferenceCreateInput>;

export const patientpreference: RxJsonSchema<Prisma.PatientPreferenceCreateInput> =
  {
    primaryKey: "id",

    title: "Language schema",
    description: "describes a Language",
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

      updatedAt: {
        type: "string",
        format: "date-time",
      },
    },
  };
