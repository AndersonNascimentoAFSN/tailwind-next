import { DetailedHTMLProps, InputHTMLAttributes } from 'react'
// import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'

type InputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

const BASE_INPUT_FIELD_CLASSES =
  'flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600'

export function Field(rest: InputProps) {
  return (
    <>
      <input
        {...rest}
        className={`${BASE_INPUT_FIELD_CLASSES} ${rest.className}`}
      />
    </>
  )
}

Field.displayName = 'Input.Field'
