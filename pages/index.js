import Head from 'next/head'
import Image from 'next/image'
import Body from '../components/Body'
import Footer from '../components/Footer'
import HomePageHeader from '../components/HomePageHeader'

export default function Home() {
  return (
    <div className='flex flex-col justify-center h-screen'>
      <Head>
        <title>Google Clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <HomePageHeader />

      {/* Body */}
      <Body />

      {/* Footer */}
      <Footer />
    </div>
  )
}
