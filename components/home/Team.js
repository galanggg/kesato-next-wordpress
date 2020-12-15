import { useState, useRef, useEffect } from 'react'
import ReactPlayer from 'react-player/lazy'
import { Power2, gsap } from 'gsap'
import ParagraphAnimation from '../ParagraphAnimation'
import PerLineAnimate from '../PerLineAnimate'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

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

const Team = () => {
  const [putar, setPutar] = useState(false)
  let animationwrapper = useRef(null)
  let vidplayer = useRef(null)

  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: animationwrapper.current,
        start: 'top 70%',
        toggleActions: 'restart none none reset',
        markers: true,
      },
    })
    // const tl = gsap.timeline()

    tl.from(animationwrapper, {
      width: '0%',
      duration: 1,
      ease: Power2.easeInOut,
    })
      .to(vidplayer, {
        autoAlpha: 1,
        duration: 0.2,
      })
      .to(animationwrapper, {
        width: '0%',
        ease: Power2.easeInOut,
        duration: 0.7,
      })
  })

  return (
    <section className="relative pt-32">
      <div className="ornaments-left">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="Layer_1"
          x="0"
          y="0"
          version="1.1"
          viewBox="0 0 199.5 440.2"
          fill="#407fc1"
        >
          <path
            d="M197.7 437.5c-1.4.2-2.6 1.3-2.8 2.7h4.4l-1.6-2.7zM174.1 437.4c-1.6 0-3 1.2-3.3 2.8h6.6c-.3-1.6-1.7-2.8-3.3-2.8zM150 437.4c-1.6 0-3 1.2-3.3 2.8h6.6c-.3-1.6-1.7-2.8-3.3-2.8zM183.7 413.4c-1.9 0-3.4 1.5-3.4 3.4s1.5 3.4 3.4 3.4c1.3 0 2.4-.7 3-1.8l-2.8-4.9-.2-.1z"
            class="st0"
          />
          <circle cx="159.6" cy="416.8" r="3.4" class="st0" />
          <path
            d="M172.4 393.7l-2.4-4.2c-.3-.1-.5-.1-.7-.1-1.9 0-3.4 1.5-3.4 3.4s1.5 3.4 3.4 3.4c1.4-.1 2.7-1.1 3.1-2.5z"
            class="st0"
          />
          <circle cx="145.2" cy="392.8" r="3.4" class="st0" />
          <path
            d="M158.1 369.1l-1.9-3.4c-.4-.2-.9-.3-1.3-.3-1.9 0-3.4 1.5-3.4 3.4s1.5 3.4 3.4 3.4c1.7-.1 3.1-1.5 3.2-3.1zM126 437.4c-1.6 0-3 1.2-3.3 2.8h6.6c-.3-1.6-1.7-2.8-3.3-2.8zM102 437.4c-1.6 0-3 1.2-3.3 2.8h6.6c-.3-1.6-1.7-2.8-3.3-2.8zM77.9 437.4c-1.6 0-3 1.2-3.3 2.8h6.6c-.2-1.6-1.7-2.8-3.3-2.8zM53.9 437.4c-1.7 0-3 1.2-3.3 2.8h6.6c-.3-1.6-1.7-2.8-3.3-2.8z"
            class="st0"
          />
          <circle cx="135.6" cy="416.8" r="3.4" class="st0" />
          <circle cx="111.6" cy="416.8" r="3.4" class="st0" />
          <circle cx="87.5" cy="416.8" r="3.4" class="st0" />
          <circle cx="63.5" cy="416.8" r="3.4" class="st0" />
          <circle cx="121.2" cy="392.8" r="3.4" class="st0" />
          <circle cx="97.1" cy="392.8" r="3.4" class="st0" />
          <circle cx="73.1" cy="392.8" r="3.4" class="st0" />
          <path
            d="M52.2 394.1c.2-.4.3-.9.3-1.3s-.1-.9-.3-1.3c-.3-.8-1-1.5-1.8-1.8-.4-.2-.9-.3-1.3-.3-1.9 0-3.4 1.5-3.4 3.4s1.5 3.4 3.4 3.4c.5 0 .9-.1 1.3-.3.8-.4 1.5-1 1.8-1.8z"
            class="st0"
          />
          <circle cx="130.8" cy="368.7" r="3.4" class="st0" />
          <circle cx="106.8" cy="368.7" r="3.4" class="st0" />
          <circle cx="82.8" cy="368.7" r="3.4" class="st0" />
          <circle cx="58.7" cy="368.7" r="3.4" class="st0" />
          <path
            d="M143.8 344.7c0-.3-.1-.5-.1-.8-.1-.7-.5-1.2-.9-1.7-.6-.5-1.4-.9-2.3-.9-1.9 0-3.4 1.5-3.4 3.4s1.5 3.4 3.4 3.4c1.7 0 3.3-1.5 3.3-3.4z"
            class="st0"
          />
          <circle cx="116.4" cy="344.7" r="3.4" class="st0" />
          <circle cx="92.4" cy="344.7" r="3.4" class="st0" />
          <circle cx="68.3" cy="344.7" r="3.4" class="st0" />
          <circle cx="126" cy="320.7" r="3.4" class="st0" />
          <circle cx="102" cy="320.7" r="3.4" class="st0" />
          <circle cx="77.9" cy="320.7" r="3.4" class="st0" />
          <circle cx="53.9" cy="320.7" r="3.4" class="st0" />
          <circle cx="111.6" cy="296.7" r="3.4" class="st0" />
          <circle cx="87.5" cy="296.7" r="3.4" class="st0" />
          <circle cx="63.5" cy="296.7" r="3.4" class="st0" />
          <circle cx="97.1" cy="272.7" r="3.4" class="st0" />
          <circle cx="73.1" cy="272.7" r="3.4" class="st0" />
          <circle cx="82.8" cy="248.7" r="3.4" class="st0" />
          <circle cx="58.7" cy="248.7" r="3.4" class="st0" />
          <circle cx="68.3" cy="224.7" r="3.4" class="st0" />
          <circle cx="53.9" cy="200.6" r="3.4" class="st0" />
          <path
            d="M29.8 437.4c-1.7 0-3 1.2-3.3 2.8h6.6c-.3-1.6-1.7-2.8-3.3-2.8zM5.8 437.4c-1.7 0-3 1.2-3.3 2.8h6.6c-.2-1.6-1.6-2.8-3.3-2.8z"
            class="st0"
          />
          <circle cx="39.5" cy="416.8" r="3.4" class="st0" />
          <circle cx="15.4" cy="416.8" r="3.4" class="st0" />
          <circle cx="25.1" cy="392.8" r="3.4" class="st0" />
          <circle cx="34.7" cy="368.7" r="3.4" class="st0" />
          <circle cx="10.6" cy="368.7" r="3.4" class="st0" />
          <circle cx="44.3" cy="344.7" r="3.4" class="st0" />
          <circle cx="20.2" cy="344.7" r="3.4" class="st0" />
          <circle cx="29.8" cy="320.7" r="3.4" class="st0" />
          <circle cx="5.8" cy="320.7" r="3.4" class="st0" />
          <circle cx="39.5" cy="296.7" r="3.4" class="st0" />
          <circle cx="15.4" cy="296.7" r="3.4" class="st0" />
          <path
            d="M45.7 272.7c0 1.9 1.5 3.4 3.4 3.4.5 0 .9-.1 1.3-.3.8-.3 1.5-1 1.8-1.8.2-.4.3-.9.3-1.3s-.1-.9-.3-1.3c-.3-.8-1-1.5-1.8-1.8-.4-.2-.9-.3-1.3-.3-1.9.1-3.4 1.5-3.4 3.4z"
            class="st0"
          />
          <circle cx="25.1" cy="272.7" r="3.4" class="st0" />
          <circle cx="34.7" cy="248.7" r="3.4" class="st0" />
          <circle cx="10.6" cy="248.7" r="3.4" class="st0" />
          <circle cx="44.3" cy="224.7" r="3.4" class="st0" />
          <circle cx="20.2" cy="224.7" r="3.4" class="st0" />
          <circle cx="29.8" cy="200.6" r="3.4" class="st0" />
          <circle cx="5.8" cy="200.6" r="3.4" class="st0" />
          <circle cx="39.5" cy="176.6" r="3.4" class="st0" />
          <circle cx="15.4" cy="176.6" r="3.4" class="st0" />
          <circle cx="25.1" cy="152.7" r="3.4" class="st0" />
          <circle cx="10.6" cy="128.6" r="3.4" class="st0" />
          <path
            d="M1 396.1c1.9 0 3.4-1.5 3.4-3.4s-1.5-3.4-3.4-3.4c-.4 0-.7.1-1 .2v6.4c.3.2.6.2 1 .2zM1 276.1c1.9 0 3.4-1.5 3.4-3.4s-1.5-3.4-3.4-3.4c-.4 0-.7.1-1 .2v6.4c.3.1.6.2 1 .2zM1 156c1.9 0 3.4-1.5 3.4-3.4s-1.5-3.4-3.4-3.4c-.4 0-.7.1-1 .2v6.4c.3.1.6.2 1 .2z"
            class="st0"
          />
          <path
            fill="none"
            stroke="#f3b9c2"
            stroke-miterlimit="10"
            d="M0 346.5h199.1L0 2"
          />
        </svg>
      </div>
      <div className="ornaments-right">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 94.3 652.4">
          <defs />
          <g fill="none" stroke-miterlimit="10">
            <path stroke="#474f4f" d="M94.3 208.5L.2 302.7 93.4 651l.9-.9" />
            <path
              stroke="#e0592a"
              d="M94.3 1.4C46.5 45.2 16.5 108.2 16.5 178.1c0 70 30 132.9 77.8 176.7"
            />
          </g>
        </svg>
      </div>

      <div className="container-middle">
        <div className="heading-font font-semibold pb-16">
          <PerLineAnimate>
            <h1>Team </h1>
          </PerLineAnimate>
        </div>
        <div class="row-middle">
          <div className="team-desc leading-loose">
            <ParagraphAnimation>
              <p>
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
              </p>

              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
              </p>
            </ParagraphAnimation>
            <div className="see-more">
              <PerLineAnimate>
                <a href=""> See More Detail </a>
              </PerLineAnimate>
            </div>
          </div>
          <div className="team-video">
            <div className="w-full relative">
              <div
                ref={(el) => (animationwrapper = el)}
                className="pink-overlay"
              >
                <div
                  ref={(el) => (vidplayer = el)}
                  className="invisible opacity-0 team-video-box"
                >
                  <ReactPlayer
                    url="/bykesato.mp4"
                    width="100%"
                    height="100%"
                    className="react-player"
                    playing={putar}
                    onReady={() => setPutar(true)}
                    onStart={() => console.log('onStart callback')}
                    onPause={() => console.log('onPause callback')}
                    onEnded={() => console.log('onEnded callback')}
                    onError={() => console.log('onError callback')}
                    light="/kesato_cover.png"
                    playIcon={<PlayIcon />}
                    controls
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Team
