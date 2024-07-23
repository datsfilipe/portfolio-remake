import type { NoteData, NoteNode, MapOrObject, ITreeView } from './types'

export const generateTree = (notes: Array<{ slug: string, data: NoteData }>): ITreeView<NoteNode> => {
  const newTree = new Map()

  for (const note of notes) {
    const parts = note.slug.split('/')
    let currentMap = newTree

    for (let i = 0; i < parts.length; i++) {
      const part = parts[i] as string

      if (!currentMap.has(part)) {
        if (i === parts.length - 1) {
          const noteNode: NoteNode = { slug: note.slug, title: note.data.title }
          currentMap.set(part, noteNode)
        } else {
          currentMap.set(part, new Map())
        }
      }

      currentMap = currentMap.get(part) as Map<string, MapOrObject<NoteNode>>
    }
  }

  return newTree
}