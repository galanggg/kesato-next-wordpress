import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Card = ({ post }) => {
  const router = useRouter()
  const excerpt = post.node.excerpt
  const imageConvert = `${post.node.featuredImage.node.sourceUrl}?lqip`

  const [imageLoaded, setImageLoaded] = useState(false)

  const styles = {
    lqip: {
      filter: 'blur(10px)',
      opacity: 1,
    },
  }

  // Hide preview when image has loaded.
  if (imageLoaded) {
    styles.lqip.opacity = 0
  }

  return (
    <div className="sm:max-w-md lg:max-w-xl md:max-w-lg rounded overflow-hidden shadow-lg text-white border-solid border-2 mt-4">
      <div className="relative">
        <img
          className="absolute top-0 left-0 z-10 w-full transition-opacity duration-500 ease-in opacity-100"
          src={imageConvert}
          alt="image"
          style={styles.lqip}
        ></img>
        <img
          className="w-full"
          src={post.node.featuredImage.node.sourceUrl}
          alt="image"
          onLoad={() => setImageLoaded(true)}
        />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-black text-xl mb-2">
          {post.node.title}
        </div>
        <div
          className="text-black"
          dangerouslySetInnerHTML={{ __html: excerpt }}
        ></div>
        {/* <Link href="posts/[slug]" as={`/posts/${post.node.slug}`}> */}
        <button
          onClick={() =>
            router.push('/posts/[slug]', `/posts/${post.node.slug}`)
          }
          className="mt-4 bg-transparent hover:bg-blue-500 text-black font-semibold hover:text-white py-2 px-4 border border-gray-700 hover:border-transparent rounded"
        >
          Read
        </button>
        {/* </Link> */}
      </div>
    </div>
  )
}

export default Card
