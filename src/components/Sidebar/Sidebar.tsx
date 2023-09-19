import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'

import { Logo } from './Logo'

export function Sidebar() {
  return (
    <>
      <aside className="border-r border-zinc-200 px-2 py-8 space-y-6">
        <Logo />

        <div className="rounded-lg border border-zinc-300 px-3 py-2 w-full shadow-sm flex items-center gap-2">
          <MagnifyingGlassIcon className="min-h-5 min-w-5 text-zinc-500" />

          <input
            className="flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600"
            placeholder="Search"
          />
        </div>
      </aside>
    </>
  )
}
