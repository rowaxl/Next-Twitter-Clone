import { INotify } from '../interfaces'
import LikeIcon from './LikeIcon'
import RetweetIcon from './RetweetIcon'
import Tweet from './Tweet'

interface INotifyProps {
  notification: INotify 
}

const Notify = ({ notification }: INotifyProps) => {
  const renderMention = () => (
    <>
      <Tweet
        id={notification.tweet.id}
        text={notification.tweet.text}
        user={notification.tweet.user}
        date={notification.tweet.date}
        replied={notification.tweet.replied}
        retweeted={notification.tweet.retweeted}
        liked={notification.tweet.liked}
        mentionedTo={notification.user.id}
      />
    </>
  )

  const renderNotifications = () => (
    <div className="w-full px-4 py-2 bg-gray-200 dark:bg-black border-b border-gray-400 dark:border-gray-600">
      <div className="flex flex-row items-center my-1">
        {
          notification.category === 'like' ?
            <LikeIcon className={'w-8 h-8'} isActive={true} /> :
            <RetweetIcon  className={'w-8 h-8'} isActive={true} />
        }

        <img
          src={notification.user.avatarURL}
          alt={notification.user.id}
          className="w-10 h-10 mx-3 rounded-full" 
        />
      </div>

      <div className="flex flex-col pl-10">
        <p className="flex text-sm dark:text-white mb-2">
          <span className="truncate">
            <span className="font-bold">
              {notification.user.name}
            </span>

            {" "}{`${notification.category === 'like' ? 'Liked' : 'Retweeted'} your tweet`}
          </span>
        </p>

        <span className="text-gray-700 dark:text-gray-500">
          {notification.tweet.text}
        </span>
      </div>
    </div>
  )


  return (
    <>
      {
        notification.category === 'mention' ?
          renderMention()
          : renderNotifications()
      }
    </>
  )
}

export default Notify