import dynamic from 'next/dynamic'
const Nav = dynamic(() => import('../components/home/Navbar'))
const Hero = dynamic(() => import('../components/home/Hero'))
const Services = dynamic(() => import('../components/home/Services'))
const Photography = dynamic(() => import('../components/home/Photography'))
const Videography = dynamic(() => import('../components/home/Videography'))
import { getAllPages } from '../lib/api'
import Container from '../components/Container'

export default function Home({ homePage: { edges } }) {
  const homepage = edges[0]?.node
  console.log(homepage)
  return (
    <>
      <Container>
        <Nav />
        <Hero
          tagline={homepage.tagline.tagline}
          heroImage={homepage.featuredImage.node.sourceUrl}
        />
        <Services />
        <Photography gallery={homepage.gallery.gallery} />
        <Videography videography={homepage.videography.videography.sourceUrl} />
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
