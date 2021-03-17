import { useState, useEffect } from 'react'
import useSWR from 'swr'
import { fetcher } from '../apis/fetcher'
import Notify from '../components/Notify'

import { INotify } from '../interfaces'

const NotificationPage = () => {
  let { data, error } = useSWR('/api/notifications', fetcher)
  const [buffer, setBuffer] = useState<{ notifications: INotify[] }>()

  useEffect(() => {
    setBuffer(data)
  }, [data])

  if (error) return "Unexpected Error Occurred"

  return (
    <div>
      <div className="flex flex-col border-b border-gray-200">
        <div className="w-full flex dark:bg-black">
          <p className="w-1/2 py-3 text-sm font-bold text-center text-blue-500 border-b-2 border-blue-500">
            All
          </p>
          <p className="w-1/2 py-3 text-sm font-bold text-center text-gray-500">
            Mentions
          </p>
        </div>
      </div>

      <div className="w-full flex flex-col dark:bg-black">
      {
        buffer && buffer.notifications.length > 0 ?
          buffer.notifications.map(notification => <Notify key={notification.tweet} notification={notification} />) :
          <></>
      }
      </div>
    </div>
  )
}

NotificationPage.displayName = 'Notifications'

export default NotificationPage
