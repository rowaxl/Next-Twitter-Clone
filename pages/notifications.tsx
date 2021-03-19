import { useState, useEffect } from 'react'
import useSWR from 'swr'
import { fetcher } from '../apis/fetcher'
import Notify from '../components/Notify'

import { INotify, NotifyCategory } from '../interfaces'

interface IProps {
  notificationType: NotifyCategory
}

const NotificationPage = ({ notificationType }: IProps) => {
  let { data, error } = useSWR('/api/notifications', fetcher)
  const [buffer, setBuffer] = useState<{ notifications: INotify[] }>()

  useEffect(() => {
    setBuffer(data)
  }, [data])

  if (error) return "Unexpected Error Occurred"

  return (
    <div>
      <div className="w-full flex flex-col dark:bg-black overflow-scroll">
      {
        buffer && buffer.notifications.length > 0 ?
            buffer.notifications
              .filter(notification => {
                if (notificationType === 'all') return true
                return notification.category === notificationType
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
