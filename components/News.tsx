import { INews } from '../interfaces'

const News = ({
  source,
  title,
  url,
  urlToImage,
  publishedAt,
}: INews) => {
  const handleOpenNews = () => {
    open(url)
  }

  return (
    <div
      className="w-full py-4 px-4 flex flex-row dark:bg-black border-b cursor-pointer"
      onClick={handleOpenNews}
    >
      <div className="w-full flex flex-col">
        <span className="dark:text-gray-500 text-sm py-2">
          {source.name}
          {" · "}
          {new Date(publishedAt).toLocaleDateString('en-US', {
            month: 'short',
            day: '2-digit',
            year: 'numeric'
          })}
        </span>

        <p className="text-ml dark:text-white font-bold">
          {title}
        </p>
      </div>

      <div className="flex flex-col justify-center">
        <img className="w-16 h-16 mx-2 rounded-md" src={urlToImage} alt={url} />
      </div>
    </div>
  )
}

export default News
