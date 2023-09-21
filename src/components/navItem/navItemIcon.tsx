import { ElementType, HTMLAttributes } from 'react'

interface NavItemIconProps extends HTMLAttributes<HTMLSpanElement> {
  icon: ElementType
  className: string
}

export function NavItemIcon({
  icon: Icon,
  className = 'h-5 w-5 text-zinc-500',
}: NavItemIconProps) {
  return (
    <>
      <Icon className={className} />
    </>
  )
}
