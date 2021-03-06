import Image from 'next/image'
import { useMoralis } from 'react-moralis'
import Avatar from './Avatar.js'
import ChangeUserName from './ChangeUserName.js'
function Header() {
  const { user } = useMoralis()

  return (
    <div className='text-pink-500 sticky top-0 p-5 z-50 bg-black shadow-sm border-b-2 border-pink-500'>
      <div className='grid grid-cols-5 lg:grid-cols-6 items-end lg:items-center'>
        <div className='relative h-24 w-24 mx-auto hidden lg:inline-grid'>
          <Image
            className='rounded-full'
            layout='fill'
            objectFit='cover'
            src='https://ayazmedia.com/wp-content/uploads/2022/06/5d0f2947-7c24-44b3-9e08-86f3bec762b9-removebg-preview-e1654715044169.png'
          />
        </div>
        <div className='col-span-4  text-left lg:text-center'>
          <div className='relative h-48 w-48 lg:mx-auto border-pink-500 border-8 rounded-full'>
            <Avatar logoutOnPress />
          </div>
          <h1 className='text-3xl'>Welcome Gang</h1>
          <h2 className='text-5xl font-bold truncate'>{user.getUsername()}</h2>
          <ChangeUserName />
        </div>
      </div>
    </div>
  )
}

export default Header
