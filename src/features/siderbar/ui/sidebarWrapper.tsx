import Dropdown from '@features/ui/dropdown'

export const SidebarWrapper = (props: React.PropsWithChildren) => {
	return (
		<aside className='lg:mr-8 flex-shrink-0 py-2 lg:py-0'>
			<div className='lg:block hidden'>
				<slot />
			</div>
			<div className='lg:hidden block'>
				<Dropdown icon='FaTree'>{props.children}</Dropdown>
			</div>
		</aside>
	)
}