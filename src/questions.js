const noteTypeQuestion = {
  type: "list",
  message: "Please select the type of note to add:",
  name: "type",
  choices: [
    {
      name: "Bill",
      value: "bill",
      short: "Bill",
    },
    {
      name: "Appointment",
      value: "appointment",
      short: "Appointment",
    },
    {
      name: "List",
      value: "list",
      short: "List",
    },
    {
      name: "Reminder",
      value: "reminder",
      short: "Reminder",
    },
  ],
  // validate: () => {}
};

const addNewNoteQuestion = {
  type: "confirm",
  message: "Would you like to add another note?",
  name: "addAnotherNote",
  default: true,
  // validate: () => {}
};
const billQuestions = [
  {
    type: "input",
    message: "Please enter the title of the bill:",
    name: "title",
    // validate: () => {}
  },
  {
    type: "number",
    message: "Please enter the bill amount:",
    name: "amount",
    // validate: () => {}
  },
  {
    type: "input",
    message: "Please enter the payee details:",
    name: "payee",
    // validate: () => {}
  },
  {
    type: "date",
    name: "date",
    message: "Please enter the due date for bill:",
    default: new Date(),
    format: { month: "short", hour: undefined, minute: undefined },
    clearable: true,
  },
];

const appointmentQuestions = [
  {
    type: "input",
    message: "Please enter the title of the appointment:",
    name: "title",
    // validate: () => {}
  },
  {
    type: "list",
    message: "Please select the type of appointment:",
    name: "type",
    choices: [
      {
        name: "Doctor",
        value: "doctor",
        short: "Doctor",
      },
      {
        name: "Dentist",
        value: "dentist",
        short: "Dentist",
      },
      {
        name: "Hair Dresser",
        value: "hairDresser",
        short: "Hair",
      },
      {
        name: "Meeting",
        value: "meeting",
        short: "Meeting",
      },
    ],
    // validate: () => {}
  },
  {
    type: "date",
    name: "date",
    message: "Please enter the appointment date:",
    default: new Date(),
    format: { month: "short" },
    clearable: true,
  },
];

const appointmentAttendeesQuestions = [
  {
    type: "input",
    message: "Please enter the full name of the attendee:",
    name: "attendees",
    // validate: () => {}
  },
  {
    type: "confirm",
    message: "Would you like to add another attendee?",
    name: "addAnotherAttendee",
    // validate: () => {}
  },
];

const listQuestions = [
  {
    type: "input",
    message: "Please enter the title of the list:",
    name: "title",
    // validate: () => {}
  },
  {
    type: "date",
    name: "date",
    message: "Please enter the due date for list completion:",
    default: new Date(),
    format: { month: "short" },
    clearable: true,
  },
];

const listItemQuestions = [
  {
    type: "input",
    message: "Please enter the list item name:",
    name: "listItem",
    // validate: () => {}
  },
  {
    type: "confirm",
    message: "Would you like to add another list item?",
    name: "addListItem",
    // validate: () => {}
  },
];

const reminderQuestions = [
  {
    type: "input",
    message: "Please enter the title of the reminder:",
    name: "title",
    // validate: () => {}
  },
  {
    type: "date",
    name: "date",
    message: "Please enter the due date for reminder:",
    default: new Date(),
    format: { month: "short" },
    clearable: true,
  },
];
