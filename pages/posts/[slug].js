import { useRouter } from 'next/router'
import { getPostAndMorePosts, getAllPostsWithSlug } from '../../lib/api'

const Post = ({ post, posts }) => {
  const router = useRouter()
  const morePosts = post?.edges

  if (!router.isFallback && !post?.slug) {
    return <div>Error !</div>
  }

  return (
    <div className="">
      {router.isFallback ? (
        <div>Loading...</div>
      ) : (
        <>
          <h1>{post.title}</h1>
          <p dangerouslySetInnerHTML={{ __html: post.content }} />
        </>
      )}
    </div>
  )
}

export async function getStaticProps({ params, preview = false, previewData }) {
  const data = await getPostAndMorePosts(params.slug, preview, previewData)

  return {
    props: {
      preview,
      post: data.post,
      posts: data.posts,
    },
  }
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug()

  return {
    paths: allPosts.edges.map(({ node }) => `/posts/${node.slug}`) || [],
    fallback: true,
  }
}

export default Post
