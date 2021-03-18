import { useState, useEffect } from 'react'
import useSWR from 'swr'
import { fetcher } from '../apis/fetcher'

import { IMessage } from '../interfaces'
import Message from '../components/Message'

const MessagesPage = () => {
  let { data, error } = useSWR('/api/messages', fetcher)
  const [buffer, setBuffer] = useState<{ messages: IMessage[] }>()

  useEffect(() => {
    setBuffer(data)
  }, [data])

  if (error) return "Unexpected Error Occurred"

  if (!buffer) return (
    <p className="px-4 py-2 mt-32 text-lg font-medium text-center text-gray-400">
      Loading...
    </p>
  )

  return (
    <div>
      {
        ([...buffer.messages] as IMessage[]).reverse().map((message, i) => (
          <Message
            key={i.toFixed(1)}
            message={message}
          />
        ))
      }
    </div>
  )
}

MessagesPage.displayName = 'Messages'

export default MessagesPage
