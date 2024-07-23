import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const pages: Record<string, { default: React.FC }> = import.meta.glob('@pages/ui/**/*.tsx', { eager: true })

const routes = []
for (const path in pages) {
	const filename = path.match(/pages\/ui\/(.*)\.tsx/)?.[1]
	if (!filename) continue

	const normalizedFilename = filename.includes('$') ? filename.replace('$', ':') : filename.replace('index', '')
	routes.push({
		path: `/${normalizedFilename}`,
		Element: pages[path].default
	})
}

const router = createBrowserRouter(
	routes.map(({ Element, ...rest }) => ({
		...rest,
		element: <Element />
	}))
)

export const AppRouter = () => <RouterProvider router={router} />