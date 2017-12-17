console.log('Starting notes.js')

const fs = require('fs')

const fetchNotes = () => {
  try {
    const notesString = fs.readFileSync('notes-data.json')
    return JSON.parse(notesString)
  } catch (e) {
    return []
  }
}

const saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes))
}

const addNote = (title, body) => {
  const notes = fetchNotes()
  const note = {
    title,
    body
  }
  const duplicateNotes = notes.filter(n => n.title === title)

  if (duplicateNotes.length === 0) {
    notes.push(note)
    saveNotes(notes)
    return note
  }
}

const getAll = () => fetchNotes()

const removeNote = (title) => {
  const notes = fetchNotes()
  const removedNote = notes.filter(note => note.title === title)

  if (removedNote) {
    notes.splice(notes.indexOf(removedNote), 1)
    saveNotes(notes)
  }

  return removedNote[0]
}

const readNote = title => fetchNotes().filter(note => note.title === title)[0]

module.exports = {
  addNote,
  getAll,
  removeNote,
  readNote
}
