import AgencyLogoAnimate from './AgencyLogoAnimate'
import HeaderAnimation from './HeaderAnimation'
import ImageAnimation from './ImageAnimation'
import ParagraphAnimation from './ParagraphAnimation'

const BrandIdentity = () => {
  return (
    <section id="brandidentity-id">
      <div className="breadcrumbs">
        <nav class="bg-grey-light rounded font-sans w-full ">
          <ol class="list-reset flex text-grey-dark">
            <li>
              <a href="#" class="text-blue">
                home
              </a>
            </li>
            <li>
              <span class="mx-2">/</span>
            </li>
            <li>
              <a href="#" class="text-blue">
                services
              </a>
            </li>
            <li>
              <span class="mx-2">/</span>
            </li>
            <li>
              <a href="#" class="text-blue ">
                creative
              </a>
            </li>
            
          </ol>
        </nav>
      </div>
      <div className="relative pt-32">
        <div className="about-ornaments-left">
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

        <div className="about-container-middle">
          <div className="heading-font font-semibold pb-16 ">
            <HeaderAnimation source="Brand Identity" />
          </div>
          <div className="row-middle">
            <div className="w-6/12 pr-8 leading-loose">
              <ParagraphAnimation>
                <p className="pb-5">
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since.
                </p>
                <p className="pb-5">
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book.
                </p>
                <p>
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book.
                </p>
              </ParagraphAnimation>
            </div>
            <div className="relative w-6/12">
              <div className="w-full">
                <ImageAnimation source="brand.jpg" />
              </div>
              <AgencyLogoAnimate>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  id="Layer_1"
                  x="0"
                  y="0"
                  version="1.1"
                  viewBox="0 0 152.1 138.5"
                  fill="#e26836"
                >
                  <path
                    d="M82.9 138.5c-24.1 0-46.2-12.2-58.9-32.7-9.7-15.8-12.7-34.3-8.5-52.4 4.2-18 15.2-33.3 30.9-43C57.4 3.6 70 0 82.9 0 107 0 129 12.2 141.7 32.7c9.7 15.7 12.8 34.3 8.5 52.3-4.2 18-15.2 33.3-30.9 43-10.9 6.9-23.5 10.5-36.4 10.5zm0-135.7c-12.4 0-24.5 3.5-35 10-15.1 9.3-25.6 24-29.7 41.3-4.1 17.3-1.1 35.1 8.2 50.2 12.2 19.7 33.3 31.4 56.5 31.4 12.4 0 24.5-3.5 35-10 15.1-9.3 25.6-24 29.6-41.3 4.1-17.3 1.1-35.1-8.2-50.2-12.1-19.7-33.2-31.4-56.4-31.4z"
                    class="st0"
                  />
                  <path
                    d="M79.4 30.9l-.5-1.6c-.4 1.1-1.7 2.4-3.8 2.9-3.9.8-7.8-1.3-8.8-6-1-4.7 1.9-8.3 5.8-9.1 3.8-.8 6.4 1 7.6 3l-2.5 1.5c-.6-1.2-2.2-2.4-4.5-1.9-2.2.5-4.2 2.5-3.5 5.9.7 3.3 3.2 4.5 5.6 4C77.4 29 78 27 78 25.9l-4.6 1-.5-2.4 7.2-1.5 1.6 7.5-2.3.4zM90.3 24c-.3-.1-.6-.1-.8-.2-1.4-.1-2.7.5-2.9 2.7l-.4 4.7-2.7-.2.9-10.2 2.6.2-.1 1.5c.7-1.3 2.2-1.4 3-1.4.2 0 .4.1.6.1l-.2 2.8zM95 26.8l2.5.4c.6.1.9-.1 1-.5.2-.7-.1-1.4-1.2-1.8-1.1-.4-2 .1-2.4 1l-2.2-1.3c.7-1.5 2.6-2.7 5.2-1.8 3.1 1 3.7 3.1 3 5.1l-1.6 4.8c-.2.5-.3 1.2-.4 1.6l-2.4-.8c0-.3.2-.8.3-1.2-.7.6-1.9 1-3.3.5-2.1-.7-2.9-2.5-2.4-4 .6-1.7 2.2-2.3 3.9-2zm2.6 2.7l.1-.4-2.3-.4c-.7-.1-1.4.1-1.6.8-.2.6 0 1.3.9 1.5 1.2.4 2.4.2 2.9-1.5zM98.4 38.3l8.1-11.7 2.2 1.5-.7 1c.8-.4 2.2-.3 3.4.6 2.5 1.7 2.6 4.6.9 7.1-1.8 2.6-4.7 3.3-7 1.7-1.2-.8-1.7-1.9-1.7-2.7l-2.8 4.1-2.4-1.6zm11.1-6.8c-1.2-.8-2.7-.6-3.7.9s-.7 3 .5 3.8c1.2.8 2.7.6 3.7-.9s.7-3-.5-3.8zM111.8 44.2l-1.7-2.2 11.9-9.3 1.7 2.2-4.5 3.5c1 0 2 .7 2.6 1.5 1.6 2 .9 4.1-.8 5.5l-5.1 4-1.7-2.2 4.7-3.7c.9-.7 1.3-1.7.4-2.8-.7-.9-1.8-.9-2.8-.3l-4.7 3.8zM116.6 51.3l9.2-4.5 1.2 2.5-9.2 4.5-1.2-2.5zm14.4-5.5c.4.9.1 1.9-.8 2.3-.8.4-1.8.1-2.3-.8-.4-.8-.1-1.9.8-2.3.9-.4 1.9-.1 2.3.8zM124.4 56.5c-1.8.5-2.5 1.9-2.2 3.3.4 1.4 1.4 1.8 2.3 1.9l-.2 2.6c-1.8 0-3.9-1.2-4.5-3.8-.7-2.9.9-5.8 4-6.6 3.1-.8 5.9.9 6.6 3.8.7 2.7-.6 4.7-2.2 5.5l-1.4-2.2c.8-.5 1.5-1.3 1.1-2.6-.5-1.5-1.7-2.4-3.5-1.9zM126.8 75c-.2 1.8-1.8 3-3.6 2.8-1.7-.2-2.9-1.8-2.7-3.6.2-1.7 1.8-2.9 3.6-2.7 1.7.2 2.9 1.8 2.7 3.5zM118.5 84.3l12.6 7.7-2.8 4.5c-2.2 3.6-6.2 4.8-10.1 2.3-4-2.4-4.7-6.5-2.4-10.1l2.7-4.4zm-.5 5.8c-1.3 2.1-1.1 4.6 1.7 6.3 2.7 1.7 5.1.8 6.3-1.3l1.2-2-8-5-1.2 2zM105.6 103.9c-.7-1.7-.4-3.9 1.5-5.5 2.2-1.8 5.4-1.8 7.6.8 2.1 2.5 1.6 5.7-.4 7.4-2.4 2-5.2 1.7-7.3-.8-.3-.3-.5-.7-.5-.7l5.6-4.7c-.9-1-2.4-1-3.5-.1-1 .8-1.1 1.8-.8 2.7l-2.2.9zm4.1.9c.7.8 1.8 1.1 3.1.1 1.1-.9 1-2.3.5-3l-3.6 2.9zM102.4 106c-.4-.7-1.3-1.1-2.4-.6-.8.4-1 1-.8 1.5.2.4.6.6 1.4.4l1.4-.3c2-.5 3.3.2 3.9 1.5.8 1.7 0 3.7-2 4.7-2.6 1.3-4.3 0-4.9-.9l1.9-1.5c.3.5 1.1 1 2.1.5.7-.3 1-1 .7-1.5-.2-.5-.7-.6-1.2-.4l-1.5.3c-2 .5-3.5-.2-4.1-1.5-.7-1.5-.3-3.6 2.1-4.8 2.8-1.3 4.6 0 5.2 1l-1.8 1.6zM94.1 105.8l2.7 9.9-2.7.7-2.7-9.9 2.7-.7zm2.7 15.1c-.9.2-1.9-.3-2.1-1.2-.2-.9.3-1.8 1.2-2.1.9-.2 1.8.3 2.1 1.2.2.9-.3 1.9-1.2 2.1zM87.6 107.3c-.2-1.1-1.2-1.9-2.5-1.8-1.8.1-2.7 1-2.6 3v.7c.4-.7 1.3-1.4 2.8-1.4 2.7-.1 4.9 1.9 5 4.8.1 2.7-1.7 5.1-4.6 5.2-1.6.1-2.6-.6-3-1.3l.1 1.2-2.7.1-.4-9.1c-.1-2.8 1.3-5.4 5.1-5.6 2.8-.1 4.8 1.5 5.1 3.5l-2.3.7zm-4.9 5.6c.1 1.6 1.2 2.5 2.5 2.5 1.4-.1 2.4-1.1 2.3-2.7-.1-1.6-1.1-2.6-2.6-2.5-1.4.1-2.3 1.1-2.2 2.7zM75.2 106.7l2.7.7-2.5 9.9-2.6-.7.3-1.2c-.9.9-2.2 1-3.3.8-2.5-.6-3.1-2.7-2.6-4.9l1.6-6.3 2.7.7-1.5 5.8c-.3 1.1 0 2.1 1.3 2.5 1.2.3 2.1-.4 2.4-1.6l1.5-5.7zM-.1 68.1h51v2.8h-51z"
                    class="st0"
                  />
                </svg>
              </AgencyLogoAnimate>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BrandIdentity
