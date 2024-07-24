import { watch } from 'node:fs'
import path from 'node:path'
import { parseMarkdownFile, readMarkdownFiles, writeJson } from './helpers'
import { post } from './schemas'

const postsDir = path.join(__dirname, '../assets/blog')

export const generatePosts = () => {
	const files = readMarkdownFiles(postsDir)
	const posts = files.map(file => {
		const postData = parseMarkdownFile(file)
		return post.parse(postData)
	})

	const pagesLibPath = path.join(__dirname, '../../pages/lib')

	writeJson(path.join(pagesLibPath, 'posts-metadata.json'), posts)
}

if (process.argv[2] === 'watch') {
	const watcher = watch(postsDir, { recursive: true }, eventType => {
		if (eventType === 'change' || eventType === 'rename') {
			generatePosts()
		}
	})

	process.on('SIGINT', () => {
		watcher.close()
		process.exit(0)
	})
} else {
	generatePosts()
}
