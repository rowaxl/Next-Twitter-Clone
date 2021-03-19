import { useState, useEffect } from 'react'
import useSWR from 'swr'
import { fetcher } from '../apis/fetcher'
import Notify from '../components/Notify'

import { INotify, NotifyCategory } from '../interfaces'

const NotificationPage = () => {
  let { data, error } = useSWR('/api/notifications', fetcher)
  const [buffer, setBuffer] = useState<{ notifications: INotify[] }>()
  const [types, setTypes] = useState<NotifyCategory>('all')

  useEffect(() => {
    setBuffer(data)
  }, [data])

  if (error) return "Unexpected Error Occurred"

  const allButtonColor = () => types === 'all' ? " text-blue-500 border-b-2 border-blue-500" : " text-gray-500"

  const mentionButtonColor = () =>  types === 'mention' ? " text-blue-500 border-b-2 border-blue-500" : " text-gray-500"

  return (
    <div>
      <div className="flex flex-col border-b border-gray-200">
        <div className="w-full flex dark:bg-black">
          <p className={"w-1/2 py-3 text-sm font-bold text-center cursor-pointer" + allButtonColor()}
            onClick={() => setTypes('all')}
          >
            All
          </p>
          <p className={"w-1/2 py-3 text-sm font-bold text-center cursor-pointer" + mentionButtonColor()}
            onClick={() => setTypes('mention')}
          >
            Mentions
          </p>
        </div>
      </div>

      <div className="w-full flex flex-col dark:bg-black">
      {
        buffer && buffer.notifications.length > 0 ?
            buffer.notifications
              .filter(notification => {
                if (types === 'all') return true
                return notification.category === types
              })
              .map(notification => <Notify key={notification.tweet.id} notification={notification} />) :
          <></>
      }
      </div>
    </div>
  )
}

NotificationPage.displayName = 'Notifications'

export default NotificationPage
