import React from 'react'
import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  ApolloProvider,
} from '@apollo/client'
import { useQuery } from '@apollo/client'
import gql from 'graphql-tag'
import dynamic from 'next/dynamic'
const Nav = dynamic(() => import('../components/home/Navbar.js'))
import Posts from '../components/blogs/ExperimentalPosts'
import Container from '../components/Container'
import { motion } from 'framer-motion'

//Animation for blog section
let easing = [0.175, 0.85, 0.42, 0.96]

const imageVariants = {
  exit: { y: 50, opacity: 0, transition: { duration: 0.5, ease: easing } },
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: easing,
    },
  },
}
//End of animation

const client = new ApolloClient({
  link: new HttpLink({
    uri: `https://next.kesato.io/graphql`,
    credentials: 'same-origin',
  }),
  cache: new InMemoryCache(),
})

const Experimental = () => {
  return (
    <ApolloProvider client={client}>
      <div className="blogs">
        <Posts />
      </div>
    </ApolloProvider>
  )
}

export default Experimental
