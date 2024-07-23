import type { ReactNode } from 'react'
import {
  PiCaretRight,
  PiCaretDown
} from 'react-icons/pi'

export default function TreeIcon ({
  open
}: { open: boolean }): ReactNode {
  return (
    <span className="mr-1 text-stone-600">
      {open
        ? <PiCaretDown />
        : <PiCaretRight />
      }
    </span>
  )
}