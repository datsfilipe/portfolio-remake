import type { ReactNode } from 'react'

interface TreeContentProps {
	value: Map<string, unknown> | object
	open: boolean
	children?: ReactNode
}

export default function TreeContent(props: TreeContentProps): ReactNode {
	if (props.value instanceof Map) {
		return <ul className='flex flex-col'>{props.open && props.children}</ul>
	}

	return null
}