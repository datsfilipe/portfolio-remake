import Dropdown from '@features/ui/dropdown'

export const HeaderWrapper = (props: { title: string; children: React.ReactNode }) => {
	return (
		<header className='flex items-center justify-between py-4 max-w-3xl mx-auto px-4'>
			<h1 className='text-2xl font-bold'>
				<a href='/' className='hover:no-underline' aria-label={props.title} title={props.title}>
					{props.title}
				</a>
			</h1>
			<nav>
				<div className='sm:hidden block'>
					<Dropdown direction='right' icon='FaBars'>
						{props.children}
					</Dropdown>
				</div>
				<div className='hidden sm:block'>{props.children}</div>
			</nav>
		</header>
	)
}