import HomeIcon from './HomeIcon'
import SearchIcon from './SearchIcon'
import BellIcon from './BellIcon'
import MailboxIcon from './MailboxIcon'

import Link from './Link'

const Footer = () => {
  return (
    <footer className="flex border-t border-gray-200">
      <Link
        href="/"
        className="flex items-center justify-center w-1/4 text-center py-4"
      >
        <HomeIcon className="w-7 h-7" isActive={true} />
      </Link>
      <Link
        href="/explore"
        className="flex items-center justify-center w-1/4 text-center py-4"
      >
        <SearchIcon className="w-7 h-7" isActive={false} />
      </Link>
      <Link
        href="/notification"
        className="flex items-center justify-center w-1/4 text-center py-4"
      >
        <BellIcon className="w-7 h-7" isActive={false} />
      </Link>
      <Link
        href="/messages"
        className="flex items-center justify-center w-1/4 text-center py-4"
      >
        <MailboxIcon className="w-7 h-7" isActive={false} />
      </Link>
    </footer>
  )
}

export default Footer