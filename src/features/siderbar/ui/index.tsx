import Tree from '@features/treeView/ui'
import Searchbox from '@features/search/ui/searchbox'
import { SidebarWrapper } from './sidebarWrapper'

import { useLocation } from 'react-router-dom'

const notes = []
const entries = notes.map(note => {
	return {
		slug: note.slug,
		title: note.data.title
	}
})

export const Sidebar = () => {
	const { pathname } = useLocation()

	return (
		<SidebarWrapper>
			<div className='lg:max-w-[18rem] md:max-w-[15rem] sm:max-w-[12rem] max-w-none w-60'>
				<Searchbox entries={entries} />
				<Tree notes={notes} pathname={pathname} />
			</div>
		</SidebarWrapper>
	)
}