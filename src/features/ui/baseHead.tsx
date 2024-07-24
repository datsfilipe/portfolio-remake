interface Props {
	title: string
	description: string
	image?: string
}

export const BaseHead = ({ title, description, image = '/blog-placeholder-1.png' }: Props) => {
	const generator = ''
	const canonicalURL = ''
	const url = ''

	return (
		<>
			{/* Global Metadata */}
			<meta charSet='utf-8' />
			<meta name='viewport' content='width=device-width,initial-scale=1' />
			<link rel='icon' type='image/svg' href='/icon.svg' />
			<meta name='generator' content={generator} />

			{/* Font preloads */}
			<link rel='preconnect' href='https://fonts.googleapis.com' />
			<link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='anonymous' />

			{/* Image preloads */}
			<link rel='preload' fetchPriority='high' as='image' href='https://github.com/datsfilipe.png' type='image/png' />

			{/* Canonical URL */}
			<link rel='canonical' href={canonicalURL} />

			{/* Primary Meta Tags */}
			<title>{title}</title>
			<meta name='title' content={title} />
			<meta name='description' content={description} />

			{/* Fonts */}
			<link
				href='https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;700&display=swap'
				rel='stylesheet'
			/>

			{/* Open Graph / Facebook */}
			<meta property='og:type' content='website' />
			<meta property='og:url' content={url} />
			<meta property='og:title' content={title} />
			<meta property='og:description' content={description} />
			<meta property='og:image' content={`https://datsfilipe.dev${image}`} />

			{/* Twitter */}
			<meta name='twitter:card' content='summary_large_image' />
			<meta name='twitter:url' content={url} />
			<meta name='twitter:title' content={title} />
			<meta name='twitter:description' content={description} />
			<meta name='twitter:image' content={`https://datsfilipe.dev${image}`} />
		</>
	)
}