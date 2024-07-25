import { parseMarkdownFile, parseMarkdownToHtml, readMarkdownFiles, writeFile } from './helpers'
import { watch } from 'node:fs'
import { note, type Note } from './schemas'
import path from 'node:path'

const notesDir = path.join(__dirname, '../assets/shareable-notes')

export const generateNotes = async () => {
	const files = readMarkdownFiles(notesDir)
	const notes = await Promise.all(
		files.map(async file => {
			const filename = path.basename(file)
			if (!filename.startsWith('_') || !filename.endsWith('.md')) return null
			const noteData: Partial<Note> = parseMarkdownFile(file)
			noteData.content = await parseMarkdownToHtml(noteData.content || '')
			noteData.slug = path.relative(notesDir, file).replace('.md', '')
			return note.parse(noteData)
		})
	)

	const dataPath = path.join(__dirname, '../assets/data')
	writeFile(path.join(dataPath, 'notes.js'), notes.filter(Boolean))
}

if (process.argv[2] === 'watch') {
	const watcher = watch(notesDir, { recursive: true }, async eventType => {
		if (eventType === 'change' || eventType === 'rename') {
			await generateNotes()
		}
	})

	process.on('SIGINT', () => {
		watcher.close()
		process.exit(0)
	})
} else {
	await generateNotes()
}
