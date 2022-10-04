import { RxJsonSchema, RxCollection, RxCollectionCreator } from "rxdb";
import { Prisma } from "@prisma/client";
import { COLLECTIONS_NAME, ENUMS } from "./lib";

export type ExternalCommunicationCR =
  RxCollectionCreator<Prisma.ExternalCommunicationCreateInput>;
export type ExternalCommunicationC =
  RxCollection<Prisma.ExternalCommunicationCreateInput>;

export const externalcommunication: RxJsonSchema<Prisma.ExternalCommunicationCreateInput> =
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
      createdAt: {
        type: "string",
        format: "date-time",
      },
      messageContent: {
        type: "string",
      },
      messageCreator: {
        type: "string",
      },
      messageMedia: {
        type: "string",
      },
      SMSChannel: {
        type: "string",
        ref: COLLECTIONS_NAME.SMS_CHANNEL,
      },
      updatedAt: {
        type: "string",
        format: "date-time",
      },
      version: {
        type: "string",
      },
      waymarker: {
        type: "string",
        ref: COLLECTIONS_NAME.WAYMARKER,
      },
    },
  };
