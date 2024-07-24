import path from 'node:path'
import { parseMarkdownFile, readMarkdownFiles, writeJson } from './helpers'
import { post } from './schemas'

export const generatePosts = () => {
	const postsDir = path.join(__dirname, '../assets/blog')
	const files = readMarkdownFiles(postsDir)
	const posts = files.map(file => {
		const postData = parseMarkdownFile(file)
		return post.parse(postData)
	})

	const pagesLibPath = path.join(__dirname, '../../pages/lib')

	writeJson(path.join(pagesLibPath, 'posts-metadata.json'), posts)
}

generatePosts()
