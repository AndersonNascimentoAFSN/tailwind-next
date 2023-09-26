import { ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import { Button } from '../Button'
export function Profile() {
  return (
    <div className="flex items-center gap-3">
      <Image
        src="https://github.com/andersonnascimentoafsn.png"
        className="rounded-full"
        alt=""
        width={40}
        height={40}
        quality={100}
        priority
      />

      <div className="flex flex-1 flex-col">
        <p className="text-sm font-semibold text-zinc-700">
          Anderson Nascimento
        </p>
        <p className="text-sm text-zinc-500 truncate w-[200px]">
          anderson.nascimento@meta.com.br
        </p>
      </div>

      <Button type="button" variant="ghost">
        <ArrowRightOnRectangleIcon className="w-5 h-5 text-zinc-500" />
      </Button>
    </div>
  )
}
