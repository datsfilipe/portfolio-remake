import { Footer } from '@features/footer/ui/footer'
import { Header } from '@features/header/ui'
import { SITE_TITLE } from '@shared/lib/constants'

export default function CommonLayout(props: { children: React.ReactNode }) {
	return (
		<>
			<Header title={SITE_TITLE} />
			<main className='mb-6 max-w-3xl mx-auto px-4'>{props.children}</main>
			<Footer />
		</>
	)
}