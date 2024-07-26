import fs from 'node:fs'
import path from 'node:path'

export const setImages = (folderPath: string) => {
	const files = fs.readdirSync(folderPath)
	const images: string[] = []

	for (const file of files) {
		const filePath = path.join(folderPath, file)
		const stats = fs.statSync(filePath)

		if (stats.isDirectory()) {
			const nestedImages = setImages(filePath)
			images.push(...nestedImages)
		} else if (/\.(md|mdx)$/.test(file.toLowerCase())) {
			const fileContent = fs.readFileSync(filePath, 'utf-8')
			const newContent = fileContent.replace(/\!\[([^\]]*)\]\(\.\/([^)]*)\)/g, '![$1](/$2)')

			if (newContent !== fileContent) {
				fs.writeFileSync(filePath, newContent)
				console.log('Changes applied successfully.')
			}
		} else if (/\.(svg|png|jpg)$/.test(file.toLowerCase())) {
			images.push(filePath)

			const publicPath = path.resolve(__dirname, '../../../public/assets')
			if (!fs.existsSync(publicPath)) {
				fs.mkdirSync(publicPath, { recursive: true })
			}

			const publicFilePath = path.join(publicPath, file)
			const filePathFull = path.resolve(__dirname, '../..', filePath)

			if (!fs.existsSync(publicFilePath)) {
				fs.copyFileSync(filePathFull, publicFilePath)
			}
		}
	}

	return images
}

const folderPath = path.resolve(__dirname, '../assets/shareable-notes')
setImages(folderPath)