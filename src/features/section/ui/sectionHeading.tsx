export const sectionHeading = (props: { title: string }) => (
	<a href={`#${props.title}`} className='flex items-center justify-center w-full h-full py-8' id={props.title}>
		<span className='w-full h-[1px] bg-stone-700' />
		<h2 className='w-fit px-6 text-xl font-medium flex-wrap sm:whitespace-nowrap'>{props.title}</h2>
		<span className='w-full h-[1px] bg-stone-700' />
	</a>
)