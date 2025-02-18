import Tree from '@features/tree/ui'
import Searchbox from '@features/search/ui/searchbox'
import { SidebarWrapper } from '@features/siderbar/ui/sidebarWrapper'
import { useLocation } from 'react-router-dom'
import type { Note } from '@shared/lib/schemas'

// @ts-ignore - it's a commonjs module
import rawNotes from '@shared/assets/data/notes.js'

export const Sidebar = () => {
	const { pathname } = useLocation()

	const notes = (rawNotes as Note[]).filter(note => note.slug.toLowerCase() !== 'readme')
	const entries = notes.map(note => {
		return {
			slug: note.slug,
			title: note.title
		}
	})

	return (
		<SidebarWrapper>
			<div className='lg:max-w-[18rem] md:max-w-[15rem] sm:max-w-[12rem] max-w-none w-60'>
				<Searchbox entries={entries} />
				<Tree
					notes={notes.map(note => {
						return {
							slug: note.slug,
							data: note
						}
					})}
					pathname={pathname}
				/>
			</div>
		</SidebarWrapper>
	)
}