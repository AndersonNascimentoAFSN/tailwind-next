import { ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
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

      <button type="button" className="ml-auto p-2 hover:bg-zinc-50 rounded-md">
        <ArrowRightOnRectangleIcon className="w-5 h-5 text-zinc-500" />
      </button>
    </div>
  )
}
