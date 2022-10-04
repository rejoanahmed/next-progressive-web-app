import { RxJsonSchema, RxCollection, RxCollectionCreator } from "rxdb";
import { Prisma } from "@prisma/client";
import { COLLECTIONS_NAME, ENUMS } from "./lib";

export type GoalCR = RxCollectionCreator<Prisma.GoalCreateInput>;
export type GoalC = RxCollection<Prisma.GoalCreateInput>;

export const goal: RxJsonSchema<Prisma.GoalCreateInput> = {
  title: "Goal schema",
  description: "describes a goal",
  version: 0,

  type: "object",
  primaryKey: "id",
  properties: {
    id: {
      type: "string",
    },
    patient: {
      type: "string",
      ref: COLLECTIONS_NAME.PATIENT,
    },
    category: {
      type: "string",
      enum: ENUMS.Category,
    },
    collapsed: {
      type: "boolean",
    },
    createdAt: {
      type: "string",
      format: "date-time",
    },
    updatedAt: {
      type: "string",
      format: "date-time",
    },
    createdBy: {
      type: "string",
      ref: COLLECTIONS_NAME.WAYMARKER,
    },
    updatedBy: {
      type: "string",
      ref: COLLECTIONS_NAME.GOAL_UPDATE_WAYMARKERS,
    },
    deleted: {
      type: "boolean",
      default: false,
    },
    description: {
      type: "string",
    },
    icon: {
      type: "string",
    },
    status: {
      type: "array",
      items: {
        type: "string",
      },
      ref: COLLECTIONS_NAME.GOAL_STATUS,
    },
    statusNote: {
      type: "string",
    },
    version: {
      type: "string",
    },
  },
};
