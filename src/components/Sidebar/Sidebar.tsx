import {
  MagnifyingGlassIcon,
  LifebuoyIcon,
  Cog6ToothIcon,
} from '@heroicons/react/24/outline'

import { Logo } from './Logo'
import { MainNavigation } from './MainNavigation'
import { MainNavigationItem } from './MainNavigation/MainNavigationItem'
import { UsedSpaceWidget } from './UsedSpaceWidget'
import { Profile } from './profile'
import { Input } from '../Input'

export function Sidebar() {
  return (
    <>
      <aside className="border-r border-zinc-200 px-2 py-8 flex flex-col gap-6">
        <Logo />

        <Input.Root>
          <Input.Prefix>
            <MagnifyingGlassIcon className="h-5 w-5 text-zinc-500" />
          </Input.Prefix>
          <Input.Control placeholder="Search" />
        </Input.Root>

        <MainNavigation />

        <div className="mt-auto flex flex-col gap-6">
          <nav className="space-y-0.5">
            <MainNavigationItem
              title="Support"
              icon={LifebuoyIcon}
              navItemProps={{ href: '#' }}
            />
            <MainNavigationItem
              title="Settings"
              icon={Cog6ToothIcon}
              navItemProps={{ href: '/settings' }}
            />
          </nav>

          <UsedSpaceWidget />

          <div className="h-px bg-zinc-200" />

          <Profile />
        </div>
      </aside>
    </>
  )
}
