import {
  MagnifyingGlassIcon,
  LifebuoyIcon,
  Cog6ToothIcon,
} from '@heroicons/react/24/outline'

import { Logo } from './Logo'
import { MainNavigation } from './main-navigation'
import { MainNavigationItem } from './main-navigation/main-navigation-item'
import { UsedSpaceWidget } from './used-space-widget'
import { Profile } from './profile'

export function Sidebar() {
  return (
    <>
      <aside className="border-r border-zinc-200 px-2 py-8 flex flex-col gap-6">
        <Logo />

        <div className="rounded-lg border border-zinc-300 px-3 py-2 mx-1 shadow-sm flex items-center gap-2">
          <MagnifyingGlassIcon className="h-5 w-5 text-zinc-500" />

          <input
            className="text-zinc-900 placeholder-zinc-600 border-0 bg-transparent p-0 flex-1 w-full"
            placeholder="Search"
          />
        </div>

        <MainNavigation />

        <div className="mt-auto flex flex-col gap-6">
          <nav className="space-y-0.5">
            <MainNavigationItem title="Support" icon={LifebuoyIcon} />
            <MainNavigationItem title="Support" icon={Cog6ToothIcon} />
          </nav>

          <UsedSpaceWidget />

          <div className="h-px bg-zinc-200" />

          <Profile />
        </div>
      </aside>
    </>
  )
}
