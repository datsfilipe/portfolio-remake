import { FormattedDate } from '@shared/ui/formattedDate'

export const Posts = () => {
	const posts = [].sort((a, b) => b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf())

	return (
		<section>
			<ul className='flex flex-col space-y-4'>
				{posts.map(post => (
					<li className='space-y-2'>
						<a href={`/blog/${post.slug}`} aria-label={`${post.data.title}!`} title={post.data.title}>
							<h4 className='text-xl font-bold text-justify'>{post.data.title}!</h4>
						</a>
						<p className='text-stone-300'>
							<FormattedDate date={post.data.publishedAt} />
						</p>
					</li>
				))}
			</ul>
		</section>
	)
}