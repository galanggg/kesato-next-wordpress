import Head from 'next/head'
import Link from 'next/link'
import dynamic from 'next/dynamic'
const Nav = dynamic(() => import('../components/home/Navbar'))
const Hero = dynamic(() => import('../components/home/Hero'))
const Services = dynamic(() => import('../components/home/Services'))
import { getAllPages } from '../lib/api'
import Container from '../components/Container'

export default function Home({ homePage: { edges } }) {
  const homepage = edges[0]?.node
  console.log(homepage)
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Nav />
        <Hero tagline={homepage.tagline.tagline} />
        <Services />
      </Container>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const homePage = await getAllPages(preview)
  return {
    props: {
      homePage,
    },
  }
}
