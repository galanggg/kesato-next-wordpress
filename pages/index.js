import dynamic from 'next/dynamic'
const Nav = dynamic(() => import('../components/home/Navbar'))
const Hero = dynamic(() => import('../components/home/Hero'))
const Services = dynamic(() => import('../components/home/Services'))
const Photography = dynamic(() => import('../components/home/Photography'))
const Videography = dynamic(() => import('../components/home/Videography'))
const OurClient = dynamic(() => import('../components/home/OurClient'))
const Contact = dynamic(() => import('../components/home/Contact'))
const Footer = dynamic(() => import('../components/home/Footer'))

import { getAllPages } from '../lib/api'
import Container from '../components/Container'
import HeroVideo from '../components/home/HeroVideo'

export default function Home({ homePage: { edges } }) {
  const homepage = edges[0]?.node
  console.log(homepage)
  return (
    <>
        <Nav />
        <HeroVideo videography="https://next.kesato.io/wp-content/uploads/2020/07/video.png"></HeroVideo>
        <Container>
        <Hero
          tagline={homepage.tagline.tagline}
          heroImage={homepage.featuredImage.node.sourceUrl}
        />
        <Services />
        <Photography gallery={homepage.gallery.gallery} />
        <Videography videography={homepage.videography.videography.sourceUrl} />
        <OurClient client={homepage.client.client} />
        <Contact />
      </Container>
      <Footer />
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
