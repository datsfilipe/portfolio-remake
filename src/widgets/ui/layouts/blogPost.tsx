import { Footer } from '@features/footer/ui/footer'
import { Header } from '@features/header/ui'
import { SITE_TITLE } from '@shared/lib/constants'
import { CommentOn } from '@shared/ui/commentOn'
import { FormattedDate } from '@shared/ui/formattedDate'

export default function BlogPostLayout(props: {
	title: string
	summary: string
	publishedAt: Date
	heroImage: string
	children: React.ReactNode
}) {
	const url = ''

	return (
		<>
			<Header title={SITE_TITLE} />
			<main className='mb-12 max-w-3xl mx-auto px-4 min-h-[75dvh] my-8'>
				<div className='flex flex-col space-y-2 my-6'>
					<h1 className='text-4xl font-bold bg-blue-600 px-4 py-2'>{props.title}</h1>
					<span className='text-stone-500 text-lg font-semibold self-end'>
						<FormattedDate date={props.publishedAt} />
					</span>
					{props.heroImage && (
						<img
							src={props.heroImage}
							alt='hero'
							className='w-full h-64 object-cover rounded-md border border-stone-600'
						/>
					)}
				</div>
				<section className='max-w-full'>
					<article className='prose xl:prose-lg prose-quoteless prose-neutral dark:prose-invert prose-p:text-justify mb-8'>
						{props.children}
					</article>
				</section>
				<CommentOn postUrl={url} />
			</main>
			<Footer />
		</>
	)
}