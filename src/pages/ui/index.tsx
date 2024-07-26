import { SocialLinks } from '@features/social/ui/socialLinks'
import { OtherLinks } from '@features/social/ui/otherLinks'
import { Divider } from '@shared/ui/divider'

import { NAME, ROLE, FRONT_STACK, BACK_STACK, AGE, COMPANY } from '@shared/lib/constants'
import { makePlainText } from '@shared/lib/helpers'
import { Posts } from '@features/section/ui/posts'
import { useLoaderData } from 'react-router-dom'
import type { Post } from '@shared/lib/schemas'

const PLAIN_TEXT_FOR_FRONT_STACK = makePlainText(FRONT_STACK)
const PLAIN_TEXT_FOR_BACK_STACK = makePlainText(BACK_STACK)

export default function Home() {
	const postsList = useLoaderData() as Partial<Post>[]

	return (
		<>
			<section className='flex flex-col sm:flex-row justify-between sm:space-x-8 mt-4'>
				<div className='flex flex-col items-center sm:items-start sm:justify-start mt-4 sm:mt-0'>
					<h1 className='text-2xl font-bold my-4 p-2 bg-blue-600 w-fit'>Hi, I'm {NAME}!</h1>
					<p className='my-2 text-justify'>
						I'm a {AGE}-year-old <b>{ROLE}</b> based in Brazil with a strong focus on the web. I've gained remote
						development experience and contributed to open source projects.{' '}
					</p>
					<p className='my-2 text-justify'>
						{COMPANY ? (
							<span>
								I'm currently working at{' '}
								<b>
									<a href={COMPANY.link} className='text-blue-500' target='_blank' rel='noopener noreferrer'>
										{COMPANY.name}
									</a>{' '}
									- {COMPANY.description}
								</b>
								.
							</span>
						) : null}
					</p>
					<p className='my-2 text-justify'>
						I mainly use <b>{PLAIN_TEXT_FOR_FRONT_STACK}</b>, and more for front-end and{' '}
						<b>{PLAIN_TEXT_FOR_BACK_STACK}</b>, and more for back-end projects.
					</p>
					<p className='my-2 text-justify'>
						In my free time, I indulge in{' '}
						<a
							aria-label='ricing'
							title='ricing'
							href='https://jie-fang.github.io/blog/basics-of-ricing'
							className='text-blue-500'
							target='_blank'
							rel='noopener noreferrer'
						>
							ricing
						</a>
						, gaming, movie watching, and coding personal projects.
					</p>
				</div>
				<div className='flex-shrink-0 items-center'>
					<span className='w-full mt-6 mb-2 flex justify-center sm:justify-start'>
						<b className='text-lg font-semibold'>Social Links!</b>
					</span>
					<SocialLinks />
				</div>
			</section>
			<Divider />
			<OtherLinks />
			<Divider direction='left' />
			<Posts posts={postsList} />
		</>
	)
}