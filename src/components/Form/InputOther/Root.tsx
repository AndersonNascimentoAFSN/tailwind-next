import { HTMLAttributes, ReactNode } from 'react'

interface RootProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

const BASE_INPUT_ROOT_CLASSES =
  'flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm'

export function Root({ children, ...rest }: RootProps) {
  return (
    <div className={`${BASE_INPUT_ROOT_CLASSES} ${rest?.className}`}>
      {children}
    </div>
  )
}

Root.displayName = 'Input.Root'
