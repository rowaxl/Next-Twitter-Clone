import { INotify, ITweet } from '../interfaces'

interface INotifyProps {
  originalTweet: ITweet
  notification: INotify 
}

const Notify = ({ originalTweet, notification }: INotifyProps) => {

  return (
    <div>
      <div>
        <img
          src={notification.from.avatarURL}
          alt={notification.from.id}
          className="w-10 h-10 mr-3 rounded-full" 
        />

        <p className="flex text-sm">
          <span className="truncate">
            <span className="font-bold">
              {notification.from.name}{" "}{`${notification.category}ed your tweet`}
            </span>
          </span>
        </p>
        

        <span>
          {originalTweet.text}
        </span>
      </div>
    </div>
  )
}

export default Notify