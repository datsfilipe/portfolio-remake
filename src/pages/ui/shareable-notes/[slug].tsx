import { useLoaderData } from 'react-router-dom'
import type { Note } from '@shared/lib/schemas'

export const layout = 'shareableNote'

export default function ShareableNote() {
	const note = useLoaderData() as Note

	return (
		<>
			<div className='bg-blue-600 text-white px-4 py-2 mb-6 min-h-14'>
				<h1 className='w-[92%] lg:w-full text-2xl lg:text-4xl leading-relaxed font-bold'>{note.title}</h1>
			</div>
			<article
				className='prose prose-sm xs:prose-base lg:prose-lg xl:prose-xl prose-quoteless prose-neutral dark:prose-invert prose-p:text-justify mb-8 prose-headings:my-0 prose-li:my-0'
				// biome-ignore lint/security/noDangerouslySetInnerHtml: intentional
				dangerouslySetInnerHTML={{ __html: note.content }}
			/>
		</>
	)
}