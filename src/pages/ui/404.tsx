export default function NotFound() {
	return (
		<>
			<h1 className='text-3xl font-bold mb-8 mt-8 px-4 py-2 bg-blue-600 w-fit'>404 - Page not found!</h1>
			<p className='text-lg mb-8 text-justify' />
			<div className='w-full justify-center flex py-10'>
				<img src='/404.svg' alt='404' className='w-2/3' />
			</div>
		</>
	)
}