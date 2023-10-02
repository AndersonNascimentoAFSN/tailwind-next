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
import { Input } from '../Form/Input'

export function Sidebar() {
  return (
    <>
      <aside className="border-b py-4 border-zinc-200 px-2 flex flex-col gap-6 fixed left-0 top-0 right-0 bottom-0 z-20 bg-white lg:right-auto lg:w-80 lg:border-r lg:py-8 lg:relative">
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
