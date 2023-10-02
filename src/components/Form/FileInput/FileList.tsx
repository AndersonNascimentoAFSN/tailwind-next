'use client'

import { FC } from 'react'
import { useAutoAnimate } from '@formkit/auto-animate/react'

import { useFileInput } from './Root'
import { FileItem } from './FileItem'

export const FileList: FC = () => {
  const { files } = useFileInput()
  const [parent] = useAutoAnimate()

  return (
    <div className="space-y-3" ref={parent}>
      {files.map((file) => (
        <FileItem
          key={file.name}
          name={file.name}
          size={file.size}
          state="error"
          progress={50}
        />
      ))}
    </div>
  )
}
