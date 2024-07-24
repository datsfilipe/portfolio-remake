import { Footer } from '@features/footer/ui/footer'
import { Header } from '@features/header/ui'
import { Sidebar } from '@features/siderbar/ui'
import { SITE_TITLE } from '@shared/lib/constants'

export default function BrainNoteLayout(props: { title: string; children: React.ReactNode }) {
	return (
		<>
			<Header title={SITE_TITLE} />
			<main className='flex lg:flex-row flex-col mb-12 max-w-3xl lg:max-w-fit mx-auto px-4 min-h-[80vh] sm:my-8 my-4'>
				<Sidebar />
				<section className='flex flex-col space-y-2'>
					<h1 className='text-4xl font-bold bg-blue-600 px-4 py-2 mb-6'>{props.title}</h1>
					<article className='prose xl:prose-lg prose-quoteless prose-neutral dark:prose-invert prose-p:text-justify mb-8'>
						{props.children}
					</article>
				</section>
			</main>
			<Footer />
		</>
	)
}