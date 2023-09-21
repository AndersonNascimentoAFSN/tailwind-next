import { Mail } from 'lucide-react'

import { Button } from '../Button'
import { Input } from '../Input'

export function PersonalInfo() {
  return (
    <div className="mt-6 flex flex-col">
      <div className="flex items-center justify-between border-b border-zinc-200 pb-5">
        <div className="space-y-1">
          <h2 className="text-lg font-medium text-zinc-900">Personal info</h2>
          <span className="text-sm text-zinc-500">
            Update your photo and personal details here.
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Button type="button" variant="secondary">
            Cancel
          </Button>
          <Button type="submit" form="settings" variant="primary">
            Save
          </Button>
        </div>
      </div>

      <form
        id="settings"
        className="mt-6 flex flex-col w-full gap-5 divide-y divide-zinc-200 space-y-2"
      >
        <div className="grid gap-3 grid-cols-form">
          <label
            htmlFor="firstName"
            className="text-sm font-medium text-zinc-700"
          >
            Name
          </label>
          <div className="grid gap-6 grid-cols-2">
            <Input.Root>
              <Input.Control id="firstName" defaultValue="Anderson" />
            </Input.Root>

            <Input.Root>
              <Input.Control defaultValue="Nascimento" />
            </Input.Root>
          </div>
        </div>

        <div className="grid gap-3 grid-cols-form pt-5">
          <label htmlFor="bio" className="text-sm font-medium text-zinc-700">
            Email address
          </label>
          <Input.Root>
            <Input.Prefix>
              <Mail className="h-5 w-5 text-zinc-500" />
            </Input.Prefix>
            <Input.Control
              id="email"
              defaultValue="anderson.nascimento@meta.com.br"
              type="email"
            />
          </Input.Root>
        </div>

        <div className="grid gap-3 grid-cols-form pt-5">
          <label htmlFor="email" className="text-sm font-medium text-zinc-700">
            Your photo
            <p className="text-sm font-normal text-zinc-500 mt-0.5">
              This will be displayed on your profile.
            </p>
          </label>
          <div></div>
        </div>

        <div className="grid gap-3 grid-cols-form pt-5">
          <label htmlFor="role" className="text-sm font-medium text-zinc-700">
            Role
          </label>
          <Input.Root>
            <Input.Control id="role" defaultValue="Web Develop" />
          </Input.Root>
        </div>

        <div className="grid gap-3 grid-cols-form pt-5">
          <label
            htmlFor="timezone"
            className="text-sm font-medium text-zinc-700"
          >
            Timezone
          </label>
          <div></div>
        </div>

        <div className="grid gap-3 grid-cols-form pt-5">
          <label htmlFor="email" className="text-sm font-medium text-zinc-700">
            Country
          </label>
          <div></div>
        </div>

        <div className="grid gap-3 grid-cols-form pt-5">
          <label htmlFor="bio" className="text-sm font-medium text-zinc-700">
            Bio
            <p className="text-sm font-normal text-zinc-500 mt-0.5">
              Write a short introduction.
            </p>
          </label>
          <div></div>
        </div>

        <div className="grid gap-3 grid-cols-form pt-5">
          <label htmlFor="bio" className="text-sm font-medium text-zinc-700">
            Portfolio projects
            <p className="text-sm font-normal text-zinc-500 mt-0.5">
              Share a few snippets of your work.
            </p>
          </label>
          <div></div>
        </div>

        <div className="pt-5 flex gap-3 justify-end items-center">
          <Button type="button" variant="secondary">
            Cancel
          </Button>
          <Button type="submit" variant="primary">
            Save
          </Button>
        </div>
      </form>
    </div>
  )
}
