import { useLoaderData } from 'react-router-dom'

export const layout = 'shareableNote'

export default function ShareableNote() {
	const note = useLoaderData()
	return <h1>BrainNote</h1>
}