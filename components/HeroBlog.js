import React from 'react'
import Link from 'next/link'

const HeroBlog = ({ title, coverImage, date, author, slug, excerpt }) => {
  const heroImage = coverImage?.sourceUrl
  console.log(heroImage)
  return (
    <section className="blog-section">
      <div className="container">
        <div
          className="w-full m-0 p-0 bg-cover bg-center"
          style={{
            height: '60vh',
            maxHeight: '460px',
            backgroundImage: `url(${heroImage})`,
          }}
        >
          <div className="container max-w-4xl mx-auto pt-16 md:pt-32 text-center break-normal">
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              {/* <a
                className="text-white font-extrabold text-3xl md:text-5xl"
                dangerouslySetInnerHTML={{ __html: title }}
              /> */}
              <a className="text-white font-extrabold text-3xl md:text-5xl">
                {title}
              </a>
            </Link>
            <p className="text-xl md:text-2xl text-gray-500">
              Welcome to KESATO BLOG
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroBlog
