import {
  HomeIcon,
  ChartBarIcon,
  Square2StackIcon,
  DocumentCheckIcon,
  FlagIcon,
  UsersIcon,
} from '@heroicons/react/24/outline'
import { MainNavigationItem } from './main-navigation-item'

export function MainNavigation() {
  return (
    <nav className="space-y-0.5">
      <MainNavigationItem title="Home" icon={HomeIcon} />
      <MainNavigationItem title="Dashboard" icon={ChartBarIcon} />
      <MainNavigationItem title="Projects" icon={Square2StackIcon} />
      <MainNavigationItem title="Tasks" icon={DocumentCheckIcon} />
      <MainNavigationItem title="Reporting" icon={FlagIcon} />
      <MainNavigationItem title="Users" icon={UsersIcon} />
    </nav>
  )
}
