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
          src={originalTweet.user.avatarUrl}
          alt={originalTweet.user.id}
          className="w-10 h-10 mr-3 rounded-full" 
        />

        <p className="flex text-sm">
          <span className="truncate">
            <span className="font-bold">
              {notification.user.name}{" "}
            </span>
          </span>
        </p>
            
      </div>
    </div>
  )
}

export default Notify