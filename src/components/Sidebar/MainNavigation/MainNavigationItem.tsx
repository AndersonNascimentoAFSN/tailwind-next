import { ElementType } from 'react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { NavItem } from '@/components/navItem'
import { NavItemRootProps } from '@/components/navItem/navItemRoot'

interface MainNavigationItemProps {
  title: string
  icon: ElementType
  navItemProps: NavItemRootProps
}

export function MainNavigationItem({
  title,
  icon: Icon,
  navItemProps,
}: MainNavigationItemProps) {
  return (
    <NavItem.Root {...navItemProps}>
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
