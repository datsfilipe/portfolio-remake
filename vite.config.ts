import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import { resolve } from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@app': resolve(__dirname, 'src/app'),
			'@processes': resolve(__dirname, 'src/processes'),
			'@pages': resolve(__dirname, 'src/pages'),
			'@widgets': resolve(__dirname, 'src/widgets'),
			'@features': resolve(__dirname, 'src/features'),
			'@entities': resolve(__dirname, 'src/entities'),
			'@shared': resolve(__dirname, 'src/shared')
		}
	}
})
