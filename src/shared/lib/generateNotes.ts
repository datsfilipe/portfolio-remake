import path from 'node:path'
import { parseMarkdownFile, readMarkdownFiles, writeJson } from './helpers'
import { note } from './schemas'

export const generateNotes = () => {
	const notesDir = path.join(__dirname, '../assets/shareable-notes')
	const files = readMarkdownFiles(notesDir)
	const notes = files.map(file => {
		const noteData = parseMarkdownFile(file)
		return note.parse(noteData)
	})

	const pagesLibPath = path.join(__dirname, '../../pages/lib')

	writeJson(path.join(pagesLibPath, 'notes-metadata.json'), notes)
}

generateNotes()
