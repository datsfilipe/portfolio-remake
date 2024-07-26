import react from '@vitejs/plugin-react-swc'
import { rssPlugin } from 'vite-plugin-rss'
import { defineConfig } from 'vite'
import { resolve } from 'node:path'

// @ts-ignore - it's a commonjs module, but it's fine
import rawPosts from './src/shared/assets/data/posts.js'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		rssPlugin({
			mode: 'define',
			channel: {
				title: 'datsfilipe.dev',
				link: 'https://datsfilipe.dev/rss.xml',
				description: 'RSS feed for datsfilipe.dev'
			},
			items: (
				rawPosts as {
					slug: string
					title: string
					summary: string
					publishedAt: string
					content?: string
				}[]
			).map(post => ({
				title: post.title,
				description: post.summary,
				link: `https://datsfilipe.dev/posts/${post.slug}/`,
				content: `<![CDATA[ ${decodeURIComponent(escape(atob(post?.content ?? '')))} ]]>`,
				...(post.publishedAt && { pubDate: new Date(post.publishedAt) })
			}))
		})
	],
	assetsInclude: [resolve(__dirname, 'src/shared/assets/data/*.json')],
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
	},
	build: {
		outDir: 'dist',
		sourcemap: true,
		chunkSizeWarningLimit: 1300,
		rollupOptions: {
			output: {
				manualChunks: {
					notes: ['@shared/assets/data/notes.js'],
					posts: ['@shared/assets/data/posts.js'],
					routes: ['@app/lib/routes.tsx']
				}
			}
		},
		commonjsOptions: {
			transformMixedEsModules: true
		}
	}
})
