import { watch } from 'node:fs'
import path from 'node:path'
import { parseMarkdownFile, readMarkdownFiles, writeJson } from './helpers'
import { note } from './schemas'

const notesDir = path.join(__dirname, '../assets/shareable-notes')

export const generateNotes = () => {
	const files = readMarkdownFiles(notesDir)
	const notes = files.map(file => {
		const noteData = parseMarkdownFile(file)
		return note.parse(noteData)
	})

	const pagesLibPath = path.join(__dirname, '../../pages/lib')

	writeJson(path.join(pagesLibPath, 'notes-metadata.json'), notes)
}

if (process.argv[2] === 'watch') {
	const watcher = watch(notesDir, { recursive: true }, eventType => {
		if (eventType === 'change' || eventType === 'rename') {
			generateNotes()
		}
	})

	process.on('SIGINT', () => {
		watcher.close()
		process.exit(0)
	})
} else {
	generateNotes()
}
