import { ElementType } from 'react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { NavItem } from '@/components/nav-item'

interface MainNavigationItemProps {
  title: string
  icon: ElementType
}

export function MainNavigationItem({
  title,
  icon: Icon,
}: MainNavigationItemProps) {
  return (
    <NavItem.Root>
      <NavItem.Icon
        icon={Icon}
        className="h-5 w-5 text-zinc-500 group-hover:text-violet-500"
      />
      <NavItem.Title title={title} />
      <NavItem.Icon
        icon={ChevronDownIcon}
        className="ml-auto h-5 w-5 text-zinc-400 group-hover:text-violet-500"
      />
    </NavItem.Root>
  )
}
