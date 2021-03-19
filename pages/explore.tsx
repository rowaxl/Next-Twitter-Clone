import { useState, useEffect } from 'react'
import useSWR from 'swr'
import { fetcher } from '../apis/fetcher'
import { INews } from '../interfaces'
import News from '../components/News'

const NEWS_API_URL = process.env['NEXT_PUBLIC_NEWS_API_URL'] as string

const ExplorePage = () => {
  let { data, error } = useSWR(NEWS_API_URL, fetcher)
  const [buffer, setBuffer] = useState<{ articles: INews[] }>()

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
    <div className="flex space-x-8 border-b border-gray-100">
      <div className="flex flex-col">
        {
          buffer.articles.length > 0 && buffer.articles.map(news => (
            <News
              key={news.url}
              url={news.url}
              title={news.title}
              urlToImage={news.urlToImage}
              source={news.source}
              publishedAt={news.publishedAt}
            />
          ))
        }
      </div>
    </div>
  )
}

ExplorePage.displayName = 'Search'

export default ExplorePage
