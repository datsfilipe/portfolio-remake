import Drawer from '@features/drawer/ui'
import Dropdown from '@features/dropdown/ui'

export const SidebarWrapper = (props: { children: React.ReactNode }) => {
	return (
		<aside className='flex-shrink-0 py-2 lg:py-0 relative'>
			<div className='lg:block hidden'>
				<Drawer>{props.children}</Drawer>
			</div>
			<div className='lg:hidden block absolute right-2 mt-[1.2rem]'>
				<Dropdown withBg icon='tree' direction='right'>
					{props.children}
				</Dropdown>
			</div>
		</aside>
	)
}