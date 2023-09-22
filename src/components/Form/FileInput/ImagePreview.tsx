'use client'

import { FC, useMemo } from 'react'
import Image from 'next/image'
import { User } from 'lucide-react'
import { useFileInput } from './Root'

export const ImagePreview: FC = () => {
  const { files } = useFileInput()

  const previewURL = useMemo(() => {
    if (files.length === 0) {
      return null
    }

    return URL.createObjectURL(files[0])
  }, [files])

  if (previewURL === null) {
    return (
      <div className="bg-violet-50 flex h-16 w-16 items-center justify-center rounded-full">
        <User className="w-8 h-8 text-violet-500" />
      </div>
    )
  } else {
    return (
      <Image
        src={previewURL}
        className="rounded-full object-cover"
        alt=""
        width={64}
        height={64}
        quality={100}
        priority
      />
    )
  }
}
