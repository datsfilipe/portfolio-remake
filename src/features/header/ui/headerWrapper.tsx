import Dropdown from '@features/dropdown/ui'

export const HeaderWrapper = (props: { children: React.ReactNode }) => {
	return (
		<div className='flex items-center justify-between py-4 max-w-3xl mx-auto'>
			<nav>
				<div className='sm:hidden block'>
					<Dropdown direction='right'>{props.children}</Dropdown>
				</div>
				<div className='hidden sm:block'>{props.children}</div>
			</nav>
		</div>
	)
}