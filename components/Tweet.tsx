import { ITweet } from '../interfaces'
import { parseISO, format } from 'date-fns'
import RetweetIcon from './RetweetIcon'
import LikeIcon from './LikeIcon'

const Tweet = ({
  text,
  date,
  user,
  replied,
  liked,
  retweeted,
}: ITweet) => {
  return (
    <div className='px-4 py-4 bg-gray-200 dark:bg-black border-b border-gray-400 dark:border-gray-600'>
      <div className='flex'>
        <img
          src={user.avatarURL}
          alt={user.id}
          className="w-10 h-10 mr-3 rounded-full" 
        />

        <div className="flex flex-col flex-1 min-w-0">
          <p className="flex text-sm dark:text-white">
            <span className="truncate">
              <span className="font-bold">
                {user.name}{" "}
              </span>
              <span className="pl-1 text-cool-gray-500">
                @{user.id}
              </span>
            </span>
            <span className="flex-shrink-0">
              <span className="px-1 text-cool-gray-500">·</span>
              <span className="text-cool-gray-500">
                {format(parseISO(date), 'MMM d')}
              </span>
            </span>
          </p>

          <p className="text-sm dark:text-white">
            {text}
          </p>

          <div className="flex justify-between mt-2 text-cool-gray-500 dark:text-gray-400">
            <div className="flex items-center">
              <svg viewBox="0 0 24 24" className="w-5 h-5 p-px fill-current">
                <g>
                  <path d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"></path>
                </g>
              </svg>

              <span className="ml-2 dark:text-gray-400">
                {replied}
              </span>
            </div>

            <div className="flex items-center">
              <RetweetIcon className={"w-5 h-5 p-px"} isActive={false} />

              <span className="ml-2 dark:text-gray-400">
                {retweeted}
              </span>
            </div>

            <div className="flex items-center">
              <LikeIcon className={"w-5 h-5 p-px"} isActive={false} />

              <span className="ml-2 dark:text-gray-400">
                {liked}
              </span>
            </div>

            <svg viewBox="0 0 24 24" className="w-5 h-5 p-px fill-current">
              <g>
                <path d="M17.53 7.47l-5-5c-.293-.293-.768-.293-1.06 0l-5 5c-.294.293-.294.768 0 1.06s.767.294 1.06 0l3.72-3.72V15c0 .414.336.75.75.75s.75-.336.75-.75V4.81l3.72 3.72c.146.147.338.22.53.22s.384-.072.53-.22c.293-.293.293-.767 0-1.06z"></path>
                <path d="M19.708 21.944H4.292C3.028 21.944 2 20.916 2 19.652V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 .437.355.792.792.792h15.416c.437 0 .792-.355.792-.792V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 1.264-1.028 2.292-2.292 2.292z"></path>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tweet
