import React, { useState, useEffect } from 'react'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/client'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { LazyImage } from '../../lib/lazyimage'
import { Base64 } from 'js-base64'

const updateQuery = (previousResult, { fetchMoreResult }) => {
  return fetchMoreResult.posts.edges.length ? fetchMoreResult : previousResult
}

const PostList = ({ data, error, loading, fetchMore }) => {
  const router = useRouter()
  const { posts } = data
  return (
    <div>
      {posts && posts.edges ? (
        <div>
          {posts.edges.map((edge) => {
            const { node } = edge
            return (
              <React.Fragment className="sm:max-w-md lg:max-w-xl md:max-w-lg rounded overflow-hidden shadow-lg text-white border-solid border-2 mt-4">
                <div className="wrapper">
                  <LazyImage
                    className="w-full"
                    aspectRatio={16 / 9}
                    lqip={Base64.btoa(node.featuredImage.node.sourceUrl)}
                    src={node.featuredImage.node.sourceUrl}
                    alt="img"
                  />
                </div>
                <div className="px-6 py-4">
                  <div className="font-bold text-black text-xl mb-2">
                    {node.title}
                  </div>
                  {node.excerpt ? (
                    <div
                      className="text-black"
                      dangerouslySetInnerHTML={{ __html: node.excerpt }}
                    ></div>
                  ) : (
                    <div className="text-black">Ini default Excerpt</div>
                  )}

                  {/* <Link href="posts/[slug]" as={`/posts/${post.node.slug}`}> */}
                  <button
                    onClick={() =>
                      router.push('/posts/[slug]', `/posts/${node.slug}`)
                    }
                    className="mt-4 bg-transparent hover:bg-blue-500 text-black font-semibold hover:text-white py-2 px-4 border border-gray-700 hover:border-transparent rounded"
                  >
                    Read
                  </button>
                  {/* </Link> */}
                </div>
              </React.Fragment>
            )
          })}
        </div>
      ) : (
        <div>No posts were found...</div>
      )}
      <div>
        {posts.pageInfo.hasPreviousPage ? (
          <button
            onClick={() => {
              fetchMore({
                variables: {
                  first: null,
                  after: null,
                  last: 3,
                  before: posts.pageInfo.startCursor || null,
                },
                updateQuery,
              })
            }}
          >
            Previous
          </button>
        ) : null}
        {posts.pageInfo.hasNextPage ? (
          <button
            onClick={() => {
              fetchMore({
                variables: {
                  first: 3,
                  after: posts.pageInfo.endCursor || null,
                  last: null,
                  before: null,
                },
                updateQuery,
              })
            }}
          >
            Next
          </button>
        ) : null}
      </div>
    </div>
  )
}

export default PostList
