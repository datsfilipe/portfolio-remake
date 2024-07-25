import { FormattedDate } from '@shared/ui/formattedDate'
import type { Post } from '@shared/lib/schemas'

export const Posts = ({ posts }: { posts: Partial<Post>[] }) => {
	return (
		<section>
			<h2 className='text-2xl font-bold text-end mb-8 text-stone-400'>Posts</h2>
			<ul className='flex flex-col space-y-2'>
				{posts.map(post => {
					if (!post.title || !post.publishedAt) return null
					return (
						<li key={post.slug} className='space-y-2 text-end'>
							<a href={`/posts/${post.slug}`} aria-label={`${post.title}!`} title={post.title}>
								<h4 className='text-xl font-bold'>{post.title}!</h4>
							</a>
							<p className='text-stone-300'>
								~<FormattedDate date={post.publishedAt} />
							</p>
						</li>
					)
				})}
			</ul>
		</section>
	)
}