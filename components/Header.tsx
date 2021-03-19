import { NotifyCategory } from '../interfaces'

interface IHeaderProps {
  route?: string
  avatarURL: string
  notifyType: NotifyCategory
  onChangeNotifyType: (type: NotifyCategory) => void
}

const Header = ({ avatarURL, route, notifyType, onChangeNotifyType }: IHeaderProps) => {
  const headerBorder = (route === 'Notifications' || route === 'Search') ? '' : 'border-b'

  const allButtonColor = () => notifyType === 'all' ? " text-blue-500 border-b-2 border-blue-500" : " text-gray-500"
  const mentionButtonColor = () => notifyType === 'mention' ? " text-blue-500 border-b-2 border-blue-500" : " text-gray-500"
  
  const handleNotifyType = (type: NotifyCategory) => {
    onChangeNotifyType(type)
  }

  return (
    <>
      <header className={"flex item-center px-4 py-3 dark:bg-black " + headerBorder}>
        <img
          className="rounded-full w-10 h-10"
          src={avatarURL}
          alt="profile-img"
        />
        <p className="ml-6 text-xl font-extrabold dark:text-white self-center">
          {route ? route : 'Home'}
        </p>

        
      </header>

      {
        route === 'Notifications' &&
        <div className="flex flex-col border-b border-gray-200 sticky">
          <div className="w-full flex dark:bg-black ">
            <p className={"w-1/2 pb-2 text-sm font-bold text-center cursor-pointer" + allButtonColor()}
              onClick={() => handleNotifyType('all')}
            >
              All
            </p>
            <p className={"w-1/2 pb-2 text-sm font-bold text-center cursor-pointer" + mentionButtonColor()}
              onClick={() => handleNotifyType('mention')}
            >
              Mentions
            </p>
          </div>
        </div>
      }

      {
        route === 'Search' &&
          <div className="w-full font-bold text-xl dark:text-white border-b border-gray-200 py-2 pl-4 dark:bg-black">
            What's happening
          </div>
      }
    </>
  )
}

export default Header
