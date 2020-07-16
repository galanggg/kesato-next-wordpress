import Head from 'next/head'
import Link from 'next/link'
import Nav from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'

export default function Home({ posts }) {
  console.log(posts)
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <Hero />
      <Services />
      <footer></footer>
    </div>
  )
}
