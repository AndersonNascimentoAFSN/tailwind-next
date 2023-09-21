'use client'

import { ComponentProps, FC, createContext, useContext, useId } from 'react'
import { tv } from 'tailwind-variants'

const root = tv({
  base: 'flex items-start gap-5',
})

type IFileInputContext = {
  id: string
}

type IRootProps = ComponentProps<'div'>

const FileInputContext = createContext<Partial<IFileInputContext>>({})

export const Root: FC<IRootProps> = ({ className, ...props }) => {
  const id = useId()

  return (
    <FileInputContext.Provider value={{ id }}>
      <div className={root({ className })} {...props} />
    </FileInputContext.Provider>
  )
}

export const useFileInput = () => useContext(FileInputContext)
