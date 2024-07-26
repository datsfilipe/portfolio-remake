import { Footer } from '@features/footer/ui/footer'
import { Header } from '@features/header/ui'
import { SITE_TITLE } from '@shared/lib/constants'

export default function BlogPostLayout(props: { children: React.ReactNode }) {
	return (
		<>
			<Header title={SITE_TITLE} />
			<main className='mb-12 mx-auto px-4 min-h-[75dvh] sm:my-8 my-4 max-w-3xl xl:max-w-5xl'>{props.children}</main>
			<Footer />
		</>
	)
}