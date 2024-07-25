import { SectionHeading } from '@features/section/ui/sectionHeading'

export default function Projects() {
	const isDev = import.meta.env.MODE === 'development'
	if (!isDev) return null

	return (
		<>
			<h1 className='text-3xl font-bold mb-8 mt-8 px-4 py-2 bg-blue-600 w-fit'>Projects!</h1>
			{['Web', 'Tools', 'Themes'].map(category => (
				<div key={category}>
					<SectionHeading title={category} />
				</div>
			))}
		</>
	)
}