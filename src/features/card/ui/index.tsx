import type { ReactElement } from 'react'

interface CardProps {
	project: {
		name: string
		url: string
		repository: string
		image: string
	}
}

export default function Card({ project }: CardProps): ReactElement {
	return (
		<div className='flex flex-col space-y-4'>
			<a href={project.url} target='_blank' rel='noopener noreferrer'>
				<div className='bg-[#fff] text-black flex justify-between min-h-[12rem] h-fit relative w-full overflow-hidden [&:hover>span]:mb-6 [&:hover>span>span]:flex'>
					<div className='pt-6 pl-6 pb-6 pr-4 h-full'>
						<h4 className='text-xl'>
							<b>{project.name}</b>
						</h4>
					</div>
					<img
						src={'https://github.com/datsfilipe.png'}
						alt='datsfilipe'
						className='w-16 h-16 mt-6 mr-6 rounded-full'
					/>
					<div className='absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500' />
				</div>
			</a>
		</div>
	)
}