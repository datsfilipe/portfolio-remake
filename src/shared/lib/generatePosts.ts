import { parseMarkdownFile, parseMarkdownToHtml, readMarkdownFiles, writeFile } from './helpers'
import { watch } from 'node:fs'
import { post, type Post } from './schemas'
import path from 'node:path'

const postsDir = path.join(__dirname, '../assets/posts')

export const generatePosts = async () => {
	const files = readMarkdownFiles(postsDir)
	const posts = await Promise.all(
		files.map(async file => {
			const filename = path.basename(file)
			if (filename.startsWith('_') || !filename.endsWith('.md')) return null
			const postData: Partial<Post> = parseMarkdownFile(file)
			postData.content = await parseMarkdownToHtml(postData.content || '')
			postData.slug = path.relative(postsDir, file).replace('.md', '')
			return post.parse(postData)
		})
	)

	const dataPath = path.join(__dirname, '../assets/data')
	writeFile(path.join(dataPath, 'posts.js'), posts.filter(Boolean))
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
