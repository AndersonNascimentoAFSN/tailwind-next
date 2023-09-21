import { ComponentProps } from 'react'
import Link from 'next/link'

export type NavItemRootProps = ComponentProps<typeof Link>

export function NavItemRoot({ href, ...props }: NavItemRootProps) {
  return (
    <Link
      href={href}
      className="flex items-center gap-3 rounded px-3 py-2 hover:bg-violet-50 group"
      {...props}
    />
  )
}
