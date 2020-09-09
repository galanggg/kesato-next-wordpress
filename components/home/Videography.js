import React, { useState } from 'react'
import Container from '../Container'
import styled from 'styled-components'

const SvgPlay = styled.svg`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
`

const Videography = ({ videography }) => {
  const [showModal, setShowModal] = useState(false)
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
          <div className="image-video pt-5 relative">
            <img className="object-cover" src={videography} alt="video-image" />
            <button
              onClick={() => setShowModal(true)}
              style={{ transition: 'all .15s ease' }}
            >
              <SvgPlay
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="absolute"
              >
                <g fill="#FFF">
                  <path d="M354.2 247.4l-135-92.4c-4.3-3-15.5-3-16.4 8.6v184.8c1 11.7 12.4 12 16.3 8.6l135.2-92.4c3.5-2 8.3-10.7 0-17.2zm-130.5 81.3V183.3l106 72.7-106 72.7z"></path>
                  <path d="M256 11C121 11 11 121 11 256s110 245 245 245 245-110 245-245S391 11 256 11zm0 469C132.4 480 32 379.7 32 256S132.3 32 256 32s224 100.4 224 224-100.4 224-224 224z"></path>
                </g>
              </SvgPlay>
            </button>
            {showModal ? (
              <>
                <div
                  className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                  onClick={() => setShowModal(false)}
                >
                  <div className="relative w-full lg:w-1/2">
                    <iframe
                      id="player"
                      type="text/html"
                      width="100%"
                      height="390"
                      src="http://www.youtube.com/embed/1dJ3-w7m3v8?enablejsapi=1&autoplay=1"
                      frameborder="0"
                    ></iframe>
                    <button>
                      <img
                        style={{ top: -20, right: -20 }}
                        className="absolute bg-gray-200 rounded-md"
                        width="28px"
                        height="28px"
                        alt="close"
                        src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGhlaWdodD0iNTEycHgiIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgd2lkdGg9IjUxMnB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48cGF0aCBkPSJNNDQzLjYsMzg3LjFMMzEyLjQsMjU1LjRsMTMxLjUtMTMwYzUuNC01LjQsNS40LTE0LjIsMC0xOS42bC0zNy40LTM3LjZjLTIuNi0yLjYtNi4xLTQtOS44LTRjLTMuNywwLTcuMiwxLjUtOS44LDQgIEwyNTYsMTk3LjhMMTI0LjksNjguM2MtMi42LTIuNi02LjEtNC05LjgtNGMtMy43LDAtNy4yLDEuNS05LjgsNEw2OCwxMDUuOWMtNS40LDUuNC01LjQsMTQuMiwwLDE5LjZsMTMxLjUsMTMwTDY4LjQsMzg3LjEgIGMtMi42LDIuNi00LjEsNi4xLTQuMSw5LjhjMCwzLjcsMS40LDcuMiw0LjEsOS44bDM3LjQsMzcuNmMyLjcsMi43LDYuMiw0LjEsOS44LDQuMWMzLjUsMCw3LjEtMS4zLDkuOC00LjFMMjU2LDMxMy4xbDEzMC43LDEzMS4xICBjMi43LDIuNyw2LjIsNC4xLDkuOCw0LjFjMy41LDAsNy4xLTEuMyw5LjgtNC4xbDM3LjQtMzcuNmMyLjYtMi42LDQuMS02LjEsNC4xLTkuOEM0NDcuNywzOTMuMiw0NDYuMiwzODkuNyw0NDMuNiwzODcuMXoiLz48L3N2Zz4="
                      />
                    </button>
                  </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
              </>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Videography
