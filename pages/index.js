import Head from 'next/head'
import Login from '../components/Login.js'
import { useMoralis } from 'react-moralis'
import Header from '../components/Header.js'
import Messages from '../components/Messages.js'
function Home() {
  const { isAuthenticated, logout } = useMoralis()

  if (!isAuthenticated) return <Login />
  return (
    <div className='h-screen overflow-y-scroll bg-gradient-to-b from-black to-fuchsia-900 overflow-hidden'>
      <Head>
        <title>Wolfer Finance</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h1>Yolo My boy</h1>

      <div className='max-w-screen-2xl mx-auto text-white'>
        <Header />
        <Messages />
      </div>
    </div>
  )
}

export default Home
