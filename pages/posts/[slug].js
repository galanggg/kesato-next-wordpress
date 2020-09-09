import { useRouter } from 'next/router'
import { getPostAndMorePosts, getAllPostsWithSlug } from '../../lib/api'
import Link from 'next/link'

const Post = ({ post, posts }) => {
  console.log(post)
  const router = useRouter()
  const morePosts = posts?.edges

  if (!router.isFallback && !post?.slug) {
    return <div>Error !</div>
  }

  return (
    <div className="bg-gray-100 text-black font-sans quicksand">
      {router.isFallback ? (
        <div>Loading...</div>
      ) : (
        <div className="p-6 sm:p-10 md:p-16 flex flex-wrap">
          <div className="w-full md:w-1/2 md:pr-32 order-3 md:order-1">
            <div className="max-w-md md:float-right md:text-right leading-loose tracking-tight md:sticky md:top-0 ">
              <p className="font-bold my-4 md:my-12">Another Posts</p>

              <ul className="flex flex-wrap justify-between flex-col">
                <li>
                  <a href="#" className="nav">
                    Another blog posts links
                  </a>
                </li>
                <li>
                  <a href="#" className="nav">
                    A diam sollicitudin tempor id eue
                  </a>
                </li>
                <li>
                  <a href="#" className="nav">
                    Lectus vestibulum mattis ullamcorper velit sed ullamcorper
                  </a>
                </li>
                <li>
                  <a href="#" className="nav">
                    Pulvinar etiam non quam lacus suspendisse faucibus
                  </a>
                </li>
              </ul>
              <a href="#" className="normal font-bold hover:font-bold">
                more...
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2 order-1 md:order-2">
            <div className="max-w-md leading-loose tracking-tight">
              <h1 className="font-bold my-12">{post.title}</h1>
              <div
                className="mb-8"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
          </div>
        </div>
      )}
      <div className="absolute top-0 left-0 h-12 w-18 p-4">
        <Link href="/blogs">
          <button className="js-change-theme focus:outline-none">◀️</button>
        </Link>
      </div>
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
