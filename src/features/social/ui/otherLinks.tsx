import { FaHeart } from 'react-icons/fa'
import { CgFileDocument } from 'react-icons/cg'
import { GiCoffeeCup } from 'react-icons/gi'

import { OTHER_LINKS } from '@shared/lib/constants'

export const OtherLinks = () => {
	return (
		<ul className='flex items-center justify-center gap-4 w-fit mx-auto flex-wrap'>
			{OTHER_LINKS.map(item => (
				<li key={item.name}>
					<a
						href={item.link}
						className={[
							'flex items-center space-x-2 text-lg font-bold mb-4 w-full py-2 px-4 hover:no-underline',
							item.name.toLowerCase().includes('curriculum') && 'bg-green-700 text-white',
							item.name.toLowerCase().includes('sponsor') && 'bg-red-600 text-white',
							item.name.toLowerCase().includes('coffee') && 'bg-pink-600 text-white'
						]
							.filter(Boolean)
							.join(' ')}
						target='_blank'
						rel='noopener noreferrer'
					>
						{item.name.toLowerCase().includes('curriculum') ? (
							<CgFileDocument size={24} />
						) : item.name.toLowerCase().includes('coffee') ? (
							<GiCoffeeCup size={24} />
						) : (
							<FaHeart size={24} />
						)}
						<span>{item.name}</span>
					</a>
				</li>
			))}
		</ul>
	)
}