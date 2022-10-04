import { RxJsonSchema, RxCollection, RxCollectionCreator } from "rxdb";
import { Prisma } from "@prisma/client";
import { COLLECTIONS_NAME, ENUMS } from "./lib";

export type WaymarkerCR = RxCollectionCreator<Prisma.WaymarkerCreateInput>;
export type WaymarkerC = RxCollection<Prisma.WaymarkerCreateInput>;

export const waymarker: RxJsonSchema<Prisma.WaymarkerCreateInput> = {
  primaryKey: "id",
  title: "Waymarker schema",
  description: "describes a Waymarker",
  version: 0,
  type: "object",

  properties: {
    id: {
      type: "string",
    },
    firstName: {
      type: "string",
    },
    lastName: {
      type: "string",
    },
    email: {
      type: "string",
    },
    avatar: {
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
    version: {
      type: "string",
    },
    title: {
      type: "string",
      enum: ENUMS.WaymarkerTitle,
    },
    taskComments: {
      type: "array",
      ref: COLLECTIONS_NAME.TASK_COMMENT,
      items: {
        type: "string",
      },
    },
    createdEncounterNotes: {
      type: "array",
      ref: COLLECTIONS_NAME.ENCOUNTER_NOTE,
      items: {
        type: "string",
      },
    },
    encounterNotesUpdated: {
      type: "array",
      ref: COLLECTIONS_NAME.ENCOUNTER_NOTE_UPDATE_WAYMARKER,
      items: {
        type: "string",
      },
    },
    externalCommunication: {
      type: "array",
      ref: COLLECTIONS_NAME.EXTERNAL_COMMUNICATION,
      items: {
        type: "string",
      },
    },
    goalsCreated: {
      type: "array",
      ref: COLLECTIONS_NAME.GOAL,
      items: {
        type: "string",
      },
    },
    goalsUpdated: {
      type: "array",
      ref: COLLECTIONS_NAME.GOAL_UPDATE_WAYMARKERS,
      items: {
        type: "string",
      },
    },
    phones: {
      type: "array",
      ref: COLLECTIONS_NAME.PHONE,
      items: {
        type: "string",
      },
    },
    assignedPatients: {
      type: "array",
      ref: COLLECTIONS_NAME.PATIENT,
      items: {
        type: "string",
      },
    },
    assignedToTasks: {
      type: "array",
      ref: COLLECTIONS_NAME.TASK,
      items: {
        type: "string",
      },
    },
    taskCreatorTasks: {
      type: "array",
      ref: COLLECTIONS_NAME.TASK,
      items: {
        type: "string",
      },
    },
    createdGoalStatuses: {
      type: "array",
      ref: COLLECTIONS_NAME.GOAL_STATUS,
      items: {
        type: "string",
      },
    },
    tasksCollaboratedOn: {
      type: "array",

      ref: COLLECTIONS_NAME.TASK_COLLABORATORS,
      items: {
        type: "string",
      },
    },

    tasksUpdated: {
      type: "array",
      ref: COLLECTIONS_NAME.TASK_UPDATE_WAYMARKER,
      items: {
        type: "string",
      },
    },
    twilioNumber: {
      type: "array",
      ref: COLLECTIONS_NAME.TWILIO_NUMBER,
      items: {
        type: "string",
      },
    },
    waymarkerTeams: {
      type: "array",
      ref: COLLECTIONS_NAME.WAYMARKER_TEAM,
      items: {
        type: "string",
      },
    },
  },
};
