import React from 'react'
import Nav from '../components/Navbar'
import HeroBlog from '../components/HeroBlog'
import { getAllPostsForHome } from '../lib/api'

const Blogs = ({ allPosts: { edges }, preview }) => {
  console.log(edges)
  const heroPost = edges[0]?.node
  const morePost = edges.slice(1)
  return (
    <div className="blogs">
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
      </div>
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
