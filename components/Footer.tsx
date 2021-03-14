import HomeIcon from './HomeIcon'
import SearchIcon from './SearchIcon'
import BellIcon from './BellIcon'
import MailboxIcon from './MailboxIcon'

import Link, { LinkChildrenProp } from './Link'

const Footer = () => {
  return (
    <footer className="flex border-t border-gray-200 dark:bg-black">
      <Link
        href="/"
        className="flex items-center justify-center w-1/4 text-center py-4"
      >
        {
          ({ isActive }: LinkChildrenProp) =>
            <HomeIcon className="w-7 h-7" isActive={isActive} />
        }
      </Link>
      <Link
        href="/explore"
        className="flex items-center justify-center w-1/4 text-center py-4"
      >
        {
          ({ isActive }: LinkChildrenProp) => 
            <SearchIcon className="w-7 h-7" isActive={isActive} />
        }
      </Link>
      <Link
        href="/notifications"
        className="flex items-center justify-center w-1/4 text-center py-4"
      >
        {
          ({ isActive }: LinkChildrenProp) => 
            <BellIcon className="w-7 h-7" isActive={isActive} />
        }
      </Link>
      <Link
        href="/messages"
        className="flex items-center justify-center w-1/4 text-center py-4"
      >
        {
          ({ isActive }: LinkChildrenProp) => 
            <MailboxIcon className="w-7 h-7" isActive={isActive} />
        }
      </Link>
    </footer>
  )
}

export default Footer