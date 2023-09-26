import { ComponentProps } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

const root = tv({
  base: 'text-zinc-900 placeholder-zinc-600 border-0 bg-transparent p-0 flex-1 w-full outline-none',
  variants: {},
  defaultVariants: {},
})

interface ControlProps
  extends ComponentProps<'input'>,
    VariantProps<typeof root> {}

export function Control({ className, ...rest }: ControlProps) {
  return <input className={root({ className })} {...rest} />
}
