console.log('Starting app.js')

const fs = require('fs')
const _ = require('lodash')
const yargs = require('yargs')

const notes = require('./notes')

const argv = yargs
  .command('add', 'Add a new note', {
    title: {
      describe: 'Title of note',
      demand: true,
      alias: 't'
    },
    body: {
      describe: 'Body of note',
      demand: true,
      alias: 'b'
    }
  })
  .help()
  .argv

const command = argv._[0]
console.log(`Command: ${command}`)
console.log('Yargs', argv)

if (command === 'add') {
  const note = notes.addNote(argv.title, argv.body)
  console.log(!note
    ? `A note with the title "${argv.title}" already exists, please change the title.`
    : `Note "${argv.title}" saved successfully.`)
} else if (command === 'list') {
  const note = notes.getAll()
  console.log(note)
} else if (command === 'read') {
  const note = notes.readNote(argv.title)
  console.log(note || `Could not find note: "${argv.title}"`)
} else if (command === 'remove') {
  const note = notes.removeNote(argv.title)
  console.log(note
    ? `Note "${argv.title}" was removed.`
    : `Note "${argv.title}" was not found.`)
} else {
  console.log('Command not recognized')
}
