import { RxJsonSchema, RxCollection, RxCollectionCreator } from "rxdb";
import { Prisma } from "@prisma/client";
import { COLLECTIONS_NAME, ENUMS } from "./lib";

export type SMSChannelCR = RxCollectionCreator<Prisma.SMSChannelCreateInput>;
export type SMSChannelC = RxCollection<Prisma.SMSChannelCreateInput>;

export const smschannel: RxJsonSchema<Prisma.SMSChannelCreateInput> = {
  primaryKey: "id",
  title: "SMSChannel schema",
  description: "describes a SMSChannel",
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
    externalCommunication: {
      ref: COLLECTIONS_NAME.EXTERNAL_COMMUNICATION,
      type: "array",
      items: {
        type: "string",
      },
    },
    twilioChannelId: {
      type: "string",
    },
    twilioChannelName: {
      type: "string",
    },
    twilioNumber: {
      type: "string",
      ref: COLLECTIONS_NAME.TWILIO_NUMBER,
    },
  },
};
