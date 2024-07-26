export const FormattedDate = (props: { date: Date }) => {
	return (
		<time dateTime={props.date.toISOString()}>
			{props.date.toLocaleDateString('en-us', {
				year: 'numeric',
				month: 'short',
				day: 'numeric'
			})}
		</time>
	)
}