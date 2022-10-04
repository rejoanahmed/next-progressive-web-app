export const COLLECTIONS_NAME = {
  PATIENT: "patients",
  PATIENT_EMAIL: "patientemails",
  ADDRESS: "adresses",
  PATIENT_PREFERENCE: "patientpreferences",
  LANGUAGE: "languages",
  GOAL: "goals",
  TASK_COMMENT: "taskcomments",
  WAYMARKER: "waymarkers",
  ENCOUNTER_NOTE: "encounternotes",
  WAYMARKER_TEAM: "waymarkerteams",
  TASK: "tasks",
  EXTERNAL_COMMUNICATION: "externalcommunications",
  SMS_CHANNEL: "smschannels",
  TWILIO_NUMBER: "twilionumbers",
  PHONE: "phones",
  PATIENT_STATUS: "patientstatuses",
  PATIENT_ACTIVATION: "patientactivations",
  GOAL_STATUS: "goalstatuses",
  ENCOUNTER_NOTE_UPDATE_WAYMARKER: "encounternoteupdatewaymarkers",
  GOAL_UPDATE_WAYMARKERS: "goalupdatewaymarkers",
  TASK_COLLABORATORS: "taskcollaborators",
  TASK_UPDATE_WAYMARKER: "taskupdatewaymarkers",
} as const;
export const ENUMS = {
  EncounterType: [
    "SCHEDULED_CHECKIN",
    "UNSCHEDULED_CHECKIN",
    "INBOUND_REQUEST",
    "ACCOMPANIMENT",
    "WEEKEND_TUCKIN",
    "HOSPITAL_VISIT",
    "GOAL_SETTING",
    "MEET_THE_PATIENT",
    "PATIENT_OUTREACH",
    "PHARMACIST_CONSULTATION",
    "THERAPY_COUNSELING",
    "REFERRAL",
    "PROVIDER_COORDINATION",
    "CBO_COORDINATION",
    "FAMILY_FRIEND_COORDINATION",
  ],
  SocialDeterminants: [
    "HOUSING_INSECURITY",
    "FOOD_INSECURITY",
    "INTER_PERSONAL_VIOLENCE",
    "HISTORY_OF_SUBSTANCE_ABUSE",
  ],
  Programs: ["RISING_RISK", "BEHAVIORAL_HEALTH", "MATERNITY"],
  Region: ["NORTH_WEST", "NORTH_EAST", "SOUTH_WEST", "SOUTH_EAST"],
  Lanuages: [
    "AFRIKAANS",
    "ALBANIAN",
    "ARABIC",
    "ARMENIAN",
    "BASQUE",
    "BENGALI",
    "BULGARIAN",
    "CATALAN",
    "CAMBODIAN",
    "CHINESE_MANDARIN",
    "CROATIAN",
    "CZECH",
    "DANISH",
    "DUTCH",
    "ENGLISH",
    "ESTONIAN",
    "FIJI",
    "FINNISH",
    "FRENCH",
    "GEORGIAN",
    "GERMAN",
    "GREEK",
    "GUJARATI",
    "HEBREW",
    "HINDI",
    "HUNGARIAN",
    "ICELANDIC",
    "INDONESIAN",
    "IRISH",
    "ITALIAN",
    "JAPANESE",
    "JAVANESE",
    "KOREAN",
    "LATIN",
    "LATVIAN",
    "LITHUANIAN",
    "MACEDONIAN",
    "MALAY",
    "MALAYALAM",
    "MALTESE",
    "MAORI",
    "MARATHI",
    "MONGOLIAN",
    "NEPALI",
    "NORWEGIAN",
    "PERSIAN",
    "POLISH",
    "PORTUGUESE",
    "PUNJABI",
    "QUECHUA",
    "ROMANIAN",
    "RUSSIAN",
    "SAMOAN",
    "SERBIAN",
    "SLOVAK",
    "SLOVENIAN",
    "SPANISH",
    "SWAHILI",
    "SWEDISH",
    "TAMIL",
    "TATAR",
    "TELUGU",
    "THAI",
    "TIBETAN",
    "TONGA",
    "TURKISH",
    "UKRAINIAN",
    "URDU",
    "UZBEK",
    "VIETNAMESE",
    "WELSH",
    "XHOSA",
  ],
  states: [
    "ALABAMA",
    "ALASKA",
    "ARIZONA",
    "ARKANSAS",
    "CALIFORNIA",
    "COLORADO",
    "CONNECTICUT",
    "DELAWARE",
    "FLORIDA",
    "GEORGIA",
    "HAWAII",
    "IDAHO",
    "ILLINOIS",
    "INDIANA",
    "IOWA",
    "KANSAS",
    "KENTUCKY",
    "LOUISIANA",
    "MAINE",
    "MARYLAND",
    "MASSACHUSETTS",
    "MICHIGAN",
    "MINNESOTA",
    "MISSISSIPPI",
    "MISSOURI",
    "MONTANA",
    "NEBRASKA",
    "NEVADA",
    "NEW_HAMPSHIRE",
    "NEW_JERSEY",
    "NEW_MEXICO",
    "NEW_YORK",
    "NORTH_CAROLINA",
    "NORTH_DAKOTA",
    "OHIO",
    "OKLAHOMA",
    "OREGON",
    "PENNSYLVANIA",
    "RHODE_ISLAND",
    "SOUTH_CAROLINA",
    "SOUTH_DAKOTA",
    "TENNESSEE",
    "TEXAS",
    "UTAH",
    "VERMONT",
    "VIRGINIA",
    "WASHINGTON",
    "WEST_VIRGINIA",
    "WISCONSIN",
    "WYOMING",
    "DISTRICT_OF_COLUMBIA",
    "AMERICAN_SAMOA",
    "GUAM",
    "NORTHERN_MARIANA_ISLANDS",
    "PUERTO_RICO",
    "US_VIRGIN_ISLANDS",
  ],
  ContactType: [
    "HOME_VISIT",
    "IN_COMMUNITY",
    "PROVIDER_OFFICE",
    "HOSPITAL",
    "CBO",
    "OTHER_INPERSON",
    "PHONE_CALL",
    "VIDEO_VISIT",
    "EMAIL",
    "SMS_TEXT",
  ],
  GoalIcon: [
    "HOUSING",
    "FOOD",
    "MEDICATION",
    "CHILDCARE",
    "EMPLOYMENT",
    "TRANSPORTATION",
    "VIOLENCE",
    "ACTIVITY",
    "SOCIAL_CONNECTION",
    "CARE",
    "SUBSTANCE_ABUSE",
    "SMOKING_CESSATION",
    "MENTAL_HEALTH",
    "MATERNITY",
  ],
  Category: [
    "HOUSING_INSECURITY",
    "FOOD_INSECURITY",
    "MEDICATION_ADHERENCE",
    "CHILDCARE",
    "EMPLOYMENT",
    "TRANSPORTATION",
    "VIOLENCE",
    "ACTIVITY",
    "SOCIAL_CONNECTION",
    "CARE",
    "SUBSTANCE_ABUSE",
    "SMOKING_CESSATION",
    "MENTAL_HEALTH",
    "MATERNITY",
  ],
  EncounterOccured: ["YES", "NO", "CANCELED", "RESCHEDULED"],
  PatientStatustypes: [
    "ASSIGNED",
    "TARGETED",
    "OUTREACH",
    "IN_CONTACT",
    "ENROLLED",
    "MAXIMUM",
    "HIGH",
    "MODERATE",
    "MAINTENANCE",
    "PREGRADUATION",
    "GRADUATED",
    "CLOSED",
  ],
  GoalStatustypes: ["ACTIVE", "INCOMPLETE", "NOT_STARTED", "COMPLETED"],
  WaymarkerTitle: [
    "CLINIC_COORDINATOR",
    "CHW",
    "CHW_LEAD",
    "THERAPIST",
    "CARE_COORDINATOR",
    "PHARMACIST",
    "PHARMACIST_CONSULTATION",
  ],
  LanguageProficiencies: ["LOW", "MODERATE", "HIGH"],
  ContactInformationStatus: ["VERIFIED", "NEW", "DO_NOT_USE", "ARCHIVED"],
};