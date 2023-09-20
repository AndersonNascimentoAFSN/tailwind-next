import { ReactNode } from 'react'

interface NavItemRootProps {
  children: ReactNode
}

export function NavItemRoot({ children }: NavItemRootProps) {
  return (
    <a
      href="#"
      className="flex items-center gap-3 rounded px-3 py-2 hover:bg-violet-50 group"
    >
      {children}
    </a>
  )
}
