import { Footer } from '@features/footer/ui/footer'
import { Header } from '@features/header/ui'
import { Sidebar } from '@features/siderbar/ui'
import { SITE_TITLE } from '@shared/lib/constants'
import { useRouteError } from 'react-router-dom'

export default function ShareableNoteLayout(props: { title: string; children: React.ReactNode }) {
	const error = useRouteError()
	console.log(error)

	return (
		<>
			<Header title={SITE_TITLE} />
			<main className='flex lg:flex-row flex-col mb-12 mx-auto px-4 min-h-[75dvh] sm:my-8 my-4 max-w-3xl xl:max-w-5xl'>
				{!error && <Sidebar />}
				<section className='flex flex-col space-y-2 w-full'>{props.children}</section>
			</main>
			<Footer />
		</>
	)
}