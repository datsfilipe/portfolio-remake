import type { NoteNode, ITreeView } from './types'

export const sortTree = (tree: ITreeView<NoteNode>): Array<[string, NoteNode | ITreeView<NoteNode>]> => {
  const sortedEntries = Array.from(tree.entries()).sort(([keyA, valueA], [keyB, valueB]) => {
    const isFolderA = valueA instanceof Map
    const isFolderB = valueB instanceof Map

    if (isFolderA && !isFolderB) {
      return -1
    } else if (!isFolderA && isFolderB) {
      return 1
    } else {
      return keyA.localeCompare(keyB)
    }
  })

  return sortedEntries
}