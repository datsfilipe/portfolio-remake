export const Footer = () => {
	const today = new Date()

	return (
		<footer className='flex w-full p-4 mt-4 pb-14 text-stone-400'>
			<span className='mx-auto'>&copy; {today.getFullYear()} Filipe Lima. All rights reserved.</span>
		</footer>
	)
}