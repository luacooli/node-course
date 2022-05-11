const chalk = require("chalk");
const yargs = require("yargs");
const getNotes = require("../notes-app/notes");

// Customize yargs versions
yargs.version("1.1.0");

// Create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    console.log("Title: " + argv.title);
    console.log("Body: " + argv.body);
  },
});

// Create remove command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  handler: () => {
    console.log("Removing a note");
  },
});

// Create remove command
yargs.command({
  command: "list",
  describe: "List a note",
  handler: () => {
    console.log("Listing all notes");
  },
});

// Create remove command
yargs.command({
  command: "read",
  describe: "Read a note",
  handler: () => {
    console.log("Reading a notes");
  },
});

yargs.parse();
