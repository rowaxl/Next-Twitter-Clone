import { AppProps } from 'next/app'
import 'tailwindcss/tailwind.css'
import '../server'

import { useState } from 'react'

import { AvatarGenerator } from 'random-avatar-generator'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { NotifyCategory } from '../interfaces'

const generator = new AvatarGenerator()
const myAvatar = generator.generateRandomAvatar()

const AppWrap = ({ Component, pageProps }: AppProps) => {
  const route = Component.displayName

  const [notificationType, setNotificationType] = useState<NotifyCategory>('all')

  const handleNotificationType = (type: NotifyCategory) => {
    setNotificationType(type)
  }

  pageProps.notificationType = notificationType

  return (
    <div className="flex h-screen justify-center items-center bg-gray-100 dark:bg-gray-800">
      <div className="flex flex-col max-w-md w-full md:w-1/2 h-full md:h-2/3">
        <Header
          route={route}
          avatarURL={myAvatar}
          notifyType={notificationType}
          onChangeNotifyType={handleNotificationType}
        />

        <main className="flex-1 overflow-scroll dark:bg-black">
          <Component {...pageProps} />
        </main>

        <Footer />
      </div>
    </div>
  )
}

export default AppWrap