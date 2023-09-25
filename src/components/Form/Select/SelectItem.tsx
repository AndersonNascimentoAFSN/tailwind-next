'use client'

import { FC, ReactNode } from 'react'
import * as SelectPrimitive from '@radix-ui/react-select'
import { Check } from 'lucide-react'

export interface SelectItemProps extends SelectPrimitive.SelectItemProps {
  children: ReactNode
}

export const SelectItem: FC<SelectItemProps> = ({
  children,
  ...props
}: SelectItemProps) => {
  return (
    <SelectPrimitive.Item
      className="flex items-center justify-between gap-2 px-3 py-2.5 outline-none data-[highlighted]:bg-zinc-50"
      {...props}
    >
      <div>
        <SelectPrimitive.ItemText className="text-black">
          {children}
        </SelectPrimitive.ItemText>
      </div>
      <SelectPrimitive.ItemIndicator>
        <Check className="h-4 w-4 text-violet-500" />
      </SelectPrimitive.ItemIndicator>
    </SelectPrimitive.Item>
  )
}
