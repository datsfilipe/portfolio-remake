import { CommentOn } from '@shared/ui/commentOn'
import { useLoaderData } from 'react-router-dom'
import type { Post } from '@shared/lib/schemas'
import { FormattedDate } from '@shared/ui/formattedDate'

export const layout = 'blogPost'

export default function BlogPost() {
	const post = useLoaderData() as Post
	const url = `${window.location.origin}/posts/${post.slug}`

	return (
		<>
			<div className='flex flex-col space-y-2 my-6'>
				<h1 className='text-4xl font-bold bg-blue-600 px-4 py-2'>{post.title}</h1>
				<span className='text-stone-500 text-lg font-semibold self-end'>
					<FormattedDate date={post.publishedAt} />
				</span>
				{post.heroImage && (
					<img
						src={post.heroImage}
						alt='hero'
						className='w-full h-64 object-cover rounded-md border border-stone-600'
					/>
				)}
			</div>
			<section className='max-w-full'>
				<article
					className='prose lg:prose-lg xl:prose-xl prose-quoteless prose-neutral dark:prose-invert prose-p:text-justify mb-8 prose-headings:my-0 prose-li:my-0'
					// biome-ignore lint/security/noDangerouslySetInnerHtml: intentional
					dangerouslySetInnerHTML={{ __html: post.content }}
				/>
			</section>
			<CommentOn postUrl={url} />
		</>
	)
}