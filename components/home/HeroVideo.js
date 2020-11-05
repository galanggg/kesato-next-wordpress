import React, { useState } from 'react'
import Link from 'next/link'
import ReactPlayer from 'react-player/lazy'
import styled from 'styled-components'
import Container from '../Container'

const PlayIcon = () => {
  return (
    <svg className="svg-player" version="1.1" viewBox="0 0 99.6 99.6">
      <g>
        <g>
          <g>
            <path
              class="st0"
              d="M49.8,99.6c-0.4,0-0.9,0-1.3,0C21.1,98.9-0.7,76,0,48.5C0.7,21.3,22.6,0,49.8,0c0.4,0,0.9,0,1.3,0
    				c13.3,0.3,25.7,5.8,34.8,15.5c9.2,9.6,14,22.3,13.7,35.6C98.9,78.3,77,99.6,49.8,99.6z M49.8,2C23.7,2,2.7,22.5,2,48.6
    				c-0.7,26.3,20.2,48.3,46.6,49c26.7,0.7,48.3-20,49-46.6c0.3-12.8-4.3-24.9-13.1-34.1S63.8,2.3,51,2C50.6,2,50.2,2,49.8,2z"
            />
          </g>
        </g>
        <g>
          <path
            class="st0"
            d="M33.1,76.4V23.2l46,26.6L33.1,76.4z M35.1,26.7v46.2l40-23.1L35.1,26.7z"
          />
        </g>
      </g>
    </svg>
  )
}

const HeroVideo = () => {
  const [putar, setPutar] = useState(false)
  return (
    <Container>
      <div className="video">
        <ReactPlayer
          width="950px"
          height="380px"
          url="/showreel.mp4"
          playing={putar}
          onReady={() => setPutar(true)}
          onStart={() => console.log('onStart callback')}
          onPause={() => console.log('onPause callback')}
          onEnded={() => console.log('onEnded callback')}
          onError={() => console.log('onError callback')}
          light="/video-cover.png"
          playIcon={<PlayIcon />}
          controls
        />
      </div>
      <div className="kesato-jobs">
        <div className="container">
          <div className="row row-jobs">
            <div className="kesato-jobs">
              <p> We love/ We do</p>
            </div>
            <div className="jobs">
              <p>Web Development</p>
              <p>Graphic Design</p>
              <p>Photo & Video</p>
            </div>
            <div className="jobs">
              <p>Social Media</p>
              <p>Digital Marketing</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="dropdown">
          <a href="down">
            <svg
              id="Capa_1"
              enable-background="new 0 0 551.13 551.13"
              viewBox="0 0 551.13 551.13"
              height="25px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m275.565 361.679-223.897-223.896h-51.668l275.565 275.565 275.565-275.565h-51.668z" />
            </svg>
          </a>
        </div>
      </div>
    </Container>
  )
}
export default HeroVideo
