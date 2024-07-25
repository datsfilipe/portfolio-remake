import type { ReactElement, ReactNode } from 'react'
import type { ITreeView, NoteData, NoteNode } from '@features/tree/model/note'
import { useEffect, useMemo, useState } from 'react'
import { Tree } from '.'

import { generateTree } from '@features/tree/lib/generateTree'
import { toggleNode } from '@features/tree/lib/toggleNode'
import { sortTree } from '@features/tree/lib/sortTree'

interface TreeRootProps {
	notes: Array<{ slug: string; data: NoteData }>
	pathname: string
}

interface RecursiveRenderProps {
	tree: ITreeView<NoteNode>
	pathname: string
}

const RecursiveRender = (props: RecursiveRenderProps): ReactNode => {
	const retrieveOpenedNodes = useMemo(() => props.pathname.split('/').filter(Boolean), [props.pathname])
	const [openNodes, setOpenNodes] = useState<Set<string>>(new Set())
	const sortedTree = useMemo(() => sortTree(props.tree), [props.tree])

	useEffect(() => {
		for (const key of retrieveOpenedNodes) {
			if (props.tree.has(key)) {
				setOpenNodes(prev => new Set(prev).add(key))
			}
		}
	}, [retrieveOpenedNodes, props.tree])

	return (
		<>
			{sortedTree.map(([key, value]) => {
				const isMap = value instanceof Map
				const slug = isMap ? undefined : value.slug

				return (
					<Tree.Item key={key}>
						<Tree.Node type={isMap ? 'folder' : 'file'} pathname={props.pathname} slug={slug}>
							<Tree.Button
								onClick={() => {
									setOpenNodes(prev => toggleNode(prev, key))
								}}
							>
								{isMap && <Tree.Icon open={openNodes.has(key)} />}
								<span className='text-left'>{isMap ? key : value.title}</span>
							</Tree.Button>
						</Tree.Node>
						{isMap && openNodes.has(key) && (
							<Tree.List>
								<RecursiveRender tree={value} pathname={props.pathname} />
							</Tree.List>
						)}
					</Tree.Item>
				)
			})}
		</>
	)
}

export default function TreeRoot({ notes, pathname }: TreeRootProps): ReactElement {
	const [tree, setTree] = useState(generateTree(notes))

	useEffect(() => {
		const updatedTree = generateTree(notes)
		if (JSON.stringify(updatedTree) !== JSON.stringify(tree)) {
			setTree(updatedTree)
		}
	}, [notes, tree])

	return (
		<Tree.List type='main'>
			<RecursiveRender tree={tree} pathname={pathname} />
		</Tree.List>
	)
}