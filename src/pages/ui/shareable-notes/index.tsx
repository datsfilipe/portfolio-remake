import { useLoaderData } from 'react-router-dom'
import type { Note } from '@shared/lib/schemas'

export const layout = 'shareableNote'

export default function ShareableNotes() {
	const note = useLoaderData() as Note

	return (
		<>
			<h1 className='text-4xl font-bold bg-blue-600 px-4 py-2 mb-6'>{note.title}</h1>
			<article
				className='prose xl:prose-lg prose-quoteless prose-neutral dark:prose-invert prose-p:text-justify mb-8 prose-headings:my-0'
				// biome-ignore lint/security/noDangerouslySetInnerHtml: intentional
				dangerouslySetInnerHTML={{ __html: note.content }}
			/>
		</>
	)
}