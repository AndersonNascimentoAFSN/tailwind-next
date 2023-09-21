import { PersonalInfo } from '../PersonalInfo'
import { Tabs } from '../tabs'
import type { TabItem } from '../tabs'

export function SettingsTabs() {
  const tabsList: TabItem[] = [
    {
      content: <PersonalInfo />,
      title: 'My details',
      value: 'tab1',
    },
    {
      content: <></>,
      title: 'Profile',
      value: 'tab2',
    },
    {
      content: <></>,
      title: 'Password',
      value: 'tab3',
    },
    {
      content: <></>,
      title: 'Team',
      value: 'tab4',
    },
    {
      content: <></>,
      title: 'Plan',
      value: 'tab5',
    },
    {
      content: <></>,
      title: 'Billing',
      value: 'tab6',
    },
    {
      content: <></>,
      title: 'Email',
      value: 'tab7',
    },
    {
      content: <></>,
      title: 'Notification',
      value: 'tab8',
    },
    {
      content: <></>,
      title: 'Integrations',
      value: 'tab9',
    },
    {
      content: <></>,
      title: 'Api',
      value: 'tab10',
    },
  ]
  return <Tabs tabs={tabsList} />
}
