import type { z } from 'astro/zod'
import type { notesSchema } from '../../../content/config'

export type NoteData = z.infer<typeof notesSchema>
export interface NoteNode {
  slug: string
  title: string
}

export type MapOrObject<T> = Map<string, MapOrObject<T>> | T
export interface ITreeView<T> extends Map<string, MapOrObject<T>> {}