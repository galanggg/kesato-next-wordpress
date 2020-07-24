import React from 'react'
import dynamic from 'next/dynamic'
const Nav = dynamic(() => import('../components/home/Navbar.js'))
const HeroBlog = dynamic(() => import('../components/blogs/HeroBlog'))
const CardList = dynamic(() => import('../components/blogs/CardList'))
import Container from '../components/Container'
import { getAllPostsForHome } from '../lib/api'

const Blogs = ({ allPosts: { edges }, preview }) => {
  const heroPost = edges[0]?.node
  const morePost = edges.slice(1)
  return (
    <div className="blogs">
      <Container>
        <Nav />
        <div className="lg:px-16 px-6 mt-10">
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
        </div>
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
  }
}

export default Blogs
