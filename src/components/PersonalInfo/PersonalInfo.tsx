import { Bold, Italic, Link, List, ListOrdered, Mail } from 'lucide-react'

import { Button } from '@/components//Button'
import { Input } from '@/components/Input'
import { FileInput } from '@/components/Form/FileInput'
import { Select } from '@/components/Form/Select'
import { SelectItem } from '../Form/Select/SelectItem'
import { TextArea } from '../Form/TextArea'

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
              <Mail className="h-4 w-4 text-zinc-500" />
            </Input.Prefix>
            <Input.Control
              id="bio"
              defaultValue="anderson.nascimento@meta.com.br"
              type="email"
            />
          </Input.Root>
        </div>

        <div className="grid gap-3 grid-cols-form pt-5">
          <label
            htmlFor="photo"
            className="text-sm font-medium text-zinc-700 cursor-pointer"
          >
            Your photo
            <p className="text-sm font-normal text-zinc-500 mt-0.5">
              This will be displayed on your profile.
            </p>
          </label>

          <FileInput.Root>
            <FileInput.ImagePreview />
            <FileInput.Trigger htmlFor="photo" />
            <FileInput.Control id="photo" />
          </FileInput.Root>
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
          <label htmlFor="email" className="text-sm font-medium text-zinc-700">
            Country
          </label>

          <Select placeholder="Select a country...">
            <SelectItem value="br">Brazil</SelectItem>
            <SelectItem value="us">United States</SelectItem>
          </Select>
        </div>

        <div className="grid gap-3 grid-cols-form pt-5">
          <label
            htmlFor="timezone"
            className="text-sm font-medium text-zinc-700"
          >
            Timezone
          </label>

          <Select placeholder="Select a timezone...">
            <SelectItem value="pst">
              <span className="text-zinc-900">
                Pacific Standard Time (PST){' '}
                <span className="text-zinc-500">UTC−08:00</span>
              </span>
            </SelectItem>

            <SelectItem value="akdt">
              <span className="text-zinc-900">
                Alaska Daylight Time (AKDT){' '}
                <span className="text-zinc-500">UTC−08:00</span>
              </span>
            </SelectItem>
          </Select>
        </div>

        <div className="grid gap-3 grid-cols-form pt-5">
          <label htmlFor="bio" className="text-sm font-medium text-zinc-700">
            Bio
            <p className="text-sm font-normal text-zinc-500 mt-0.5">
              Write a short introduction.
            </p>
          </label>
          <div className="space-y-3">
            <div className="grid gap-3 grid-cols-2">
              <Select placeholder="" defaultValue="normal">
                <SelectItem value="normal">Normal Text</SelectItem>
                <SelectItem value="md">Markdown</SelectItem>
              </Select>
              <div className="flex items-center gap-1">
                <Button
                  type="button"
                  variant="secondary"
                  className="border-none bg-transparent"
                >
                  <Bold className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                </Button>
                <Button
                  type="button"
                  variant="secondary"
                  className="border-none bg-transparent"
                >
                  <Italic className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                </Button>
                <Button
                  type="button"
                  variant="secondary"
                  className="border-none bg-transparent"
                >
                  <Link className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                </Button>
                <Button
                  type="button"
                  variant="secondary"
                  className="border-none bg-transparent"
                >
                  <List className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                </Button>
                <Button
                  type="button"
                  variant="secondary"
                  className="border-none bg-transparent"
                >
                  <ListOrdered
                    className="h-4 w-4 text-zinc-500"
                    strokeWidth={3}
                  />
                </Button>
              </div>
            </div>
            <TextArea
              id="bio"
              defaultValue="I'm a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow development."
              maxLength={500}
            />
          </div>
        </div>

        <div className="grid gap-3 grid-cols-form pt-5">
          <label
            htmlFor="portfolio"
            className="text-sm font-medium text-zinc-700 cursor-pointer"
          >
            Portfolio projects
            <p className="text-sm font-normal text-zinc-500 mt-0.5">
              Share a few snippets of your work.
            </p>
          </label>
          <FileInput.Root className="items-stretch flex-col gap-4">
            <FileInput.Trigger htmlFor="portfolio" />
            <FileInput.FileList />
            <FileInput.Control multiple id="portfolio" />
          </FileInput.Root>
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
