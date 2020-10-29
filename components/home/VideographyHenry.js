import React, { useEffect, useState } from 'react'
import Container from '../Container'
import styled from 'styled-components'
import ReactPlayer from 'react-player/lazy'
import tw from 'twin.macro'

const SvgPlay = styled.svg`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
`

const VideographyHenry = ({ videography }) => {
  const [play, setPlay] = useState(false)

  // useEffect(() => {
  //   this.player = videojs(this.videoNode, this.props, function onPlayerReady() {
  //     console.log('onPlayerReady', this)
  //   });

  //   return () => {
  //     if (this.player) {
  //       this.player.dispose()
  //     }
  //   }
  // })

  // const videoJsOptions = {
  //   autoplay: true,
  //   controls: true,
  //   sources: [{
  //     src: '/intro.mp4',
  //     type: 'video/mp4'
  //   }]
  // }

  return (
    <section className="videography">
      <Container>
        <div className="mx-auto">
          <div className="lg:px-16 px-6">
            <div className="ml-5 mt-12">
              <h1 className="font-bold text-5xl">Videography</h1>
              <p className="max-w-4xl font-medium pt-8">
                Whether you need lifestyle showreel, events showreel, or
                corporate showreel, we have a proven track record to create it
                perfectly. Our core strength lies in our ability to adapt to any
                style, under any condition, to cover all our clients needs.
              </p>
            </div>
          </div>
          <div tw="my-24 relative">
            <ReactPlayer
              url="/intro.mp4"
              width="100%"
              height="100%"
              loop
              playIcon="/playicon.svg"
              playing={play}
            />
            <img
              tw="absolute w-32 top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"
              onClick={() => {
                if (play == true) {
                  return setPlay(false)
                } else {
                  return setPlay(true)
                }
              }}
              src={!play ? '/playicon.svg' : '/exit.svg'}
            ></img>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default VideographyHenry
