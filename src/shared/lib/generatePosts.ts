import { parseMarkdownFile, parseMarkdownToHtml, readMarkdownFiles, writeJson } from './helpers'
import { watch } from 'node:fs'
import { post } from './schemas'
import path from 'node:path'

const postsDir = path.join(__dirname, '../assets/posts')

export const generatePosts = async () => {
	const files = readMarkdownFiles(postsDir)
	const posts = Promise.all(
		files.map(async file => {
			const postData = parseMarkdownFile(file)
			postData.content = await parseMarkdownToHtml(postData.content)
			return post.parse(postData)
		})
	)

	const publicPath = path.join(__dirname, '../../../public/assets')
	writeJson(path.join(publicPath, 'posts.json'), posts)
}

if (process.argv[2] === 'watch') {
	const watcher = watch(postsDir, { recursive: true }, async eventType => {
		if (eventType === 'change' || eventType === 'rename') {
			await generatePosts()
		}
	})

	process.on('SIGINT', () => {
		watcher.close()
		process.exit(0)
	})
} else {
	await generatePosts()
}
