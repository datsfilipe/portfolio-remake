import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const pages: Record<string, { default: React.FC; layout: string }> = import.meta.glob('@pages/ui/**/*.tsx', {
	eager: true
})
const layouts: Record<string, { default: React.FC<{ children: React.ReactNode }> }> = import.meta.glob(
	'@widgets/ui/layouts/*.tsx',
	{ eager: true }
)

const errorPage: Record<string, { default: React.FC }> = import.meta.glob('@pages/ui/error/index.tsx', { eager: true })

const routes = []
for (const path in pages) {
	const filename = path.match(/pages\/ui\/(.*)\.tsx/)?.[1]
	if (!filename) continue

	let isSlugPage = false
	const normalizedFilename = filename.includes('$') ? filename.replace('$', ':') : filename.replace('index', '')
	if (normalizedFilename.includes('error')) continue
	if (normalizedFilename.includes('[slug]')) isSlugPage = true
	const slugPath = normalizedFilename.includes('brain')
		? normalizedFilename.replace('[slug]', ':noteId')
		: normalizedFilename.replace('[slug]', ':postId')

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
		Layout: Layout
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