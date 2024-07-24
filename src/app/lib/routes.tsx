import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const pages: Record<string, { default: React.FC; layout: string }> = import.meta.glob('@pages/ui/**/*.tsx', {
	eager: true
})
const layouts: Record<string, { default: React.FC<{ children: React.ReactNode }> }> = import.meta.glob(
	'@widgets/ui/layouts/*.tsx',
	{ eager: true }
)

const routes = []
for (const path in pages) {
	const filename = path.match(/pages\/ui\/(.*)\.tsx/)?.[1]
	if (!filename) continue

	const normalizedFilename = filename.includes('$') ? filename.replace('$', ':') : filename.replace('index', '')

	const layoutname = pages[path]?.layout ?? 'common'
	let Layout: React.FC<{ children: React.ReactNode }> = () => <></>
	for (const layoutPath in layouts) {
		if (layoutPath.includes(layoutname)) {
			Layout = layouts[layoutPath].default
			break
		}
	}

	routes.push({
		path: `/${normalizedFilename}`,
		Element: pages[path].default,
		Layout: Layout
	})
}

const router = createBrowserRouter(
	routes.map(({ Element, Layout, ...rest }) => ({
		...rest,
		element: (
			<Layout>
				<Element />
			</Layout>
		)
	}))
)

export const AppRouter = () => <RouterProvider router={router} />