import { FaAngleLeft } from 'react-icons/fa6'
import { useEffect } from 'react'
import { useDrawer } from '../lib/drawerContext'

export default function Drawer(props: { children: React.ReactNode }) {
	const { isOpen, setIsOpen } = useDrawer()

	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			switch (event.key) {
				case 'ArrowRight':
					setIsOpen(true)
					break
				case 'ArrowLeft':
					setIsOpen(false)
					break
				case 'h':
					setIsOpen(false)
					break
				case 'l':
					setIsOpen(true)
					break
				case 'Escape':
					setIsOpen(false)
					break
			}
		}

		window.addEventListener('keydown', handleKeyDown)
		return () => window.removeEventListener('keydown', handleKeyDown)
	}, [setIsOpen])

	return (
		<div className={`flex ${!isOpen ? '-ml-14' : 'mr-4'} min-h-[75dvh]`}>
			<div aria-hidden={!isOpen} className='aria-hidden:hidden'>
				{props.children}
			</div>
			<div className='ml-2 my-auto'>
				<button
					type='button'
					data-state={isOpen ? 'open' : 'closed'}
					onClick={() => setIsOpen(prev => !prev)}
					className='transition-transform duration-300 data-[state=open]:rotate-180 w-8 h-8 flex items-center justify-center'
				>
					<FaAngleLeft />
				</button>
			</div>
		</div>
	)
}