import type { ReactNode } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

const node = tv({
	base: 'flex flex-col',
	variants: {
		type: {
			folder: 'pl-4 py-1',
			file: 'pl-[1.5rem] ml-[0.45rem] py-1 border-l'
		},
		active: {
			never: '',
			false: 'sm:border-stone-800 hover:border-blue-600 hover:text-blue-600 border-stone-700',
			true: 'border-blue-600 text-blue-600'
		}
	}
})

type TreeNodeProps = {
	children?: ReactNode
	pathname?: string | undefined
	slug?: string | undefined
} & VariantProps<typeof node>

export default function Node(props: TreeNodeProps): ReactNode {
	if (props.type === undefined) return null

	if (props.type !== 'folder') {
		const href = `/shareable-notes/${props.slug ?? ''}`

		return (
			<a
				className={node({
					type: props.type,
					active: (props.pathname ?? '').replace(/\/$/, '') === href
				})}
				href={href}
				aria-label={props.slug}
				title={props.slug}
			>
				{props.children}
			</a>
		)
	}

	return (
		<div
			className={node({
				type: props.type,
				active: 'never'
			})}
		>
			{props.children}
		</div>
	)
}