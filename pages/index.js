import dynamic from 'next/dynamic'
const Nav = dynamic(() => import('../components/home/Navbar'))
const Hero = dynamic(() => import('../components/home/Hero'))
const Services = dynamic(() => import('../components/home/Services'))
const Team = dynamic(() => import('../components/home/Team'))
const Photography = dynamic(() => import('../components/home/Photography'))
const Videography = dynamic(() => import('../components/home/Videography'))
const OurClient = dynamic(() => import('../components/home/OurClient'))
const Footer = dynamic(() => import('../components/home/Footer'))

import { getAllPages } from '../lib/api'
import HeroVideo from '../components/home/HeroVideo'
import BeforeServives from '../components/BeforeServices'

export default function Home({ homePage: { edges } }) {
  const homepage = edges[0]?.node
  console.log(homepage.client.client)
  return (
    <>
      <HeroVideo videography="https://next.kesato.io/wp-content/uploads/2020/07/video.png"></HeroVideo>
      {/* <Hero
        tagline={homepage.tagline.tagline}
        heroImage={homepage.featuredImage.node.sourceUrl}
      />
      <BeforeService />
      <Services /> */}
      <Hero />
      <BeforeServives />
      <Services />
      <Team />
      <OurClient client={homepage.client.client} />
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
