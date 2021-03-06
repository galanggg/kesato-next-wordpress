import AgencyLogoAnimate from './AgencyLogoAnimate'
import Link from 'next/link'
import ImageAnimation from './ImageAnimation'
import ParagraphAnimation from './ParagraphAnimation'
import PerLineAnimate from './PerLineAnimate'

const AboutUs = () => {
  return (
    <section>
      <div className="breadcrumbs lg:px-0 px-8 lg:text-base text-sm">
        <nav class="bg-grey-light rounded font-sans w-full ">
          <ol class="list-reset flex text-grey-dark">
            <li>
              <Link href="/">
                <a class="text-blue">home</a>
              </Link>
            </li>
            <li>
              <span class="mx-2">/</span>
            </li>
            <li>
              <Link href="/">
                <a class="text-blue">about us</a>
              </Link>
            </li>
          </ol>
        </nav>
      </div>
      <div className="relative lg:pt-32 pt-8 lg:px-0 px-8 ">
        <div className="svg-mb">
          <div className="about-ornaments-left ">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 190.2 567.7">
              <g fill="none" stroke-miterlimit="10">
                <path stroke="#474f4f" d="M0 567.7l190.2-190.1L0 187" />
                <path
                  d="M0 377.6C73.1 346 124.3 273.4 124.3 188.7 124.3 104.1 73.1 31.4 0-.2"
                  stroke="#e0592a"
                />
              </g>
            </svg>
          </div>
        </div>

        <div className="about-container-middle">
          <div className="heading-font font-semibold lg:pb-16 pb-8">
            <PerLineAnimate>
              <h1>About Us </h1>
            </PerLineAnimate>
          </div>
          <div className="row-middle">
            <div className="relative lg:w-6/12 w-full order-1 md:order-2">
              <div className="about-pict">
                <ImageAnimation source="about-team.jpg" />
              </div>
              <div className="svg-mb">
                <AgencyLogoAnimate>
                  {/* <div className="agency-logo-about"> */}
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
            <div className="lg:w-6/12 w-full lg:pr-6 lg:leading-loose leading-relaxed order-2 lg:pt-0 pt-8 md:order-1">
              <ParagraphAnimation>
                <p className="pb-5">
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s. When an unknown printer took a galley of type
                  and scrambled.
                </p>

                <p className="pb-5">
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took.
                </p>

                <p>
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a gallexy of
                  type and scrambled it to make a type specimen book.
                </p>
              </ParagraphAnimation>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
