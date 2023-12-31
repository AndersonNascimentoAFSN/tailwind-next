import { ComponentProps } from 'react'
import { tv } from 'tailwind-variants'

const textarea = tv({
  base: 'min-h-[120px] resize-y w-full rounded-lg border border-zinc-300 px-3 py-2 shadow-sm outline-none focus:border-violet-300 focus:ring-4 focus:ring-violet-100',
  variants: {},
  defaultVariants: {},
})

type TextAreaProps = ComponentProps<'textarea'>

export function TextArea({ className, ...rest }: TextAreaProps) {
  return <textarea className={textarea({ className })} {...rest} />
}
