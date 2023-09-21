import { ElementType } from 'react'
// import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'

interface IconProps {
  icon: ElementType
  className?: string
}

const BASE_INPUT_ICON_CLASSES = 'h-5 w-5 text-zinc-500'

export function Icon({ icon: Icon, className = '' }: IconProps) {
  return (
    <>
      <Icon className={`${BASE_INPUT_ICON_CLASSES} ${className}`} />
    </>
  )
}

Icon.displayName = 'Input.Icon'
