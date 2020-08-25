import React from 'react'
import dynamic from 'next/dynamic'
const Nav = dynamic(() => import('../components/home/Navbar.js'))
const HeroBlog = dynamic(() => import('../components/blogs/HeroBlog'))
const CardList = dynamic(() => import('../components/blogs/CardList'))
import Container from '../components/Container'
import { getAllPostsForHome } from '../lib/api'
import { motion } from 'framer-motion'

let easing = [0.175, 0.85, 0.42, 0.96]

const imageVariants = {
  exit: { y: 50, opacity: 0, transition: { duration: 0.5, ease: easing } },
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: easing,
    },
  },
}

const Blogs = ({ allPosts: { edges }, preview }) => {
  const heroPost = edges[0]?.node
  const morePost = edges.slice(1)
  return (
    <div className="blogs">
      <Container>
        <Nav />
        <motion.div initial="exit" animate="enter" exit="exit">
          <motion.div variants={imageVariants} className="lg:px-16 px-6 mt-10">
            {heroPost && (
              <HeroBlog
                title={heroPost.title}
                coverImage={heroPost.featuredImage.node}
                date={heroPost.date}
                author={heroPost.author}
                slug={heroPost.slug}
                excerpt={heroPost.excerpt}
              />
            )}
            {morePost.length > 0 && <CardList posts={morePost} />}
          </motion.div>
        </motion.div>
      </Container>
    </div>
  )
}

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview)
  return {
    props: {
      allPosts,
      preview,
    },
    unstable_revalidate: 1,
  }
}

export default Blogs
