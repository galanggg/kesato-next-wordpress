import { useState } from 'react'

const JoinUs = () => {
  const [input, setInput] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleChange = (e) =>
    setInput({ ...input, [e.target.name]: e.target.value })

  return (
    <section className="team-section">
      <div className="ornaments-left">
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
      <div className="ornaments-right">
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

      <div className="container-middle">
        <div className="team-title">
          <h1>Join Us! </h1>
        </div>
        <div className="join-desc">
          <p>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. Lorem Ipsum is simply
            dummy text of the printing and typesetting industry
          </p>
        </div>
        <form action>
          <div className="pt-10 flex row">
            <div className="w-4/12 join-col-left">
              <div className="job-list">
                <div className="job-tittle">
                  <p> I would like to be a Kesato ...</p>
                </div>
                <div>
                  <div>
                    <input type="radio" value="Male" name="gender" /> Web
                    Developer
                  </div>
                  <div>
                    <input type="radio" value="Female" name="gender" /> Graphic
                    Designer
                  </div>
                  <div>
                    <input type="radio" value="Other" name="gender" /> SEO
                  </div>
                  <div>
                    <input type="radio" value="Other" name="gender" /> Community
                    Manager
                  </div>
                  <div>
                    <input type="radio" value="Other" name="gender" />{' '}
                    Photographer
                  </div>
                  <div>
                    <input type="radio" value="Other" name="gender" />{' '}
                    Videographer
                  </div>
                </div>
              </div>
            </div>
            <div className=" w-8/12 join-col-right">
              <div className="pb-5">
                <input
                  className="h-12 w-full border-solid border border-black bg-transparent"
                  type="text"
                  onChange={handleChange}
                  placeholder="your name"
                  name="name"
                />
              </div>
              <div className="pb-5">
                <input
                  className="h-12 w-full border-solid border border-black bg-transparent"
                  type="text"
                  onChange={handleChange}
                  placeholder="your name"
                  name="email"
                />
              </div>
              <div className="pb-5">
                <input
                  className="h-12 w-full border-solid border border-black bg-transparent"
                  type="text"
                  onChange={handleChange}
                  placeholder="your name"
                  name="phone"
                />
              </div>
              <div>
                <textarea
                  className="w-full border-solid border border-black bg-transparent "
                  onChange={handleChange}
                  placeholder="your name"
                  name="message"
                  rows="5"
                ></textarea>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}

export default JoinUs
