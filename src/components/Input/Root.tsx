import { ComponentProps } from 'react'
import { tv } from 'tailwind-variants'

const root = tv({
  base: 'rounded-lg border border-zinc-300 px-3 py-2 shadow-sm flex items-center gap-2 focus-within:border-violet-300 focus-within:ring-4 focus-within:ring-violet-100',
  variants: {},
  defaultVariants: {},
})

type RootProps = ComponentProps<'input'>

export function Root({ className, ...rest }: RootProps) {
  return <div className={root({ className })} {...rest} />
}
