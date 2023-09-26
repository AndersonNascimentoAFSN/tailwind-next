import { ComponentProps } from 'react'
import { tv } from 'tailwind-variants'

const prefix = tv({
  base: 'h-5 w-5 text-zinc-500',
  variants: {},
  defaultVariants: {},
})

type PrefixProps = ComponentProps<'div'>

export function Prefix({ className, ...rest }: PrefixProps) {
  return <div className={prefix({ className })} {...rest} />
}
