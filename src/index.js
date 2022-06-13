const inquirer = require("inquirer");

const {
  noteTypeQuestion,
  addNewNoteQuestion,
  billQuestions,
  appointmentQuestions,
  appointmentAttendeesQuestions,
  listQuestions,
  listItemQuestions,
  reminderQuestions,
} = require("./questions");

inquirer.registerPrompt("date", require("inquirer-date-prompt"));

const init = async () => {
  let noteCreationInProgress = true;

  while (noteCreationInProgress) {
    // get the type of note to add
    const { type } = await inquirer.prompt(noteTypeQuestion);

    // if bill
    if (type === "bill") {
      // prompt bill questions and get answers
      const billAnswers = await inquirer.prompt(billQuestions);

      console.log(billAnswers);
    }

    // if appointment
    if (type === "appointment") {
      // prompt appointment questions and get answers
      const appointmentAnswers = await inquirer.prompt(appointmentQuestions);

      let appointmentAttendeesInProgress = true;
      appointmentAnswers.attendees = [];

      // start loop for collecting attendees
      while (appointmentAttendeesInProgress) {
        // prompt appointment attendees questions and get answers
        const { attendee, addAnotherAttendee } = await inquirer.prompt(
          appointmentAttendeesQuestions
        );

        // push attendee to array
        appointmentAnswers.attendees.push(attendee);

        if (!addAnotherAttendee) {
          appointmentAttendeesInProgress = false;
        }
      }

      console.log(appointmentAnswers);
    }

    // if list
    if (type === "list") {
      // prompt list questions and get answers
      const listAnswers = await inquirer.prompt(listQuestions);

      let listItemsInProgress = true;
      listAnswers.items = [];

      // start loop for collecting list items
      while (listItemsInProgress) {
        // prompt list items questions and get answers
        const { listItem, addListItem } = await inquirer.prompt(
          listItemQuestions
        );

        // push attendee to array
        listAnswers.items.push(listItem);

        if (!addListItem) {
          listItemsInProgress = false;
        }
      }

      console.log(listAnswers);
    }

    // if reminder
    if (type === "reminder") {
      // prompt reminder questions and get answers
      const reminderAnswers = await inquirer.prompt(reminderQuestions);

      console.log(reminderAnswers);
    }

    const { addAnotherNote } = await inquirer.prompt(addNewNoteQuestion);

    if (!addAnotherNote) {
      noteCreationInProgress = false;
    }
  }

  console.log("generate notes and HTML");
  // generate notes and HTML
};

init();
