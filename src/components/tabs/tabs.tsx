'use client'

import { useState } from 'react'
import * as T from '@radix-ui/react-tabs'
import * as ScrollArea from '@radix-ui/react-scroll-area'
import { motion } from 'framer-motion'

import type { TabItem } from './types'

interface TabsProps {
  tabs: TabItem[]
}

export function Tabs({ tabs }: TabsProps) {
  const [currentTab, setCurrentTab] = useState(tabs[0].value)

  return (
    <T.Root value={currentTab} onValueChange={setCurrentTab}>
      <ScrollArea.Root className="w-full" type="scroll">
        <ScrollArea.Viewport className="w-full overflow-x-scroll">
          <T.List className="mt-6 w-full border-b border-zinc-200 flex items-center gap-4">
            {tabs.map((tabItem: TabItem) => (
              <T.Trigger
                key={tabItem.value}
                value={tabItem.value}
                className="px-1 pb-4 text-sm font-medium text-zinc-500 hover:text-violet-700 data-[state=active]:text-violet-700 relative group"
              >
                <span className="whitespace-nowrap group-focus-visible:ring-2 group-focus-visible:ring-violet-100 rounded group-focus-visible:ring-offset-4">
                  {tabItem.title}
                </span>

                {currentTab === tabItem.value && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-px left-0 right-0 h-0.5 bg-violet-700"
                  />
                )}
              </T.Trigger>
            ))}
          </T.List>
        </ScrollArea.Viewport>

        <ScrollArea.Scrollbar
          orientation="horizontal"
          className="flex h-0.5 translate-y-1.5 touch-none select-none flex-col bg-zinc-100"
        >
          <ScrollArea.Thumb className="relative flex-1 rounded-lg bg-zinc-300" />
        </ScrollArea.Scrollbar>
      </ScrollArea.Root>

      {tabs.map((tabItem: TabItem) => (
        <T.Content key={tabItem.value} value={tabItem.value}>
          {tabItem.content}
        </T.Content>
      ))}
    </T.Root>
  )
}
