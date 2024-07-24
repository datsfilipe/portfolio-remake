export const Divider = (props: { direction?: 'left' | 'right' }) => (
	<hr className={`w-[50%] my-8 border-stone-700 ${props.direction === 'left' ? 'ml-auto' : 'mr-auto'}`} />
)