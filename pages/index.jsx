import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Nav from './nav'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='main'>
      <Nav />
      <a href='about'>move about page</a>

    </div>
  )
}
