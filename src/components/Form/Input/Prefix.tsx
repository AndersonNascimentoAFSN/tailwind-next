import { ComponentProps } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

const prefix = tv({
  base: 'h-5 w-5 text-zinc-500',
  variants: {},
  defaultVariants: {},
})

interface PrefixProps
  extends ComponentProps<'div'>,
    VariantProps<typeof prefix> {}

export function Prefix({ className, ...rest }: PrefixProps) {
  return <div className={prefix({ className })} {...rest} />
}
