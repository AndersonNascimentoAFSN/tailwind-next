import { ComponentProps } from 'react'

type InputPrefixProps = ComponentProps<'div'>

function InputPrefix(props: InputPrefixProps) {
  return <div {...props} className="h-5 w-5 text-zinc-500"></div>
}

type InputControlProps = ComponentProps<'input'>

function InputControl(props: InputControlProps) {
  return (
    <input
      className="text-zinc-900 placeholder-zinc-600 border-0 bg-transparent p-0 flex-1 w-full"
      {...props}
    />
  )
}

type InputRootProps = ComponentProps<'input'>

function InputRoot(props: InputRootProps) {
  return (
    <div
      className="rounded-lg border border-zinc-300 px-3 py-2 mx-1 shadow-sm flex items-center gap-2"
      {...props}
    />
  )
}

export const Input = {
  Root: InputRoot,
  Control: InputControl,
  Prefix: InputPrefix,
}
