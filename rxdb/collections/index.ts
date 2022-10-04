// export const COLLECTIONS_NAME = {
//   PATIENT: "patients",
//   PATIENT_EMAIL: "patientemails",
//   ADDRESS: "adresses",
//   PATIENT_PREFERENCE: "patientpreferences",
//   LANGUAGE: "languages",
//   GOAL: "goals",
//   TASK_COMMENT: "taskcomments",
//   WAYMARKER: "waymarkers",
//   ENCOUNTER_NOTE: "encounternotes",
//   WAYMARKER_TEAM: "waymarkerteams",
//   TASK: "tasks",
//   EXTERNAL_COMMUNICATION: "externalcommunications",
//   SMS_CHANNEL: "smschannels",
//   TWILIO_NUMBER: "twilionumbers",
//   PHONE: "phones",
//   PATIENT_STATUS: "patientstatuses",
//   PATIENT_ACTIVATION: "patientactivations",
//   GOAL_STATUS: "goalstatuses",
//   ENCOUNTER_NOTE_UPDATE_WAYMARKER: "encounternoteupdatewaymarkers",
//   GOAL_UPDATE_WAYMARKERS: "goalupdatewaymarkers",
//   TASK_COLLABORATORS: "taskcollaborators",
//   TASK_UPDATE_WAYMARKER: "taskupdatewaymarkers",
// } as const;
// export const ENUMS = {
//   EncounterType: [
//     "SCHEDULED_CHECKIN",
//     "UNSCHEDULED_CHECKIN",
//     "INBOUND_REQUEST",
//     "ACCOMPANIMENT",
//     "WEEKEND_TUCKIN",
//     "HOSPITAL_VISIT",
//     "GOAL_SETTING",
//     "MEET_THE_PATIENT",
//     "PATIENT_OUTREACH",
//     "PHARMACIST_CONSULTATION",
//     "THERAPY_COUNSELING",
//     "REFERRAL",
//     "PROVIDER_COORDINATION",
//     "CBO_COORDINATION",
//     "FAMILY_FRIEND_COORDINATION",
//   ],
//   SocialDeterminants: [
//     "HOUSING_INSECURITY",
//     "FOOD_INSECURITY",
//     "INTER_PERSONAL_VIOLENCE",
//     "HISTORY_OF_SUBSTANCE_ABUSE",
//   ],
//   Programs: ["RISING_RISK", "BEHAVIORAL_HEALTH", "MATERNITY"],
//   Region: ["NORTH_WEST", "NORTH_EAST", "SOUTH_WEST", "SOUTH_EAST"],
//   Lanuages: [
//     "AFRIKAANS",
//     "ALBANIAN",
//     "ARABIC",
//     "ARMENIAN",
//     "BASQUE",
//     "BENGALI",
//     "BULGARIAN",
//     "CATALAN",
//     "CAMBODIAN",
//     "CHINESE_MANDARIN",
//     "CROATIAN",
//     "CZECH",
//     "DANISH",
//     "DUTCH",
//     "ENGLISH",
//     "ESTONIAN",
//     "FIJI",
//     "FINNISH",
//     "FRENCH",
//     "GEORGIAN",
//     "GERMAN",
//     "GREEK",
//     "GUJARATI",
//     "HEBREW",
//     "HINDI",
//     "HUNGARIAN",
//     "ICELANDIC",
//     "INDONESIAN",
//     "IRISH",
//     "ITALIAN",
//     "JAPANESE",
//     "JAVANESE",
//     "KOREAN",
//     "LATIN",
//     "LATVIAN",
//     "LITHUANIAN",
//     "MACEDONIAN",
//     "MALAY",
//     "MALAYALAM",
//     "MALTESE",
//     "MAORI",
//     "MARATHI",
//     "MONGOLIAN",
//     "NEPALI",
//     "NORWEGIAN",
//     "PERSIAN",
//     "POLISH",
//     "PORTUGUESE",
//     "PUNJABI",
//     "QUECHUA",
//     "ROMANIAN",
//     "RUSSIAN",
//     "SAMOAN",
//     "SERBIAN",
//     "SLOVAK",
//     "SLOVENIAN",
//     "SPANISH",
//     "SWAHILI",
//     "SWEDISH",
//     "TAMIL",
//     "TATAR",
//     "TELUGU",
//     "THAI",
//     "TIBETAN",
//     "TONGA",
//     "TURKISH",
//     "UKRAINIAN",
//     "URDU",
//     "UZBEK",
//     "VIETNAMESE",
//     "WELSH",
//     "XHOSA",
//   ],
//   states: [
//     "ALABAMA",
//     "ALASKA",
//     "ARIZONA",
//     "ARKANSAS",
//     "CALIFORNIA",
//     "COLORADO",
//     "CONNECTICUT",
//     "DELAWARE",
//     "FLORIDA",
//     "GEORGIA",
//     "HAWAII",
//     "IDAHO",
//     "ILLINOIS",
//     "INDIANA",
//     "IOWA",
//     "KANSAS",
//     "KENTUCKY",
//     "LOUISIANA",
//     "MAINE",
//     "MARYLAND",
//     "MASSACHUSETTS",
//     "MICHIGAN",
//     "MINNESOTA",
//     "MISSISSIPPI",
//     "MISSOURI",
//     "MONTANA",
//     "NEBRASKA",
//     "NEVADA",
//     "NEW_HAMPSHIRE",
//     "NEW_JERSEY",
//     "NEW_MEXICO",
//     "NEW_YORK",
//     "NORTH_CAROLINA",
//     "NORTH_DAKOTA",
//     "OHIO",
//     "OKLAHOMA",
//     "OREGON",
//     "PENNSYLVANIA",
//     "RHODE_ISLAND",
//     "SOUTH_CAROLINA",
//     "SOUTH_DAKOTA",
//     "TENNESSEE",
//     "TEXAS",
//     "UTAH",
//     "VERMONT",
//     "VIRGINIA",
//     "WASHINGTON",
//     "WEST_VIRGINIA",
//     "WISCONSIN",
//     "WYOMING",
//     "DISTRICT_OF_COLUMBIA",
//     "AMERICAN_SAMOA",
//     "GUAM",
//     "NORTHERN_MARIANA_ISLANDS",
//     "PUERTO_RICO",
//     "US_VIRGIN_ISLANDS",
//   ],
//   ContactType: [
//     "HOME_VISIT",
//     "IN_COMMUNITY",
//     "PROVIDER_OFFICE",
//     "HOSPITAL",
//     "CBO",
//     "OTHER_INPERSON",
//     "PHONE_CALL",
//     "VIDEO_VISIT",
//     "EMAIL",
//     "SMS_TEXT",
//   ],
//   GoalIcon: [
//     "HOUSING",
//     "FOOD",
//     "MEDICATION",
//     "CHILDCARE",
//     "EMPLOYMENT",
//     "TRANSPORTATION",
//     "VIOLENCE",
//     "ACTIVITY",
//     "SOCIAL_CONNECTION",
//     "CARE",
//     "SUBSTANCE_ABUSE",
//     "SMOKING_CESSATION",
//     "MENTAL_HEALTH",
//     "MATERNITY",
//   ],
//   Category: [
//     "HOUSING_INSECURITY",
//     "FOOD_INSECURITY",
//     "MEDICATION_ADHERENCE",
//     "CHILDCARE",
//     "EMPLOYMENT",
//     "TRANSPORTATION",
//     "VIOLENCE",
//     "ACTIVITY",
//     "SOCIAL_CONNECTION",
//     "CARE",
//     "SUBSTANCE_ABUSE",
//     "SMOKING_CESSATION",
//     "MENTAL_HEALTH",
//     "MATERNITY",
//   ],
//   EncounterOccured: ["YES", "NO", "CANCELED", "RESCHEDULED"],
//   PatientStatustypes: [
//     "ASSIGNED",
//     "TARGETED",
//     "OUTREACH",
//     "IN_CONTACT",
//     "ENROLLED",
//     "MAXIMUM",
//     "HIGH",
//     "MODERATE",
//     "MAINTENANCE",
//     "PREGRADUATION",
//     "GRADUATED",
//     "CLOSED",
//   ],
//   GoalStatustypes: ["ACTIVE", "INCOMPLETE", "NOT_STARTED", "COMPLETED"],
//   WaymarkerTitle: [
//     "CLINIC_COORDINATOR",
//     "CHW",
//     "CHW_LEAD",
//     "THERAPIST",
//     "CARE_COORDINATOR",
//     "PHARMACIST",
//     "PHARMACIST_CONSULTATION",
//   ],
//   LanguageProficiencies: ["LOW", "MODERATE", "HIGH"],
//   ContactInformationStatus: ["VERIFIED", "NEW", "DO_NOT_USE", "ARCHIVED"],
// };
import { COLLECTIONS_NAME, ENUMS } from "./lib";
import { AddressC, AddressCR, address } from "./address";
import {
  encounternote,
  EncounterNoteC,
  EncounterNoteCR,
} from "./encounternote";
import {
  ExternalCommunicationC,
  ExternalCommunicationCR,
  externalcommunication,
} from "./externalcommunication";
import { GoalC, GoalCR, goal } from "./goal";
import { LanguageC, LanguageCR, language } from "./language";
import { PatientC, PatientCR, patient } from "./patient";
import {
  PatientStatusC,
  PatientStatusCR,
  patientstatus,
} from "./patientstatus";
import {
  PatientActivationC,
  PatientActivationCR,
  patientactiavtion,
} from "./patientactivation";
import {
  PatientEmailC,
  PatientEmailCR,
  patientEmailSchema,
} from "./patientemail";
import {
  PatientPreferenceC,
  PatientPreferenceCR,
  patientpreference,
} from "./patientpreference";
import { PhoneC, PhoneCR, phone } from "./phone";
import { SMSChannelC, SMSChannelCR, smschannel } from "./smschannel";
import { TaskC, TaskCR, task } from "./task";
import { WaymarkerC, WaymarkerCR, waymarker } from "./waymarker";

