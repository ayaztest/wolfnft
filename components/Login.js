import Image from 'next/image'
import { useMoralis } from 'react-moralis'
function login() {
  const { authenticate } = useMoralis()
  return (
    <div className='bg-black relative text-white'>
      <h3>login here</h3>
      <div className='flex flex-col absolute z-50 self-center h-5/6 w-full items-center justify-center space-y-4'>
        <Image
          className='object-cover'
          src='https://ayazmedia.com/wp-content/uploads/2022/06/cropped-M-removebg-preview-1-e1654720901614.png'
          width={200}
          height={200}
        />

        <button
          onClick={authenticate}
          className='bg-yellow-500 rounded-lg p-5 font-bold animate-pulse text-lg	'
        >
          Login to Ayaz Media
        </button>
      </div>
      <div className='w-full h-screen'>
        <Image
          src='https://ayazmedia.com/wp-content/uploads/2022/06/hd-wallpaper-g3771a6e84_1920.jpg'
          layout='fill'
          objectfill='cover'
        />
      </div>
    </div>
  )
}

export default login
