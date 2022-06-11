import Head from 'next/head'
import Login from '../components/Login.js'
import { useMoralis } from 'react-moralis'
function Home() {
  const { isAuthenticated, logout } = useMoralis()

  if (!isAuthenticated) return <Login />
  return (
    <div className='h-screen'>
      <Head>
        <title>Wolfer Finance</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h1>Yolo My boy</h1>
      <button onClick={logout} className='bg-red-400 p-5'>
        Logout Sir
      </button>
    </div>
  )
}

export default Home
