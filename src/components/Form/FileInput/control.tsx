'use client'

import { ChangeEvent, ComponentProps, FC } from 'react'
import { useFileInput } from './Root'

type IControlProps = ComponentProps<'input'>

export const Control: FC<IControlProps> = (props) => {
  const { onFilesSelected } = useFileInput()

  function handleFilesSelect(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files?.length) {
      return
    }

    const files = Array.from(event.target.files)

    onFilesSelected(files)
  }

  return (
    <input
      type="file"
      className="sr-only"
      onChange={handleFilesSelect}
      {...props}
    />
  )
}
