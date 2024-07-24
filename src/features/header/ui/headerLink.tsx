import { useLocation } from 'react-router-dom'

export const HeaderLink = (props: React.HTMLProps<HTMLAnchorElement>) => {
	const { pathname } = useLocation()
	const isActive = props.href === pathname || props.href === pathname.replace(/\/$/, '')
	console.log(isActive)

	return (
		<a href={props.href} {...props} data-active={isActive} aria-label={props['aria-label'] || props.title}>
			{props.children}
		</a>
	)
}