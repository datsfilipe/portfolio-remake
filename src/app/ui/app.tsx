import { AppRouter } from '@app/lib/routes'
import { DrawerContextProvider } from '@features/drawer/lib/drawerContext'

function App() {
	return (
		<DrawerContextProvider>
			<AppRouter />
		</DrawerContextProvider>
	)
}

export default App