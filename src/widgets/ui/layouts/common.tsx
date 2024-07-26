import { Footer } from '@features/footer/ui/footer'
import { Header } from '@features/header/ui'
import { SITE_TITLE } from '@shared/lib/constants'
import { Outlet } from 'react-router-dom'

export default function CommonLayout() {
	return (
		<>
			<Header title={SITE_TITLE} />
			<main className='mb-6 max-w-3xl xl:max-w-5xl min-h-[75dvh] mx-auto px-4'>
				<Outlet />
			</main>
			<Footer />
		</>
	)
}