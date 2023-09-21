import { SettingsTabs } from '@/components/SettingsTabs/SettingsTabs'
import React from 'react'

export default function page() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900">Settings</h1>

      <SettingsTabs />
    </>
  )
}
