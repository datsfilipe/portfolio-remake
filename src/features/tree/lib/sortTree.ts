import type { NoteNode, ITreeView } from '@features/tree/model/note'

export const sortTree = (tree: ITreeView<NoteNode>): Array<[string, NoteNode | ITreeView<NoteNode>]> => {
	const sortedEntries = Array.from(tree.entries()).sort(([keyA, valueA], [keyB, valueB]) => {
		const isFolderA = valueA instanceof Map
		const isFolderB = valueB instanceof Map

		if (isFolderA && !isFolderB) {
			return -1
		}

		if (!isFolderA && isFolderB) {
			return 1
		}

		return keyA.localeCompare(keyB)
	})

	return sortedEntries
}
