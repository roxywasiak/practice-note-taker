//init function
const init = async () => {
  const { tyoe } = await inquirer.prompt(noteTypeQuestion);
  console.log(type);

  //if bill
  if (type === "bill") {
    //prompt bill question
  }
};
