import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { LazyImage } from '../../lib/lazyimage'
import { Base64 } from 'js-base64'

const Card = ({ post }) => {
  const router = useRouter()
  const excerpt = post.node.excerpt

  return (
    <div className="sm:max-w-md lg:max-w-xl md:max-w-lg rounded overflow-hidden shadow-lg text-white border-solid border-2 mt-4">
      <div className="wrapper">
        <LazyImage
          className="w-full"
          aspectRatio={16 / 9}
          // lqip="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAUACYDASIAAhEBAxEB/8QAGQABAAMBAQAAAAAAAAAAAAAAAAQGBwEF/8QALhAAAgEDAgQEBAcAAAAAAAAAAQIDAAQRBRIGITFBBxMikTJRgbEVFkJhYnGh/8QAFgEBAQEAAAAAAAAAAAAAAAAABAMC/8QAHhEAAgICAgMAAAAAAAAAAAAAAAIBAxESITEyM1H/2gAMAwEAAhEDEQA/AKdpOiaOHUvYzs2wJkZwB860Dg/QbKxvIntLZkLyB2Dsctjn3qPZ6JqDoRHPatjphtpHuKi8TaxJwzabblliunOEO4MCRjv9aKuWbECZ1WMlz8QdJGu2MrpBDaX1uoeKbzAQe+04+/Y1n35cW5tUubGdkWT48+rDd/8Aar3F3G9xqkCx2mYIgm2RlyDI3T2PXlUHw/1S/E2oWspmWJlEkLHKq20AMA3TuOVVsqbTJiHSW1JGqcIzysQ1yylXOCUxkUr0bi6uJG3Sv8PpCh8/WlRiW+mtENe06OMBB5antzH7VmvjnaRbbaQAq8YAUj+XI/YUpSa/Ii/RXNI0Kxn8Fte1x4z+J2N5EkMwPRSUBGOn6z7D5VbdFUbEhb1RhgmG59uZ/ulKdVyjg7vZWdvNJtJcF4+eTzHKlKUAcf/Z"
          lqip={Base64.btoa(post.node.featuredImage.node.sourceUrl)}
          src={post.node.featuredImage.node.sourceUrl}
          alt="img"
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
