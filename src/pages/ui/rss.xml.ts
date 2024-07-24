import { SITE_TITLE } from '@shared/lib/constants'

export async function get(context: { site: string | URL }): Promise<{ body: string }> {
	const posts = []
	const items = [] as RSSFeedItem[]
	for (const post of posts) {
		items.push({
			title: post.data.title,
			description: post.data.summary,
			pubDate: post.data.publishedAt,
			link: `/blog/${post.slug}/`,
			content: post.body
		})
	}

	return await rss({
		title: SITE_TITLE,
		description: 'RSS feed for my blog',
		site: context.site,
		items
	})
}
