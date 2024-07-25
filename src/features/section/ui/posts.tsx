import { FormattedDate } from '@shared/ui/formattedDate'
import type { Post } from '@shared/lib/schemas'

export const Posts = ({ posts }: { posts: Partial<Post>[] }) => {
	return (
		<section>
			<ul className='flex flex-col space-y-4'>
				{posts.map(post => {
					if (!post.title || !post.publishedAt) return null
					return (
						<li key={post.slug} className='space-y-2'>
							<a href={`/blog/${post.slug}`} aria-label={`${post.title}!`} title={post.title}>
								<h4 className='text-xl font-bold text-justify'>{post.title}!</h4>
							</a>
							<p className='text-stone-300'>
								<FormattedDate date={post.publishedAt} />
							</p>
						</li>
					)
				})}
			</ul>
		</section>
	)
}