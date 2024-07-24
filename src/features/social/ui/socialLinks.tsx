import { FaGithub, FaTwitter, FaLinkedinIn, FaRedditAlien, FaYoutube, FaEnvelope, FaTiktok } from 'react-icons/fa'
import { SOCIAL } from '@shared/lib/constants'

export const SocialLinks = () => {
	const icons = [FaGithub, FaTwitter, FaLinkedinIn, FaRedditAlien, FaYoutube, FaTiktok]

	return (
		<ul className='sm:flex-col flex-row flex-wrap sm:flex-nowrap px-4 sm:px-0 mb-4 sm:mb-0 justify-center sm:justify-normal'>
			{SOCIAL.map(item => (
				<li key={item.name} className='flex items-center space-x-2 space-y-2 mr-2 sm:mr-0'>
					<span>~</span>
					<span
						className={[
							'p1 rounded-md',
							item.name.toLowerCase().includes('email') && 'bg-blue-800',
							item.name.toLowerCase().includes('github') && 'bg-gray-700',
							item.name.toLowerCase().includes('twitter') && 'bg-blue-400',
							item.name.toLowerCase().includes('linkedin') && 'bg-blue-600',
							item.name.toLowerCase().includes('reddit') && 'bg-orange-700',
							item.name.toLowerCase().includes('youtube') && 'bg-red-700',
							item.name.toLowerCase().includes('tiktok') && 'bg-stone-800'
						]
							.filter(Boolean)
							.join(' ')}
					>
						{item.name.toLowerCase() === 'email' ? (
							<FaEnvelope size={18} />
						) : (
							icons.map((Icon, index) =>
								Icon.name.toLowerCase().includes(item.name.toLowerCase()) ? (
									<Icon key={`${item.name}-${index}`} size={18} />
								) : null
							)
						)}
					</span>
					<a
						href={item.link}
						className='flex items-center space-x-1'
						target='_blank'
						rel='noopener noreferrer'
						aria-label={item.name}
						title={item.name}
					>
						<span>{item.name}</span>
					</a>
				</li>
			))}
		</ul>
	)
}