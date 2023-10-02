'use client'

import {
  MagnifyingGlassIcon,
  LifebuoyIcon,
  Cog6ToothIcon,
} from '@heroicons/react/24/outline'

import * as Collapsible from '@radix-ui/react-collapsible'

import { Logo } from './Logo'
import { MainNavigation } from './MainNavigation'
import { MainNavigationItem } from './MainNavigation/MainNavigationItem'
import { UsedSpaceWidget } from './UsedSpaceWidget'
import { Profile } from './profile'
import { Input } from '../Form/Input'
import { Button } from '../Button'
import { Menu } from 'lucide-react'

export function Sidebar() {
  return (
    <>
      <Collapsible.Root className="fixed border-b py-4 border-zinc-200 px-2 flex flex-col gap-6 left-0 top-0 right-0 data-[state=open]:bottom-0 lg:data-[state=closed]:bottom-0 z-20 bg-white lg:right-auto lg:w-80 lg:border-r lg:py-8">
        <div className="flex items-center justify-between">
          <Logo />
          <Collapsible.Trigger asChild className="lg:hidden">
            <Button variant="ghost">
              <Menu className="h-6 w-6" />
            </Button>
          </Collapsible.Trigger>
        </div>

        <Collapsible.Content
          forceMount
          className="flex flex-1 flex-col gap-6 data-[state=closed]:hidden lg:data-[state=closed]:flex"
        >
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
        </Collapsible.Content>
      </Collapsible.Root>
    </>
  )
}
