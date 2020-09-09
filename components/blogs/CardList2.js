import React from 'react'
import Card2 from './Card2'
const CardList2 = ({ error, loading, data, posts, fetchMore }) => {
  console.log(posts)
  return (
    <div className="container m-auto">
      <div className="mt-5">
        <div className="grid md:grid-cols-3 xl:grid-cols-3 sm:grid-cols-1 gap-3 ">
          {posts.map((post) => (
            <Card2 post={post} key={post.node.slug} />
          ))}
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default CardList2
