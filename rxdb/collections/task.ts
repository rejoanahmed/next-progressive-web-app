import { RxJsonSchema, RxCollection, RxCollectionCreator } from "rxdb";
import { Prisma } from "@prisma/client";
import { COLLECTIONS_NAME, ENUMS } from "./lib";

export type TaskCR = RxCollectionCreator<Prisma.TaskCreateInput>;
export type TaskC = RxCollection<Prisma.TaskCreateInput>;

export const task: RxJsonSchema<Prisma.TaskCreateInput> = {
  primaryKey: "id",
  title: "Task schema",
  description: "describes a Task",
  version: 0,
  type: "object",

  properties: {
    id: {
      type: "string",
    },
    taskTitle: {
      type: "string",
    },
    taskTag: {
      type: "array",
      items: {
        type: "string",
      },
    },
    dueDate: {
      type: "string",
      format: "date-time",
    },
    createdAt: {
      type: "string",
      format: "date-time",
    },
    updatedAt: {
      type: "string",
      format: "date-time",
    },
    flagged: {
      type: "boolean",
      default: false,
    },
    description: {
      type: "string",
    },
    version: {
      type: "string",
    },
    assignedTo: {
      type: "string",
      ref: COLLECTIONS_NAME.WAYMARKER,
    },
    taskCreator: {
      type: "string",
      ref: COLLECTIONS_NAME.WAYMARKER,
    },
    patient: {
      type: "string",
      ref: COLLECTIONS_NAME.PATIENT,
    },
    goals: {
      type: "array",
      items: {
        type: "string",
      },
    },
    collaborators: {
      type: "array",
      items: {
        type: "string",
      },
      ref: COLLECTIONS_NAME.TASK_COLLABORATORS,
    },
    comments: {
      type: "array",
      items: {
        type: "string",
      },
      ref: COLLECTIONS_NAME.TASK_COMMENT,
    },
    completed: {
      type: "boolean",
      default: false,
    },
    deleted: {
      type: "boolean",
      default: false,
    },
    updatedBy: {
      type: "string",
      ref: COLLECTIONS_NAME.TASK_UPDATE_WAYMARKER,
    },
  },
};
