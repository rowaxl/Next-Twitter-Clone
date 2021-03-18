import { IMessage } from '../interfaces'

interface IMessageProps {
  message: IMessage 
}

const Message = ({ message }: IMessageProps) => {
  const renderDate = () => {
    const date = new Date(message.date)
    const now = Date.now()

    if (message.date < (now - 3600000)) {
      return date.toLocaleDateString('en-US', {
        month: 'short',
        day: '2-digit',
        year: 'numeric'
      })
    }

    console.log(now - message.date)

    return `${Math.floor((now - message.date) / 60000)}m`
  }

  return (
    <div className="w-full px-4 py-4 bg-gray-200 dark:bg-black border-b border-gray-400 dark:border-gray-600">
      <div className="flex flex-row items-center justify-between">
        <img
          src={message.user.avatarURL}
          alt={message.user.id}
          className="w-10 h-10 mx-2 rounded-full" 
        />

        <div className="flex flex-col px-2">
          <p className="flex text-sm dark:text-white mb-2">
            <span className="truncate">
              <span className="font-bold">
                {message.user.name}
              </span>
              <span>
                {" @ "}{message.user.id}
              </span>
            </span>
          </p>

          <span className="text-gray-700 dark:text-gray-500">
            {message.user.name}{" : "}{message.text}
          </span>
        </div>

        <div className="text-gray-700 dark:text-gray-300 mx-auto whitespace-nowrap">
          {renderDate()}
        </div>
      </div>
    </div>
  )
}

export default Message