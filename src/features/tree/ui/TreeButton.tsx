import type { ButtonHTMLAttributes, ReactNode } from 'react'

type TreeButtonProps = {
	children?: ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>

export default function TreeButton(props: TreeButtonProps): ReactNode {
	return (
		<button id='toggle' aria-label='Toggle' name='Toggle' className='flex items-center w-full' {...props}>
			{props.children}
		</button>
	)
}