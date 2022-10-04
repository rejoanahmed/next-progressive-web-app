import { RxJsonSchema, RxCollection, RxCollectionCreator } from "rxdb";
import { Prisma } from "@prisma/client";
import { COLLECTIONS_NAME, ENUMS } from "./lib";

export type LanguageCR = RxCollectionCreator<Prisma.LanguageCreateInput>;
export type LanguageC = RxCollection<Prisma.LanguageCreateInput>;

export const language: RxJsonSchema<Prisma.LanguageCreateInput> = {
  title: "Language schema",
  description: "describes a language",
  version: 0,

  type: "object",
  primaryKey: "id",
  properties: {
    id: {
      type: "string",
    },
    languages: {
      type: "string",
      enum: ENUMS.Lanuages,
    },
    preferred: {
      type: "boolean",
      default: false,
    },
    patient: {
      type: "string",
      ref: COLLECTIONS_NAME.PATIENT,
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
    proficiency: {
      type: "string",
    },
    readingProficiency: {
      type: "string",
      enum: ENUMS.LanguageProficiencies,
    },
    verbalProficiency: {
      type: "string",
      enum: ENUMS.LanguageProficiencies,
    },
  },
};
