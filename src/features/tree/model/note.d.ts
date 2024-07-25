import type { z } from 'zod'
import type { Note } from '@shared/lib/schemas'

export type NoteData = Note
export interface NoteNode {
	slug: string
	title: string
}

export type MapOrObject<T> = Map<string, MapOrObject<T>> | T
export interface ITreeView<T> extends Map<string, MapOrObject<T>> {}
