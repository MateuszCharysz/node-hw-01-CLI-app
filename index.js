const { listContacts, getContactById, removeContact, addContact } =
  require('./contacts');
const { program } = require('commander');
listContacts();
// getContactById('05olLMgyVQdWRwgKfg5J6');
// addContact('', '123@asd.pl','0-700-007-277-2');
// removeContact('05olLMgyVQdWRwgKfg5J6');
// addContact('George Ezra', '123@asd.pl', '0-700-007-277-2');

// const { Command } = require('commander');
// const program = new Command();
// program
//   .option('-a, --action <type>', 'choose action')
//   .option('-i, --id <type>', 'user id')
//   .option('-n, --name <type>', 'user name')
//   .option('-e, --email <type>', 'user email')
//   .option('-p, --phone <type>', 'user phone');

// program.parse(process.argv);

// const argv = program.opts();

// TODO: refaktor
function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
      listContacts()
      break;

    case 'get':
      getContactById(id)
      break;

    case 'add':
      addContact(name, email, phone);
      break;

    case 'remove':
      removeContact(id)
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction(argv);
