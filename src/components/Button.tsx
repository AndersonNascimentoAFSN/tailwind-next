import { ComponentProps } from 'react'
import { CheckCircleIcon } from '@heroicons/react/20/solid'
import { twMerge } from 'tailwind-merge'
import { tv, VariantProps } from 'tailwind-variants'

const button = tv({
  base: 'bg-zinc-50 font-medium rounded text-sm text-zinc-900 hover:bg-zinc-200',
  variants: {
    size: {
      default: 'h-10  px-4',
      sm: 'h-8  px-3',
      xs: 'h-6  px-2 text-sx',
    },
    success: {
      true: 'bg-emerald-400 hover:bg-emerald-600',
    },
  },
  defaultVariants: {
    size: 'default',
    success: false,
  },
})

export interface ButtonProps
  extends ComponentProps<'button'>,
    VariantProps<typeof button> {}

// tailwind variant
export function Button({ size, success, className, ...props }: ButtonProps) {
  return (
    <Button className={button({ size, success, className })} {...props}>
      {success ? <CheckCircleIcon className="h-4 w-4" /> : props.children}
    </Button>
  )
}

// data-success e twMerge
// export function Button({ success = false, className, ...props }: ButtonProps) {
//   return (
//     <Button
//       data-success={success}
//       className={
//         (twMerge(
//           'bg-zinc-50 font-medium rounded px-4 py-1.5 text-sm text-zinc-900 hover:bg-zinc-200 data-[success=true]:bg-emerald-400 data-[success=true]:hover:bg-emerald-600',
//         ),
//         className)
//       }
//       {...props}
//     >
//       {success ? <CheckCircleIcon className="h-4 w-4" /> : props.children}
//     </Button>
//   )
// }

// Interpolação de string
// export function Button({ success = false, ...props }: ButtonProps) {
//   return (
//     <Button
//       className={`bg-zinc-50 font-medium rounded px-4 py-1.5 text-sm text-zinc-900 hover:bg-zinc-200 ${
//         success ? 'bg-emerald-400' : 'bg-zinc-50'
//       }`}
//       {...props}
//     />
//   )
// }
