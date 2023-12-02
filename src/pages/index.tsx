import Image from 'next/image'
import VideoCard from '@/Components/VideoCard'
import { Inter } from 'next/font/google'
import VideoGrid from '@/Components/VideoGrid'
import AppBar from '@/Components/AppBar'
import LeftBar from '@/Components/LeftBar'
import SearchBar from '@/Components/SearchBar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='flex flex-row'>
      <LeftBar></LeftBar>
      <div>
      <AppBar></AppBar>
      <VideoGrid></VideoGrid>
      </div>
    </main>
  )
}
