import { useState } from 'react'
import useSWR from 'swr'
import { fetcher } from '../apis/fetcher'

import { ITweet } from '../interfaces'
import Tweet from '../components/Tweet'

const IndexPage = () => {
  let { data, error } = useSWR('/api/tweets', fetcher)
  const [buffer, setBuffer] = useState(data)

  if (!error) return "Unexpected Error Occurred"
  if (!buffer) return (
    <p className="px-4 py-2 mt-32 text-lg font-medium text-center text-gray-400">
      Loading...
    </p>
  )

  return (
    <div>
      {
        ([...buffer.tweets] as ITweet[]).reverse().map((tweet, i) => (
          <Tweet
            key={i.toFixed(1)} 
            avatarUrl={tweet.avatarUrl}
            text={tweet.text}
            name={tweet.name}
            userName={tweet.userName}
            date={tweet.date}
          />
        ))
      }
    </div>
  )
}

IndexPage.displayName = 'Latest Tweets'

export default IndexPage
