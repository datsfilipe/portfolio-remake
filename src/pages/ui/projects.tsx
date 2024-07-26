import { IoIosWarning } from 'react-icons/io'
import { SectionHeading } from '@features/section/ui/sectionHeading'

export default function Projects() {
	const isDev = import.meta.env.MODE === 'development'

	return (
		<>
			<h1 className='text-3xl font-bold mb-8 mt-8 px-4 py-2 bg-blue-600 w-fit'>Projects!</h1>
			{!isDev ? (
				<p className='text-lg flex space-x-2 items-center'>
					<span>This page is under construction.</span>
					<IoIosWarning size={24} className='text-yellow-500' />
				</p>
			) : (
				<>
					{['Web', 'Tools', 'Themes'].map(category => (
						<div key={category}>
							<SectionHeading title={category} />
						</div>
					))}
				</>
			)}
		</>
	)
}