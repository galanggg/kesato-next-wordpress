import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { LazyImage } from '../../lib/lazyimage'
import { Base64 } from 'js-base64'

const Card2 = ({ post }) => {
  const router = useRouter()
  const excerpt = post.node.excerpt

  return (
    <div className="sm:max-w-md lg:max-w-xl md:max-w-lg rounded overflow-hidden shadow-lg text-white border-solid border-2 mt-4">
      <div className="wrapper">
        <LazyImage
          className="w-full"
          aspectRatio={16 / 9}
          lqip={Base64.btoa(post.node.featuredImage.node.sourceUrl)}
          src={post.node.featuredImage.node.sourceUrl}
          alt="img"
        />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-black text-xl mb-2">
          {post.node.title}
        </div>
        {excerpt ? (
          <div
            className="text-black"
            dangerouslySetInnerHTML={{ __html: excerpt }}
          ></div>
        ) : (
          <div className="text-black">Ini default Excerpt</div>
        )}

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

export default Card2
