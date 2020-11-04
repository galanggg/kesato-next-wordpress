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
          url="/bykesato.mp4"
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

// const SvgPlay = styled.svg`
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   width: 80px;
//   height: 80px;
// `

// const HeroVideo = ({ videography }) => {
// const [showModal, setShowModal] = useState(false)
// return (
//   <section className="videography">
//     <Container>
//       <div className="mx-auto">
//         <div className="lg:px-16 px-6">
//           <div className="ml-5 mt-12">
//             <h1 className="font-bold text-5xl">Videography</h1>
//             <p className="max-w-4xl font-medium pt-8">
//               Whether you need lifestyle showreel, events showreel, or
//               corporate showreel, we have a proven track record to create it
//               perfectly. Our core strength lies in our ability to adapt to any
//               style, under any condition, to cover all our clients needs.
//             </p>
//           </div>
//         </div>
//         <div className="image-video pt-5 relative">
//           <img className="object-cover" src={videography} alt="video-image" />
//           <button
//             onClick={() => setShowModal(true)}
//             style={{ transition: 'all .15s ease' }}
//           >
//             <SvgPlay
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 512 512"
//               className="absolute"
//             >
//               <g fill="#FFF">
//                 <path d="M354.2 247.4l-135-92.4c-4.3-3-15.5-3-16.4 8.6v184.8c1 11.7 12.4 12 16.3 8.6l135.2-92.4c3.5-2 8.3-10.7 0-17.2zm-130.5 81.3V183.3l106 72.7-106 72.7z"></path>
//                 <path d="M256 11C121 11 11 121 11 256s110 245 245 245 245-110 245-245S391 11 256 11zm0 469C132.4 480 32 379.7 32 256S132.3 32 256 32s224 100.4 224 224-100.4 224-224 224z"></path>
//               </g>
//             </SvgPlay>
//           </button>
//           {showModal ? (
//             <>
//               <div
//                 className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
//                 onClick={() => setShowModal(false)}
//               >
//                 <div className="relative w-full lg:w-1/2">
//                   <iframe
//                     id="player"
//                     type="text/html"
//                     width="100%"
//                     height="390"
//                     src="http://www.youtube.com/embed/1dJ3-w7m3v8?enablejsapi=1&autoplay=1"
//                     frameborder="0"
//                   ></iframe>
//                   <button>
//                     <img
//                       style={{ top: -20, right: -20 }}
//                       className="absolute bg-gray-200 rounded-md"
//                       width="28px"
//                       height="28px"
//                       alt="close"
//                       src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGhlaWdodD0iNTEycHgiIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgd2lkdGg9IjUxMnB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48cGF0aCBkPSJNNDQzLjYsMzg3LjFMMzEyLjQsMjU1LjRsMTMxLjUtMTMwYzUuNC01LjQsNS40LTE0LjIsMC0xOS42bC0zNy40LTM3LjZjLTIuNi0yLjYtNi4xLTQtOS44LTRjLTMuNywwLTcuMiwxLjUtOS44LDQgIEwyNTYsMTk3LjhMMTI0LjksNjguM2MtMi42LTIuNi02LjEtNC05LjgtNGMtMy43LDAtNy4yLDEuNS05LjgsNEw2OCwxMDUuOWMtNS40LDUuNC01LjQsMTQuMiwwLDE5LjZsMTMxLjUsMTMwTDY4LjQsMzg3LjEgIGMtMi42LDIuNi00LjEsNi4xLTQuMSw5LjhjMCwzLjcsMS40LDcuMiw0LjEsOS44bDM3LjQsMzcuNmMyLjcsMi43LDYuMiw0LjEsOS44LDQuMWMzLjUsMCw3LjEtMS4zLDkuOC00LjFMMjU2LDMxMy4xbDEzMC43LDEzMS4xICBjMi43LDIuNyw2LjIsNC4xLDkuOCw0LjFjMy41LDAsNy4xLTEuMyw5LjgtNC4xbDM3LjQtMzcuNmMyLjYtMi42LDQuMS02LjEsNC4xLTkuOEM0NDcuNywzOTMuMiw0NDYuMiwzODkuNyw0NDMuNiwzODcuMXoiLz48L3N2Zz4="
//                     />
//                   </button>
//                 </div>
//               </div>
//               <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
//             </>
//           ) : null}
//         </div>
//       </div>
//     </Container>
//   </section>
// )
// }

// export default HeroVideo

// const opts = {
//     height: '390',
//     width: '100%',
//     playerVars: {
//       // https://developers.google.com/youtube/player_parameters
//       autoplay: 1,
//     },
//   };

// const HeroVideo = ({ videography }) => {
//   const [showModal, setShowModal] = useState(false)
//   return (
//     <section className="videography">
//       <Container>
//         <div className="mx-auto">
//             <div className="video">
//             {/* <iframe
//                       id="player"
//                       type="text/html"
//                       width="100%"
//                       height="390"
//                       src="http://www.youtube.com/embed/1dJ3-w7m3v8?enablejsapi=1&autoplay=1"
//                       frameborder="0"
//                     ></iframe> */}
//                     <YouTube videoId="1dJ3-w7m3v8" opts={opts}/>;
//                 {/* <img src="https://next.kesato.io/wp-content/uploads/2020/07/video.png"/> */}
//                 <div className="player-btn">
//                 <svg version="1.1" x="0px" y="0px"
// 	 viewBox="0 0 99.6 99.6">
// <g>
// 	<g>
// 		<g>
// 			<path class="st0" d="M49.8,99.6c-0.4,0-0.9,0-1.3,0C21.1,98.9-0.7,76,0,48.5C0.7,21.3,22.6,0,49.8,0c0.4,0,0.9,0,1.3,0
// 				c13.3,0.3,25.7,5.8,34.8,15.5c9.2,9.6,14,22.3,13.7,35.6C98.9,78.3,77,99.6,49.8,99.6z M49.8,2C23.7,2,2.7,22.5,2,48.6
// 				c-0.7,26.3,20.2,48.3,46.6,49c26.7,0.7,48.3-20,49-46.6c0.3-12.8-4.3-24.9-13.1-34.1S63.8,2.3,51,2C50.6,2,50.2,2,49.8,2z"/>
// 		</g>
// 	</g>
// 	<g>
// 		<path class="st0" d="M33.1,76.4V23.2l46,26.6L33.1,76.4z M35.1,26.7v46.2l40-23.1L35.1,26.7z"/>
// 	</g>
// </g>
// </svg>

//                 </div>
//             </div>

//         </div>
//       </Container>
//     </section>
//   )
// }

// export default HeroVideo
