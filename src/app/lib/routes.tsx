import { createBrowserRouter, RouterProvider, type Params } from 'react-router-dom'
import type { Note, Post } from '@shared/lib/schemas'

// @ts-ignore - it's a commonjs module
import rawNotes from '@shared/assets/data/notes.js'
// @ts-ignore - it's a commonjs module
import rawPosts from '@shared/assets/data/posts.js'

const errorPage: Record<string, { default: React.FC }> = import.meta.glob('@pages/ui/error/index.tsx', { eager: true })
const pages: Record<string, { default: React.FC; layout: string }> = import.meta.glob('@pages/ui/**/*.tsx', {
	eager: true
})
const layouts: Record<string, { default: React.FC<{ children: React.ReactNode }> }> = import.meta.glob(
	'@widgets/ui/layouts/*.tsx',
	{ eager: true }
)

const noteLoader = async ({ params, isSlugPage, path }: { params: Params; isSlugPage: boolean; path: string }) => {
	const slug = params['*'] ?? 'readme'.toUpperCase()
	if (!path.includes('index') && !isSlugPage) return null
	const note = (rawNotes as Note[]).find(note => note.slug === slug)
	try {
		const decodedContent = decodeURIComponent(atob(note?.content ?? ''))
		return { ...note, content: decodedContent }
	} catch (e) {
		console.error(e)
		return null
	}
}

const postsListLoader = async () => {
	const posts = (rawPosts as Post[]).filter(post => post.publishedAt)
	return posts.map(post => ({
		title: post.title,
		publishedAt: new Date(post.publishedAt),
		slug: post.slug
	}))
}

const postLoader = async ({ params }: { params: Params }) => {
	const slug = params.slug
	const post = (rawPosts as Post[]).find(post => post.slug === slug)
	try {
		const decodedContent = decodeURIComponent(atob(post?.content ?? ''))
		return { ...post, content: decodedContent }
	} catch (e) {
		console.error(e)
		return null
	}
}

const routes = []
for (const path in pages) {
	const filename = path.match(/pages\/ui\/(.*)\.tsx/)?.[1]
	if (!filename) continue

	let isSlugPage = false
	const normalizedFilename = filename.includes('$') ? filename.replace('$', ':') : filename.replace('index', '')
	if (normalizedFilename.includes('error')) continue
	if (normalizedFilename.includes('[slug]')) isSlugPage = true
	const slugPath = !normalizedFilename.includes('shareable-notes')
		? normalizedFilename.replace('[slug]', ':slug')
		: normalizedFilename.replace('[slug]', '*')

	const layoutname = pages[path]?.layout ?? 'common'
	let Layout: React.FC<{ children: React.ReactNode }> = () => <></>
	for (const layoutPath in layouts) {
		if (layoutPath.includes(layoutname)) {
			Layout = layouts[layoutPath].default
			break
		}
	}

	routes.push({
		path: isSlugPage ? `/${slugPath}` : `/${normalizedFilename}`,
		Element: pages[path].default,
		ErrorElement: Object.values(errorPage)[0]?.default ?? (() => <></>),
		Layout: Layout,
		loader: async ({ params }: { params: Params }) => {
			if (normalizedFilename.includes('shareable-notes')) return noteLoader({ params, isSlugPage, path })
			if (normalizedFilename.includes('posts')) return postLoader({ params })
			if (!normalizedFilename) return postsListLoader()
			return null
		}
	})
}

const router = createBrowserRouter(
	routes.map(({ Element, Layout, ErrorElement, ...rest }) => ({
		...rest,
		element: (
			<Layout>
				<Element />
			</Layout>
		),
		errorElement: (
			<Layout>
				<ErrorElement />
			</Layout>
		)
	}))
)

export const AppRouter = () => <RouterProvider router={router} />