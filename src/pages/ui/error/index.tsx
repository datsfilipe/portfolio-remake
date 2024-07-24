import { useRouteError } from 'react-router-dom'

export default function ErrorPage() {
	const error = useRouteError()

	const getErrorMessage = () => {
		const typedError = error as { statusText?: string; message?: string }
		return typedError.statusText || typedError.message
	}

	return (
		<div className='flex flex-col items-center justify-center min-h-[75dvh]'>
			<h1 className='text-5xl font-bold mb-14 px-4 py-2 bg-blue-600 w-fit'>Oops!</h1>
			<p className='text-md mb-4 text-justify'>Something went wrong.</p>
			<i className='text-md text-justify text-gray-400'>{getErrorMessage()}</i>
		</div>
	)
}