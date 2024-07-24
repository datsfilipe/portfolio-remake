import Dropdown from '@features/dropdown/ui'

export const SidebarWrapper = (props: { children: React.ReactNode }) => {
	return (
		<aside className='lg:mr-8 flex-shrink-0 py-2 lg:py-0'>
			<div className='lg:block hidden'>{props.children}</div>
			<div className='lg:hidden block'>
				<Dropdown icon='FaTree'>{props.children}</Dropdown>
			</div>
		</aside>
	)
}