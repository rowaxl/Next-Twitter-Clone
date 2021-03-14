import { AppProps } from 'next/app'
import 'tailwindcss/tailwind.css'
import '../server'

import Footer from '../components/Footer'

const AppWrap = ({ Component, pageProps }: AppProps) => {
  const title = Component.displayName

  return (
    <div className="flex h-screen justify-center items-center bg-gray-100 dark:bg-gray-800">
      <div className="flex flex-col max-w-md h-1/2">
        <header className="flex item-center px-4 py-3 border-b dark:bg-black">
          <img
            className="rounded-full w-7 h-7"
            src="https://pbs.twimg.com/profile_images/1355966530652045313/LaqS48cW_400x400.jpg"
            alt="profile-img"
          />
          <p className="ml-6 text-lg font-extrabold dark:text-white">
            {title ? title : 'Home'}
          </p>
        </header>

        <main className="flex-1 overflow-scroll">
          <Component {...pageProps} />
        </main>

        <Footer />
      </div>
    </div>
  )
}

export default AppWrap