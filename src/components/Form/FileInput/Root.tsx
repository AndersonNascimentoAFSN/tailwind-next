'use client'

import {
  ComponentProps,
  FC,
  createContext,
  useContext,
  useId,
  useState,
} from 'react'
import { tv } from 'tailwind-variants'

const root = tv({
  base: 'flex items-start gap-5',
})

type IFileInputContext = {
  id: string
  files: File[]
  onFilesSelected: (files: File[]) => void
}

type IRootProps = ComponentProps<'div'>

const FileInputContext = createContext<IFileInputContext>(
  {} as IFileInputContext,
)

export const Root: FC<IRootProps> = ({ className, ...props }) => {
  const id = useId()
  const [files, setFiles] = useState<File[]>([])

  return (
    <FileInputContext.Provider value={{ id, files, onFilesSelected: setFiles }}>
      <div className={root({ className })} {...props} />
    </FileInputContext.Provider>
  )
}

export const useFileInput = () => useContext(FileInputContext)
