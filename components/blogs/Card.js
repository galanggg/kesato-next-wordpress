import React from 'react'
import Link from 'next/link'
const Card = ({ post }) => {
  const excerpt = post.node.excerpt
  console.log(excerpt)
  return (
    <div className="sm:max-w-md lg:max-w-xl md:max-w-lg rounded overflow-hidden shadow-lg text-white border-solid border-2 mt-4">
      <img
        className="w-full"
        src={post.node.featuredImage.node.sourceUrl}
        alt="Sunset in the mountains"
      ></img>
      <div className="px-6 py-4">
        <div className="font-bold text-black text-xl mb-2">
          {post.node.title}
        </div>
        <div
          className="text-black"
          dangerouslySetInnerHTML={{ __html: excerpt }}
        ></div>
        <Link href="posts/[slug]" as={`/posts/${post.node.slug}`}>
          <button className="mt-4 bg-transparent hover:bg-blue-500 text-black font-semibold hover:text-white py-2 px-4 border border-gray-700 hover:border-transparent rounded">
            Read
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Card
