import { HeaderLink } from '@features/header/ui/headerLink'
import { HeaderWrapper } from '@features/header/ui/headerWrapper'
import { FaGithub } from 'react-icons/fa'

export const Header = (props: { title: string }) => {
	return (
		<header className='flex items-center justify-between py-4 max-w-3xl mx-auto px-4'>
			<h1 className='text-2xl font-bold'>
				<a href='/' className='hover:no-underline' aria-label={props.title} title={props.title}>
					{props.title}
				</a>
			</h1>
			<nav>
				<HeaderWrapper>
					<ul className='flex-col sm:flex-row sm:items-center justify-between sm:space-x-2 space-x-0 space-y-2 sm:space-y-0 mr-4 sm:mr-0'>
						<li>
							<HeaderLink
								href='/projects'
								className='font-medium p-2 data-[active=true]:bg-blue-600 hover:underline'
								aria-label='Projects'
								title='Projects'
							>
								Projects
							</HeaderLink>
						</li>
						<li>
							<HeaderLink
								href='/blog'
								className='font-medium p-2 data-[active=true]:bg-blue-600'
								aria-label='Blog'
								title='Blog'
							>
								Blog
							</HeaderLink>
						</li>
						<li>
							<HeaderLink
								href='/brain'
								className='font-medium p-2 data-[active=true]:bg-blue-600'
								aria-label='Brain'
								title='Brain'
							>
								Brain
							</HeaderLink>
						</li>
						<li>
							<a
								href='https://github.com/datsfilipe/datsfilipe.dev'
								className='font-medium p-2 flex items-center space-x-2'
								target='_blank'
								rel='noopener noreferrer'
								aria-label='Source'
								title='Source'
							>
								<FaGithub size={18} />
								<span>Source</span>
							</a>
						</li>
					</ul>
				</HeaderWrapper>
			</nav>
		</header>
	)
}