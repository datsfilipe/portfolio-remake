export const layout = 'brainNote'

export default function BrainNoteIndex() {
	const indexNote = [].find(note => note.slug === 'readme')

	return <p>Note</p>
}