type CollectionCR = {
  [COLLECTIONS_NAME.ADDRESS]: AddressCR;
  [COLLECTIONS_NAME.ENCOUNTER_NOTE]: EncounterNoteCR;
  [COLLECTIONS_NAME.EXTERNAL_COMMUNICATION]: ExternalCommunicationCR;
  [COLLECTIONS_NAME.GOAL]: GoalCR;
  [COLLECTIONS_NAME.LANGUAGE]: LanguageCR;
  [COLLECTIONS_NAME.PATIENT]: PatientCR;
  [COLLECTIONS_NAME.PATIENT_STATUS]: PatientStatusCR;
  [COLLECTIONS_NAME.PATIENT_ACTIVATION]: PatientActivationCR;
  [COLLECTIONS_NAME.PATIENT_EMAIL]: PatientEmailCR;
  [COLLECTIONS_NAME.PATIENT_PREFERENCE]: PatientPreferenceCR;
  [COLLECTIONS_NAME.PHONE]: PhoneCR;
  [COLLECTIONS_NAME.SMS_CHANNEL]: SMSChannelCR;
  [COLLECTIONS_NAME.TASK]: TaskCR;
  [COLLECTIONS_NAME.WAYMARKER]: WaymarkerCR;
};

export type CollectionC = {
  [COLLECTIONS_NAME.ADDRESS]: AddressC;
  [COLLECTIONS_NAME.ENCOUNTER_NOTE]: EncounterNoteC;
  [COLLECTIONS_NAME.EXTERNAL_COMMUNICATION]: ExternalCommunicationC;
  [COLLECTIONS_NAME.GOAL]: GoalC;
  [COLLECTIONS_NAME.LANGUAGE]: LanguageC;
  [COLLECTIONS_NAME.PATIENT]: PatientC;
  [COLLECTIONS_NAME.PATIENT_STATUS]: PatientStatusC;
  [COLLECTIONS_NAME.PATIENT_ACTIVATION]: PatientActivationC;
  [COLLECTIONS_NAME.PATIENT_EMAIL]: PatientEmailC;
  [COLLECTIONS_NAME.PATIENT_PREFERENCE]: PatientPreferenceC;
  [COLLECTIONS_NAME.PHONE]: PhoneC;
  [COLLECTIONS_NAME.SMS_CHANNEL]: SMSChannelC;
  [COLLECTIONS_NAME.TASK]: TaskC;
  [COLLECTIONS_NAME.WAYMARKER]: WaymarkerC;
};

const collections: CollectionCR = {
  adresses: {
    schema: address,
  },
  encounternotes: {
    schema: encounternote,
  },
  externalcommunications: {
    schema: externalcommunication,
  },
  goals: {
    schema: goal,
  },
  languages: {
    schema: language,
  },
  patients: {
    schema: patient,
  },
  patientstatuses: {
    schema: patientstatus,
  },
  patientactivations: {
    schema: patientactiavtion,
  },
  patientemails: {
    schema: patientEmailSchema,
  },
  patientpreferences: {
    schema: patientpreference,
  },
  phones: {
    schema: phone,
  },
  smschannels: {
    schema: smschannel,
  },
  tasks: {
    schema: task,
  },
  waymarkers: {
    schema: waymarker,
  },
};
export default collections;
