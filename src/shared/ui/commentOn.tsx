import { FaCommentAlt } from 'react-icons/fa'

import { GET_COMMENT_STRING } from '@shared/lib/constants'

const twitterLink = 'https://twitter.com/intent/tweet?text='
const linksArray = [
	{
		social: 'twitter',
		link: twitterLink,
		username: '@datsfilipe1'
	}
]

export const CommentOn = (props: { postUrl: string }) => {
	return (
		<div className='flex items-center space-x-2 py-8'>
			<FaCommentAlt />
			<span>
				comment on{' '}
				{linksArray.map((item, i) => (
					<span key={item.link}>
						<a
							className='text-blue-500'
							href={item.link + GET_COMMENT_STRING(item.username, props.postUrl)}
							target='_blank'
							rel='noopener noreferrer'
						>
							{item.social}
						</a>
						{i < linksArray.length - 1 ? '/' : ''}
					</span>
				))}
			</span>
		</div>
	)
}