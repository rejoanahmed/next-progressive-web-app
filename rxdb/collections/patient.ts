import { RxJsonSchema, RxCollection, RxCollectionCreator } from "rxdb";
import { Prisma } from "@prisma/client";
import { COLLECTIONS_NAME, ENUMS } from "./lib";

export type PatientCR = RxCollectionCreator<Prisma.PatientCreateInput>;
export type PatientC = RxCollection<Prisma.PatientCreateInput>;

export const patient: RxJsonSchema<Prisma.PatientCreateInput> = {
  title: "Patient schema",
  description: "describes a patient",
  version: 0,

  type: "object",
  primaryKey: "id",
  properties: {
    id: {
      type: "string",
      //  TODO: default is cuid()
    },
    firstName: {
      type: "string",
    },
    lastName: {
      type: "string",
    },
    gender: {
      type: "string",
    },
    birthDate: {
      type: "string",
    },
    region: {
      type: "string",
      enum: ENUMS.Region,
    },
    programs: {
      type: "array",
      items: {
        type: "string",
      },
    },
    diagnoses: {
      type: "array",
      items: {
        type: "string",
      },
    },
    socialDeterminants: {
      type: "array",
      items: {
        type: "string",
      },
    },
    addresses: {
      type: "array",
      ref: COLLECTIONS_NAME.ADDRESS,
      items: {
        type: "string",
      },
    },
    channel: {
      type: "array",
      items: {
        type: "string",
      },
      ref: COLLECTIONS_NAME.SMS_CHANNEL,
    },
    middleName: {
      type: "string",
    },
    preferredName: {
      type: "string",
    },
    pronunciation: {
      type: "string",
    },
    pronouns: {
      type: "string",
    },
    primaryContactName: {
      type: "string",
    },
    primaryContactRelationship: {
      type: "string",
    },
    alert: {
      type: "string",
    },
    ethnicity: {
      type: "string",
    },
    avatar: {
      type: "string",
    },
    bookmarked: {
      type: "boolean",
    },
    quickNote: {
      type: "string",
    },
    canShareProgramInfo: {
      type: "boolean",
      default: false,
    },
    email: {
      type: "array",
      uniqueItems: true,
      items: {
        type: "string",
      },
      ref: COLLECTIONS_NAME.PATIENT_EMAIL,
    },
    race: {
      type: "array",
      uniqueItems: true,
      items: {
        type: "string",
      },
    },
    languages: {
      type: "array",
      uniqueItems: true,
      items: {
        type: "string",
      },
      ref: COLLECTIONS_NAME.LANGUAGE,
    },
    phones: {
      type: "array",
      uniqueItems: true,
      items: {
        type: "string",
      },
      ref: COLLECTIONS_NAME.PHONE,
    },
    patientActivation: {
      type: "array",
      items: {
        type: "string",
      },
      uniqueItems: true,
      ref: COLLECTIONS_NAME.PATIENT_ACTIVATION,
    },
    createdAt: {
      type: "string",
      // default: new Date()
    },
    updatedAt: {
      type: "string",
      // default: new Date()
    },
    encounterNotes: {
      type: "array",
      items: {
        type: "string",
      },
      ref: COLLECTIONS_NAME.ENCOUNTER_NOTE,
    },
    externalCommunication: {
      type: "array",
      items: {
        type: "string",
      },
      ref: COLLECTIONS_NAME.EXTERNAL_COMMUNICATION,
    },
    goals: {
      type: "array",
      items: {
        type: "string",
      },
      ref: COLLECTIONS_NAME.GOAL,
    },
    memberId: {
      type: "string",
      uniqueItems: true,
    },
    patientPreference: {
      type: "array",
      items: {
        type: "string",
      },
      ref: COLLECTIONS_NAME.PATIENT_PREFERENCE,
    },
    status: {
      type: "string",
      uniqueItems: true,
    },
    tasks: {
      type: "array",
      items: {
        type: "string",
      },
      ref: COLLECTIONS_NAME.TASK,
    },
    version: {
      type: "string",
    },
    waymarkers: {
      type: "array",
      ref: COLLECTIONS_NAME.WAYMARKER,
      items: {
        type: "string",
      },
    },
  },
};
