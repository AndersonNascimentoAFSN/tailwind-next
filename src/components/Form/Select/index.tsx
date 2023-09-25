'use client'

import { ComponentProps, FC, ReactNode } from 'react'
import { ChevronDown } from 'lucide-react'

import * as SelectPrimitive from '@radix-ui/react-select'

export interface SelectProps extends SelectPrimitive.SelectProps {
  children: ReactNode
  placeholder: string
}

export const Select: FC<SelectProps> = ({
  placeholder,
  children,
  ...rest
}: SelectProps) => {
  return (
    <SelectPrimitive.Root {...rest}>
      <SelectPrimitive.Trigger className="flex h-11 w-full items-center justify-between gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm data-[placeholder]:text-zinc-600">
        <SelectPrimitive.Value
          placeholder={placeholder}
          className="text-black"
        />
        <SelectPrimitive.Icon>
          <ChevronDown className="h-5 w-5 text-zinc-500" />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>

      <SelectPrimitive.Portal>
        <SelectPrimitive.Content
          side="bottom"
          position="popper"
          className="z-10 rounded-lg border border-zinc-300 bg-white w-[--radix-select-trigger-width] overflow-hidden"
          sideOffset={8}
        >
          <SelectPrimitive.Viewport>{children}</SelectPrimitive.Viewport>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  )
}