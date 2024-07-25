import { Footer } from '@features/footer/ui/footer'
import { Header } from '@features/header/ui'
import { Sidebar } from '@features/siderbar/ui'
import { SITE_TITLE } from '@shared/lib/constants'

export default function ShareableNoteLayout(props: { title: string; children: React.ReactNode }) {
	return (
		<>
			<Header title={SITE_TITLE} />
			<main className='flex lg:flex-row flex-col mb-12 max-w-3xl lg:max-w-fit mx-auto px-4  min-h-[75dvh] sm:my-8 my-4'>
				<Sidebar />
				<section className='flex flex-col space-y-2'>{props.children}</section>
			</main>
			<Footer />
		</>
	)
}