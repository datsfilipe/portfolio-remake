import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'

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

export const makePlainText = (stack: string[]): string =>
	stack
		.map((item: string) => {
			if (item === stack[stack.length - 1]) {
				return item
			}

			return `${item}, `
		})
		.join('')

export const writeJson = (filePath: string, data: unknown) => {
	const dir = path.dirname(filePath)

	if (!fs.existsSync(dir)) {
		fs.mkdirSync(dir, { recursive: true })
	}

	fs.writeFileSync(filePath, JSON.stringify(data, null, 2))
}
