import { useState, useEffect } from 'react'
import AgencyLogoAnimate from '../AgencyLogoAnimate'
import ParagraphAnimation from '../ParagraphAnimation'
import PerLineAnimate from '../PerLineAnimate'

const JoinUs = () => {
  const [input, setInput] = useState({
    yourname: '',
    email: '',
    phone: '',
    message: '',
    jobs: '',
  })

  const handleChange = (e) =>
    setInput({ ...input, [e.target.name]: e.target.value })

  return (
    <section className="relative lg:pt-40 pt-8 lg:px-0 px-8">
      <div className="svg-mb">
        <div className="join-ornaments-left">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Layer_1"
            x="0"
            y="0"
            version="1.1"
            viewBox="0 0 199.5 332.4"
            fill="#3f7fc0"
          >
            <pattern
              id="New_Pattern_3"
              width="143.1"
              height="178.7"
              y="332.4"
              overflow="visible"
              patternUnits="userSpaceOnUse"
              viewBox="5 -178.7 143.1 178.7"
            >
              <path d="M5-178.7h143.1V0H5z" class="st0" />
              <circle cx="119.4" cy="-17.9" r="5" class="st1" />
              <circle cx="83.7" cy="-17.9" r="5" class="st1" />
              <circle cx="47.9" cy="-17.9" r="5" class="st1" />
              <circle cx="12.1" cy="-17.9" r="5" class="st1" />
              <circle cx="133.8" cy="-53.6" r="5" class="st1" />
              <circle cx="98" cy="-53.6" r="5" class="st1" />
              <circle cx="62.2" cy="-53.6" r="5" class="st1" />
              <circle cx="26.4" cy="-53.6" r="5" class="st1" />
              <circle cx="148.1" cy="-89.3" r="5" class="st1" />
              <circle cx="112.3" cy="-89.3" r="5" class="st1" />
              <circle cx="76.5" cy="-89.3" r="5" class="st1" />
              <circle cx="40.7" cy="-89.3" r="5" class="st1" />
              <circle cx="5" cy="-89.3" r="5" class="st1" />
              <circle cx="126.6" cy="-125.1" r="5" class="st1" />
              <circle cx="90.8" cy="-125.1" r="5" class="st1" />
              <circle cx="55.1" cy="-125.1" r="5" class="st1" />
              <circle cx="19.3" cy="-125.1" r="5" class="st1" />
              <circle cx="140.9" cy="-160.8" r="5" class="st1" />
              <circle cx="105.1" cy="-160.8" r="5" class="st1" />
              <circle cx="69.4" cy="-160.8" r="5" class="st1" />
              <circle cx="33.6" cy="-160.8" r="5" class="st1" />
            </pattern>
            <pattern
              id="SVGID_1_"
              patternTransform="matrix(.3275 0 0 .3417 -5590.916 -5458.575)"
              xlinkHref="#New_Pattern_3"
            />
            <path
              fill="url(#SVGID_1_)"
              d="M-1432.6-250.7v-4h239.5l156.5 282.6-116.3 4.2-150.6-272c-5.6-6.5-12.3-10.6-19.5-10.6h-109.6v-.2z"
            />
            <path d="M-1902-792.2h695v1825h-695z" class="st0" />
            <path
              d="M196 331.7h3.5l-1.4-2.5c-1 .5-1.8 1.4-2.1 2.5zM180 305.3c0 2.1 1.6 3.8 3.7 3.8 1 0 2-.4 2.6-1.2l-3.5-6.3c-1.6.4-2.8 1.9-2.8 3.7zM73.1 116.9c2 0 3.7-1.7 3.7-3.8 0-2.1-1.6-3.8-3.7-3.8s-3.7 1.7-3.7 3.8c0 2.1 1.6 3.8 3.7 3.8zM155.4 252l-3-5.4h-.3c-2 0-3.7 1.7-3.7 3.8 0 2.1 1.6 3.8 3.7 3.8 1.4 0 2.7-.9 3.3-2.2zM129.4 250.4c0-2.1-1.6-3.8-3.7-3.8s-3.7 1.7-3.7 3.8c0 2.1 1.6 3.8 3.7 3.8s3.7-1.7 3.7-3.8zM103.1 250.4c0-2.1-1.6-3.8-3.7-3.8s-3.7 1.7-3.7 3.8c0 2.1 1.6 3.8 3.7 3.8s3.7-1.7 3.7-3.8zM76.7 250.4c0-2.1-1.6-3.8-3.7-3.8s-3.7 1.7-3.7 3.8c0 2.1 1.6 3.8 3.7 3.8s3.7-1.7 3.7-3.8zM139.8 223.9l-2.6-4.7c-.3-.1-.6-.1-.9-.1-2 0-3.7 1.7-3.7 3.8 0 2.1 1.6 3.8 3.7 3.8 1.7 0 3.1-1.2 3.5-2.8zM113.6 222.9c0-2.1-1.6-3.8-3.7-3.8s-3.7 1.7-3.7 3.8c0 2.1 1.6 3.8 3.7 3.8s3.7-1.7 3.7-3.8zM87.3 222.9c0-2.1-1.6-3.8-3.7-3.8s-3.7 1.7-3.7 3.8c0 2.1 1.6 3.8 3.7 3.8s3.7-1.7 3.7-3.8zM120.5 199.3c2 0 3.6-1.6 3.6-3.7l-1.9-3.5c-.5-.3-1.1-.5-1.7-.5-2 0-3.7 1.7-3.7 3.8 0 2.2 1.7 3.9 3.7 3.9zM90.5 195.5c0 2.1 1.6 3.8 3.7 3.8 2 0 3.7-1.7 3.7-3.8 0-2.1-1.6-3.8-3.7-3.8s-3.7 1.7-3.7 3.8zM104.7 171.8c2 0 3.7-1.7 3.7-3.8 0-.5-.1-.9-.3-1.4l-.5-1c-.7-.9-1.7-1.5-2.9-1.5-2 0-3.7 1.7-3.7 3.8s1.7 3.9 3.7 3.9zM74.7 168c0 2.1 1.6 3.8 3.7 3.8s3.7-1.7 3.7-3.8-1.6-3.8-3.7-3.8-3.7 1.7-3.7 3.8zM88.9 144.4c2 0 3.7-1.7 3.7-3.8 0-2.1-1.6-3.8-3.7-3.8s-3.7 1.7-3.7 3.8c0 2.1 1.6 3.8 3.7 3.8zM173.2 328.9c-1.7 0-3.2 1.3-3.5 2.9h7.1c-.5-1.6-1.9-2.9-3.6-2.9zM146.8 328.9c-1.8 0-3.2 1.3-3.6 3h7.2c-.4-1.7-1.8-3-3.6-3zM120.5 328.9c-1.8 0-3.3 1.4-3.6 3.1h7.2c-.4-1.7-1.8-3.1-3.6-3.1zM94.1 328.9c-1.8 0-3.3 1.4-3.6 3.2h7.2c-.2-1.8-1.7-3.2-3.6-3.2zM157.4 301.5c-2 0-3.7 1.7-3.7 3.8 0 2.1 1.6 3.8 3.7 3.8 2 0 3.7-1.7 3.7-3.8-.1-2.1-1.7-3.8-3.7-3.8zM131 301.5c-2 0-3.7 1.7-3.7 3.8 0 2.1 1.6 3.8 3.7 3.8s3.7-1.7 3.7-3.8c0-2.1-1.7-3.8-3.7-3.8zM104.7 301.5c-2 0-3.7 1.7-3.7 3.8 0 2.1 1.6 3.8 3.7 3.8s3.7-1.7 3.7-3.8c-.1-2.1-1.7-3.8-3.7-3.8zM78.3 301.5c-2 0-3.7 1.7-3.7 3.8 0 2.1 1.6 3.8 3.7 3.8s3.7-1.7 3.7-3.8c0-2.1-1.6-3.8-3.7-3.8zM170.9 280l-3.3-6c-1.9.2-3.3 1.8-3.3 3.8 0 2.1 1.6 3.8 3.7 3.8 1.1 0 2.2-.6 2.9-1.6zM145.2 277.8c0-2.1-1.6-3.8-3.7-3.8-2 0-3.7 1.7-3.7 3.8 0 2.1 1.6 3.8 3.7 3.8s3.7-1.7 3.7-3.8zM118.9 277.8c0-2.1-1.6-3.8-3.7-3.8s-3.7 1.7-3.7 3.8c0 2.1 1.6 3.8 3.7 3.8s3.7-1.7 3.7-3.8zM92.5 277.8c0-2.1-1.6-3.8-3.7-3.8s-3.7 1.7-3.7 3.8c0 2.1 1.6 3.8 3.7 3.8s3.7-1.7 3.7-3.8zM43.1 113.1c0 2.1 1.6 3.8 3.7 3.8s3.7-1.7 3.7-3.8c0-2.1-1.6-3.8-3.7-3.8s-3.7 1.7-3.7 3.8zM16.7 113.1c0 2.1 1.6 3.8 3.7 3.8s3.7-1.7 3.7-3.8c0-2.1-1.6-3.8-3.7-3.8s-3.7 1.7-3.7 3.8zM57.3 89.5c2 0 3.7-1.7 3.7-3.8 0-2.1-1.6-3.8-3.7-3.8s-3.7 1.7-3.7 3.8c0 2.1 1.6 3.8 3.7 3.8zM27.3 85.7c0 2.1 1.6 3.8 3.7 3.8s3.7-1.7 3.7-3.8c0-2.1-1.6-3.8-3.7-3.8s-3.7 1.7-3.7 3.8zM8.2 85.7c0-2.1-1.6-3.8-3.7-3.8S.8 83.6.8 85.7c0 2.1 1.6 3.8 3.7 3.8s3.7-1.7 3.7-3.8z"
              class="st1"
            />
            <ellipse cx="41.5" cy="58.2" class="st1" rx="3.7" ry="3.8" />
            <path
              d="M11.5 58.2c0 2.1 1.6 3.8 3.7 3.8s3.7-1.7 3.7-3.8c0-2.1-1.6-3.8-3.7-3.8s-3.7 1.7-3.7 3.8z"
              class="st1"
            />
            <ellipse cx="25.7" cy="30.8" class="st1" rx="3.7" ry="3.8" />
            <path
              d="M3 30.8c0-1.9-1.3-3.4-3-3.7v7.5c1.7-.4 3-2 3-3.8zM9.8 7.1c2 0 3.7-1.7 3.7-3.8S11.9-.5 9.8-.5c-2 0-3.7 1.7-3.7 3.8s1.7 3.8 3.7 3.8zM50.4 250.4c0-2.1-1.6-3.8-3.7-3.8s-3.7 1.7-3.7 3.8c0 2.1 1.6 3.8 3.7 3.8s3.7-1.7 3.7-3.8zM24 250.4c0-2.1-1.6-3.8-3.7-3.8s-3.7 1.7-3.7 3.8c0 2.1 1.6 3.8 3.7 3.8s3.7-1.7 3.7-3.8zM60.9 222.9c0-2.1-1.6-3.8-3.7-3.8s-3.7 1.7-3.7 3.8c0 2.1 1.6 3.8 3.7 3.8s3.7-1.7 3.7-3.8z"
              class="st1"
            />
            <ellipse cx="30.9" cy="222.9" class="st1" rx="3.7" ry="3.8" />
            <path
              d="M8.2 222.9c0-2.1-1.6-3.8-3.7-3.8s-3.7 1.7-3.7 3.8c0 2.1 1.6 3.8 3.7 3.8s3.7-1.7 3.7-3.8z"
              class="st1"
            />
            <ellipse cx="67.8" cy="195.5" class="st1" rx="3.7" ry="3.8" />
            <ellipse cx="41.5" cy="195.5" class="st1" rx="3.7" ry="3.8" />
            <path
              d="M15.1 199.3c2 0 3.7-1.7 3.7-3.8 0-2.1-1.6-3.8-3.7-3.8s-3.7 1.7-3.7 3.8c.1 2.1 1.7 3.8 3.7 3.8zM48.3 168c0 2.1 1.6 3.8 3.7 3.8 2 0 3.7-1.7 3.7-3.8s-1.6-3.8-3.7-3.8c-2 0-3.7 1.7-3.7 3.8zM25.7 164.2c-2 0-3.7 1.7-3.7 3.8s1.6 3.8 3.7 3.8 3.7-1.7 3.7-3.8-1.7-3.8-3.7-3.8zM3 168c0-1.9-1.3-3.4-3-3.7v7.5c1.7-.4 3-1.9 3-3.8zM58.9 140.6c0 2.1 1.6 3.8 3.7 3.8 2 0 3.7-1.7 3.7-3.8 0-2.1-1.6-3.8-3.7-3.8s-3.7 1.7-3.7 3.8zM32.5 140.6c0 2.1 1.6 3.8 3.7 3.8s3.7-1.7 3.7-3.8c0-2.1-1.6-3.8-3.7-3.8s-3.7 1.7-3.7 3.8zM9.8 136.8c-2 0-3.7 1.7-3.7 3.8 0 2.1 1.6 3.8 3.7 3.8 2 0 3.7-1.7 3.7-3.8 0-2.1-1.6-3.8-3.7-3.8zM67.8 328.9c-1.9 0-3.4 1.5-3.6 3.3h7.2c-.2-1.8-1.8-3.3-3.6-3.3zM41.5 328.9c-1.9 0-3.4 1.5-3.6 3.4h7.2c-.2-1.9-1.8-3.4-3.6-3.4zM15.1 328.9c-1.9 0-3.5 1.6-3.6 3.5h7.3c-.2-1.9-1.8-3.5-3.7-3.5zM52 301.5c-2 0-3.7 1.7-3.7 3.8 0 2.1 1.6 3.8 3.7 3.8 2 0 3.7-1.7 3.7-3.8-.1-2.1-1.7-3.8-3.7-3.8zM25.7 301.5c-2 0-3.7 1.7-3.7 3.8 0 2.1 1.6 3.8 3.7 3.8s3.7-1.7 3.7-3.8c-.1-2.1-1.7-3.8-3.7-3.8zM3 305.3c0-1.9-1.3-3.4-3-3.7v7.5c1.7-.4 3-2 3-3.8zM66.2 277.8c0-2.1-1.6-3.8-3.7-3.8-2 0-3.7 1.7-3.7 3.8 0 2.1 1.6 3.8 3.7 3.8 2 0 3.7-1.7 3.7-3.8zM39.8 277.8c0-2.1-1.6-3.8-3.7-3.8s-3.7 1.7-3.7 3.8c0 2.1 1.6 3.8 3.7 3.8s3.7-1.7 3.7-3.8zM13.5 277.8c0-2.1-1.6-3.8-3.7-3.8-2 0-3.7 1.7-3.7 3.8 0 2.1 1.6 3.8 3.7 3.8s3.7-1.7 3.7-3.8z"
              class="st1"
            />
          </svg>
        </div>
      </div>
      <div className="svg-mb">
        <div className="join-ornaments-right">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96.3 327.4">
            <defs />
            <g fill="none" stroke-miterlimit="10">
              <path stroke="#85c6a5" d="M96.3 147.1H2v179.2h94.3" />
              <path
                stroke="#e0592a"
                d="M96.3 1.1c-33.9 24-56.1 63.5-56.1 108.2s22.2 84.2 56.1 108.2"
              />
            </g>
          </svg>
        </div>
      </div>

      <div className="container-middle">
        <div className="heading-font font-bold lg:pb-16 pb-8">
          <PerLineAnimate>
            <h1>Join Us! </h1>
          </PerLineAnimate>
        </div>

        <div className="join-desc">
          <ParagraphAnimation>
            <p>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. Lorem Ipsum is simply
              dummy text of the printing and typesetting industry
            </p>
          </ParagraphAnimation>
        </div>
        <form
          action="https://getform.io/f/86928a2e-6219-451f-800b-9d219fdbd908"
          method="POST"
          enctype="multipart/form-data"
        >
          <div className="pt-10 flex flex-wrap row">
            <div className="relative lg:w-8/12 w-full join-col-right order-1 md:order-2 ">
              <div className="pb-5">
                <PerLineAnimate>
                  <input
                    className="h-12 w-full border-solid border border-black bg-transparent"
                    type="text"
                    onChange={handleChange}
                    placeholder="Your Name"
                    name="yourname"
                  />
                </PerLineAnimate>
              </div>
              <div className="pb-5">
                <PerLineAnimate>
                  <input
                    className="h-12 w-full border-solid border border-black bg-transparent"
                    type="text"
                    onChange={handleChange}
                    placeholder="Email"
                    name="email"
                  />
                </PerLineAnimate>
              </div>
              <div className="pb-5">
                <PerLineAnimate>
                  <input
                    className="h-12 w-full border-solid border border-black bg-transparent"
                    type="text"
                    onChange={handleChange}
                    placeholder="Phone Number"
                    name="phone"
                  />
                </PerLineAnimate>
              </div>
              <div>
                <PerLineAnimate>
                  <textarea
                    className="w-full border-solid border border-black bg-transparent pt-3"
                    onChange={handleChange}
                    placeholder="Your Message"
                    name="message"
                    rows="10"
                  ></textarea>
                </PerLineAnimate>
              </div>
              <div className="svg-mb">
                <AgencyLogoAnimate>
                  {/* <div className="agency-logo-join"> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    id="Layer_1"
                    x="0"
                    y="0"
                    version="1.1"
                    viewBox="0 0 184.5 168"
                    fill="#3f7fc1"
                  >
                    <path
                      d="M100.5 168h-2.2c-46.3-1.2-83-39.8-81.8-86.1C17.7 36 54.6 0 100.5 0h2.2c22.4.6 43.3 9.8 58.7 26.1 15.5 16.3 23.7 37.6 23.1 60-1.2 45.9-38.1 81.9-84 81.9zm0-164.6C56.4 3.4 21 37.9 19.9 82c-1.1 44.4 34.1 81.5 78.5 82.6 45 1.2 81.5-33.8 82.7-78.6.5-21.5-7.3-42-22.2-57.6s-34.8-24.5-56.4-25h-2z"
                      class="st0"
                    />
                    <path
                      d="M78.6 42.5l-5.9-16.9 6.1-2.1c4.8-1.7 9.5.2 11.3 5.6 1.9 5.4-.6 9.7-5.5 11.4l-6 2zm4.9-5.1c2.8-1 4.5-3.5 3.2-7.2-1.3-3.7-4.2-4.6-6.9-3.7l-2.7.9 3.7 10.8 2.7-.8zM96.7 19.2c1.2-.1 2.1.8 2.2 2 .1 1.1-.8 2.1-2 2.2-1.1.1-2.1-.8-2.2-1.9 0-1.3.8-2.3 2-2.3zm-.6 18.7l-.7-12.4 3.4-.2.7 12.4-3.4.2zM105.4 37.7c0 1.4.9 2.6 2.4 2.8 2.1.4 3.5-.4 3.9-2.8l.2-.9c-.6.7-1.9 1.3-3.7.9-3.3-.6-5.2-3.6-4.6-7 .6-3.2 3.4-5.5 6.8-4.9 1.9.4 2.9 1.4 3.2 2.3l.3-1.4 3.2.6-2 10.9c-.6 3.4-3 6.1-7.6 5.2-3.4-.6-5.2-3.1-5.1-5.5l3-.2zm7.4-5.2c.3-1.9-.7-3.3-2.3-3.6-1.6-.3-3.2.7-3.5 2.5-.4 1.9.6 3.3 2.4 3.7 1.6.2 3-.8 3.4-2.6zM118.1 41.1l5.2-11.3 3.1 1.4-5.2 11.3-3.1-1.4zm9.3-16.2c1.1.5 1.5 1.7 1 2.8-.5 1-1.7 1.5-2.7 1-1-.5-1.5-1.7-1-2.7.4-1.1 1.6-1.6 2.7-1.1zM135.3 36.6l2.1 1.4-1.7 2.4-2-1.4-3 4.3c-.6.9-.4 1.5.4 2 .3.2.7.5.9.5l-1.6 2.3c-.3-.1-.9-.3-1.7-.8-2-1.4-2.4-3.4-1-5.4l3.3-4.7-1.8-1.3 1.7-2.4.5.4c1.1.8 2.1.4 2.7-.5l1-1.4 2.5 1.7-2.3 2.9zM140 47.9l2.3 2c.5.5 1 .4 1.3.1.7-.6.8-1.6-.1-2.6-.9-1.1-2.2-1.1-3.1-.5l-1.4-2.7c1.6-1.1 4.4-1.1 6.6 1.4 2.6 3 1.8 5.6-.1 7.2l-4.7 4c-.5.4-1.1 1.1-1.4 1.4l-2-2.4c.2-.3.7-.8 1.1-1.1-1.2.2-2.6-.2-3.8-1.6-1.7-2-1.4-4.4.1-5.7 1.6-1.4 3.6-.9 5.2.5zm.9 4.4l.4-.4-2.1-1.9c-.7-.6-1.5-.8-2.2-.2-.6.5-.8 1.3-.1 2.2 1 1.2 2.4 1.7 4 .3zM140.9 61.3l16.3-8.4 1.5 3-16.3 8.4-1.5-3zM153.8 77.7c.3 2.1-1.3 4.1-3.4 4.3-2.1.2-4-1.3-4.3-3.4-.2-2.1 1.3-4 3.4-4.3 2.2-.2 4.1 1.3 4.3 3.4zM146.3 105.5l2.6-6.8-3.3-2.9 1.3-3.4 14.3 12.9-1.5 3.8-19.2-.1 1.4-3.5h4.4zm5.1-4.6l-1.8 4.6 7.2.1-5.4-4.7zM136.4 113.6c-1.1-.8-2.6-.7-3.7.5-1.5 1.5-1.5 3.1.2 4.8l.7.6c-.2-.9 0-2.3 1.3-3.6 2.3-2.4 5.9-2.4 8.4 0 2.4 2.3 2.7 5.9.3 8.4-1.4 1.4-2.8 1.6-3.7 1.4l1.1 1-2.3 2.3-8-7.7c-2.5-2.4-3.4-5.9-.2-9.2 2.4-2.5 5.5-2.6 7.4-1.2l-1.5 2.7zm.3 9c1.4 1.3 3.2 1.2 4.3.1 1.2-1.2 1.2-3-.2-4.3-1.4-1.4-3.1-1.3-4.3 0-1.2 1.2-1.2 2.9.2 4.2zM118.8 130.8c-.5-2.2.4-4.7 3.1-6.2 3-1.6 6.8-.9 8.8 2.8 1.9 3.5.5 7.2-2.3 8.7-3.4 1.8-6.6.7-8.5-2.8-.2-.4-.4-.9-.4-.9l7.8-4.2c-.8-1.4-2.6-1.8-4.1-1-1.4.7-1.8 1.8-1.6 3l-2.8.6zm4.7 2.1c.6 1.1 1.9 1.8 3.6.8 1.5-.8 1.8-2.4 1.3-3.5l-4.9 2.7zM111.1 129.1l3.3-.6 2.3 12.2-3.2.6-.3-1.5c-.5 1.4-1.9 2.3-3.2 2.5-3 .6-4.8-1.3-5.3-4l-1.4-7.7 3.3-.6 1.3 7.1c.3 1.4 1.1 2.3 2.7 2 1.4-.3 2.1-1.5 1.8-3l-1.3-7zM96.7 136.5c.3-2.2-1-3.7-2.7-3.9-1.7-.2-2.7.8-3.1 1.7L88 133c.8-2 3-3.9 6.3-3.4 3.6.4 6.2 3.6 5.7 7.4-.5 3.8-3.6 6.2-7.2 5.8-3.4-.4-5-2.7-5.3-4.9l3.1-.6c.2 1.1.8 2.2 2.5 2.4 1.7.1 3.3-1 3.6-3.2zM87.7 123.7l-5.3 4.7.4 12.1-3.4-1.5v-8l-5.8 5.4-3.3-1.5 14.2-12.6 3.2 1.4z"
                      class="st0"
                    />
                    <g>
                      <path d="M0 81.2h61.9v3.4H0z" class="st0" />
                    </g>
                  </svg>
                  {/* </div> */}
                </AgencyLogoAnimate>
              </div>
            </div>
            <div className="lg:w-4/12 w-full join-col-left order-2 md:order-1 ">
              <div className="job-list">
                <div className="pb-2 job-tittle lg:pt-0 pt-4">
                  <ParagraphAnimation>
                    <p> I would like to be a Kesato ...</p>
                  </ParagraphAnimation>
                </div>
                <div>
                  <div className="pb-2">
                    <PerLineAnimate>
                      <input type="radio" value="Web Developer" name="jobs" />{' '}
                      Web Developer
                    </PerLineAnimate>
                  </div>
                  <div className="pb-2">
                    <PerLineAnimate>
                      <input
                        type="radio"
                        value="Graphic Designer"
                        name="jobs"
                      />{' '}
                      Graphic Designer
                    </PerLineAnimate>
                  </div>
                  <div className="pb-2">
                    <PerLineAnimate>
                      <input type="radio" value="SEO" name="jobs" /> SEO
                    </PerLineAnimate>
                  </div>
                  <div className="pb-2">
                    <PerLineAnimate>
                      <input
                        type="radio"
                        value="Community Manger"
                        name="jobs"
                      />{' '}
                      Community Manager
                    </PerLineAnimate>
                  </div>
                </div>
                <div>
                  <div className="lg:pt-10 pt-4 pb-5 styling-files">
                    <PerLineAnimate>
                      <input
                        type="file"
                        className="cv-uploader"
                        id="file"
                        name="userfile"
                      />
                      <label for="file"> Upload your CV</label>
                    </PerLineAnimate>
                  </div>
                </div>
                <div>
                  <PerLineAnimate>
                    <button
                      className="apply-btn-mb border-solid border border-black bg-transparent lg:py-3 lg:px-8 py-4 px-32 "
                      // onClick={submitAll}
                      name="submit"
                      type="submit"
                    >
                      Apply
                    </button>
                  </PerLineAnimate>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}

export default JoinUs
