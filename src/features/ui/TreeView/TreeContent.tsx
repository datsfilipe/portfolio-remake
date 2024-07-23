import type { ReactNode } from 'react'

interface TreeContentProps {
  value: Map<string, unknown> | object
  open: boolean
  children?: ReactNode
}

export default function TreeContent ({
  value,
  open,
  children
}: TreeContentProps): ReactNode {
  if (value instanceof Map) {
    return (
      <ul className='flex flex-col'>
        {open && children}
      </ul>
    )
  }

  return null
}