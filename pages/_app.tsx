import { AppProps } from 'next/app'
import 'tailwindcss/tailwind.css'

import Footer from '../components/Footer'

const AppWrap = ({ Component, pageProps }: AppProps) => {
  return (
    <div className="flex flex-col h-screen">
      <header className="flex item-center px-4 py-3 border-b">
        <img
          className="rounded-full w-7 h-7"
          src="https://pbs.twimg.com/profile_images/1355966530652045313/LaqS48cW_400x400.jpg"
          alt="profile-img"
        />
        <p className="ml-6 text-lg font-extrabold">
          Page Title
        </p>
      </header>

      <main className="flex-1">
        <Component {...pageProps} />
      </main>

      <Footer />
    </div>
  )
}

export default AppWrap