import useSWR from 'swr'
import { fetcher } from '../apis/fetcher'

import {ITweet} from '../interfaces'
import Tweet from '../components/Tweet'

const IndexPage = () => {
  let { data } = useSWR('/api/tweets', fetcher)

  if (!data) return "Loading..."

  return (
    <div>
      {
        (data.tweets as ITweet[]).reverse().map((tweet, i) => (
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
