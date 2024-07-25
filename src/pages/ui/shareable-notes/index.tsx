import { useLoaderData } from 'react-router-dom'

export const layout = 'shareableNote'

export default function ShareableNotes() {
	const note = useLoaderData()

	return <p>Note</p>
}