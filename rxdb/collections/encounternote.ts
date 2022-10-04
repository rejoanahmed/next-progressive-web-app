import { RxJsonSchema, RxCollection, RxCollectionCreator } from "rxdb";
import { Prisma } from "@prisma/client";
import { COLLECTIONS_NAME, ENUMS } from "./lib";

export type EncounterNoteCR =
  RxCollectionCreator<Prisma.EncounterNoteCreateInput>;
export type EncounterNoteC = RxCollection<Prisma.EncounterNoteCreateInput>;

export const encounternote: RxJsonSchema<Prisma.EncounterNoteCreateInput> = {
  primaryKey: "id",
  title: "EncounterNote schema",
  description: "describes a EncounterNote",
  version: 0,
  type: "object",
  properties: {
    id: {
      type: "string",
    },
    contactType: {
      type: "string",
      enum: ENUMS.ContactType,
    },
    dateOfEncounter: {
      type: "string",
      format: "date-time",
    },
    startTime: {
      type: "string",
      format: "date-time",
    },
    createdAt: {
      type: "string",
      format: "date-time",
    },
    endTime: {
      type: "string",
      format: "date-time",
    },
    encounterType: {
      type: "string",
      enum: ENUMS.EncounterType,
    },
    published: {
      type: "boolean",
      default: false,
    },
    encounterOccurred: {
      type: "string",
      enum: ENUMS.EncounterOccured,
    },
    location: {
      type: "string",
    },
    metWith: {
      type: "string",
    },
    goals: {
      type: "array",
      items: {
        type: "string",
      },
    },
    publishedAt: {
      type: "string",
    },
    updatedAt: {
      type: "string",
    },
    providerCbo: {
      type: "string",
    },
    note: {
      type: "string",
    },
    patient: {
      type: "string",
      ref: COLLECTIONS_NAME.PATIENT,
    },
    createdBy: {
      type: "string",
      ref: COLLECTIONS_NAME.WAYMARKER,
    },
    updatedBy: {
      type: "array",
      items: {
        type: "string",
      },
      ref: COLLECTIONS_NAME.ENCOUNTER_NOTE_UPDATE_WAYMARKER,
    },
    deleted: {
      type: "boolean",
      default: false,
    },
  },
};
