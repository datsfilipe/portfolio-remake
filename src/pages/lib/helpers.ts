export const makePlainText = (stack: string[]): string =>
	stack
		.map((item: string) => {
			if (item === stack[stack.length - 1]) {
				return item
			}

			return `${item}, `
		})
		.join('')