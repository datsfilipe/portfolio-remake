import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@app/ui/app'

import '@shared/styles/global.css'

// biome-ignore lint/style/noNonNullAssertion: trust me
ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
)