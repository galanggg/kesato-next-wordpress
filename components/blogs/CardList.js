import React from 'react'
import Card from './Card'

const CardList = ({ posts }) => {
  console.log(posts)
  return (
    <div className="container m-auto">
      <div className="mt-5">
        <div className="grid md:grid-cols-3 xl:grid-cols-3 sm:grid-cols-1 gap-3 ">
          {posts.map((post) => (
            <Card post={post} key={post.node.slug} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default CardList
