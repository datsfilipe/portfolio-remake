import { Footer } from '@features/footer/ui/footer'
import { Header } from '@features/header/ui'
import { SITE_TITLE } from '@shared/lib/constants'
import { Outlet } from 'react-router-dom'

export default function BlogPostLayout() {
	return (
		<>
			<Header title={SITE_TITLE} />
			<main className='mb-12 mx-auto px-4 min-h-[75dvh] sm:my-8 my-4 max-w-3xl xl:max-w-5xl'>
				<Outlet />
			</main>
			<Footer />
		</>
	)
}