import { AppProps } from 'next/app'
import 'tailwindcss/tailwind.css'

const AppWrap = ({ Component, pageProps }: AppProps) => {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen mx-auto text-base text-gray-900 bg-cool-gray-200 xs:py-8">
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

      <footer className="flex border-t">
        <a className="w-1/4 text-center py-2" href="">Home</a>
        <a className="w-1/4 text-center py-2" href="">Search</a>
        <a className="w-1/4 text-center py-2" href="">Notifications</a>
        <a className="w-1/4 text-center py-2" href="">Messages</a>
      </footer>
    </div>
  )
}

export default AppWrap