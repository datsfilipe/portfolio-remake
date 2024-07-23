import type { ReactNode } from 'react'
import {
  PiCaretRight,
  PiCaretDown
} from 'react-icons/pi'

export default function CollapseIcon (props: { open: boolean }): ReactNode {
  return (
    <span className="mr-1 text-stone-600">
      {props.open
        ? <PiCaretDown />
        : <PiCaretRight />
      }
    </span>
  )
}