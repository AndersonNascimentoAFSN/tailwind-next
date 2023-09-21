import {
  HomeIcon,
  ChartBarIcon,
  Square2StackIcon,
  DocumentCheckIcon,
  FlagIcon,
  UsersIcon,
} from '@heroicons/react/24/outline'
import { MainNavigationItem } from './MainNavigationItem'

export function MainNavigation() {
  return (
    <nav className="space-y-0.5">
      <MainNavigationItem
        title="Home"
        icon={HomeIcon}
        navItemProps={{ href: '/' }}
      />
      <MainNavigationItem
        title="Dashboard"
        icon={ChartBarIcon}
        navItemProps={{ href: '#' }}
      />
      <MainNavigationItem
        title="Projects"
        icon={Square2StackIcon}
        navItemProps={{ href: '#' }}
      />
      <MainNavigationItem
        title="Tasks"
        icon={DocumentCheckIcon}
        navItemProps={{ href: '#' }}
      />
      <MainNavigationItem
        title="Reporting"
        icon={FlagIcon}
        navItemProps={{ href: '#' }}
      />
      <MainNavigationItem
        title="Users"
        icon={UsersIcon}
        navItemProps={{ href: '#' }}
      />
    </nav>
  )
}
