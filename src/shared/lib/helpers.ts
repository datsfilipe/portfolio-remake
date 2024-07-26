import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'

import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkMath from 'remark-math'
import remarkRehype from 'remark-rehype'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeKatex from 'rehype-katex'
import rehypeStringify from 'rehype-stringify'
import rehypeShiki from '@shikijs/rehype'

export const readMarkdownFiles = (dir: string): string[] => {
	const files = []
	const items = fs.readdirSync(dir)

	for (const item of items) {
		const itemPath = path.join(dir, item)
		const stats = fs.statSync(itemPath)

		if (stats.isDirectory()) {
			files.push(...readMarkdownFiles(itemPath))
		} else if (item.endsWith('.md')) {
			files.push(itemPath)
		}
	}

	return files
}

export const parseMarkdownFile = (filePath: string) => {
	const fileContents = fs.readFileSync(filePath, 'utf8')
	const { data, content } = matter(fileContents)
	return { ...data, content }
}

export const writeFile = (filePath: string, data: unknown) => {
	const dir = path.dirname(filePath)

	if (!fs.existsSync(dir)) {
		fs.mkdirSync(dir, { recursive: true })
	}

	const jsonObject = JSON.stringify(data, null, 2)
	const jsFileContents = `export default ${jsonObject}`
	fs.writeFileSync(filePath, jsFileContents, {
		encoding: 'utf8'
	})
}

export const parseMarkdownToHtml = async (markdown: string) => {
	const result = await unified()
		.use(remarkParse)
		.use(remarkRehype)
		.use(rehypeSlug)
		.use(rehypeShiki, {
			themes: {
				dark: 'min-dark',
				light: 'min-dark'
			},
			fallbackLanguage: 'plaintext'
		})
		.use(rehypeAutolinkHeadings, {
			behavior: 'wrap',
			properties: {
				className: ['anchor']
			}
		})
		.use(remarkMath)
		.use(rehypeKatex)
		.use(rehypeStringify)
		.process(markdown)

	return Buffer.from(result.value.toString()).toString('base64')
}