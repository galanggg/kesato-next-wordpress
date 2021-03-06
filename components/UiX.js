import AgencyLogoAnimate from './AgencyLogoAnimate'
import HeaderAnimation from './HeaderAnimation'
import Link from 'next/link'
import ImageAnimation from './ImageAnimation'
import ParagraphAnimation from './ParagraphAnimation'
import PerLineAnimate from './PerLineAnimate'

const UiX = () => {
  return (
    <section className="uix-id  lg:pt-40 pt-16 lg:px-0 px-8">
      <div className="about-container-middle">
        <div className="heading-font leading-none font-semibold lg:pb-4 pb-0 heading-animation">
          <HeaderAnimation source="UI/X Design" />
        </div>
        <div className="row-middle">
          <div className="relative lg:w-6/12 w-full order-1 md:order-2">
            <ImageAnimation source="culture1.jpg" />
            <div className="svg-mb">
              <AgencyLogoAnimate>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  id="Layer_1"
                  x="0"
                  y="0"
                  version="1.1"
                  viewBox="0 0 152.1 138.5"
                  fill="#85c6a4"
                >
                  <path
                    d="M82.8 138.5H81c-38.2-1-68.4-32.8-67.4-71C14.6 29 46-.9 84.6 0c18.5.5 35.7 8.1 48.4 21.5 12.7 13.4 19.5 31 19 49.5-.9 37.8-31.3 67.5-69.2 67.5zm0-135.7c-36.3 0-65.5 28.4-66.4 64.8-.9 36.6 28.1 67.2 64.7 68.1 37.1 1 67.2-27.9 68.1-64.7.5-17.7-6-34.6-18.3-47.5-12.1-12.9-28.6-20.2-46.4-20.7h-1.7z"
                    class="st0"
                  />
                  <path
                    d="M65.3 18.7l2.6-1.3 3.1 15-2.6 1.4-7.8-7.8 1.8 10.9-2.7 1.4-10.4-11.4 2.7-1.4 7.1 7.8-1.7-10.5 2.7-1.4 7.6 7.6-2.4-10.3zM83.6 27.8c-.3 1.8-1.8 3.5-4.3 3.7-2.8.3-5.5-1.5-5.8-4.9-.3-3.3 1.9-5.6 4.5-5.9 3.2-.3 5.2 1.5 5.6 4.8v.9l-7.3.7c.2 1.3 1.4 2.2 2.8 2.1 1.3-.1 1.9-.8 2.2-1.8l2.3.4zm-2.9-3.1c-.1-1-.9-1.9-2.5-1.8-1.4.1-2.1 1.3-2.1 2.2l4.6-.4zM85.3 30.8L88.1 16l2.7.5-1.1 5.9c.6-.6 1.8-1.1 3.3-.8 3 .6 4.2 3.2 3.6 6.2-.6 3.1-2.9 5-5.8 4.4-1.4-.3-2.3-1.1-2.7-2.1l-.2 1.2-2.6-.5zm6.7-6.9c-1.4-.3-2.7.5-3.1 2.4-.4 1.8.6 3.1 2 3.4 1.4.3 2.7-.5 3.1-2.4.3-1.9-.6-3.1-2-3.4zM107.2 32.3c1.5 1 1.9 3 .9 4.4-1 1.4-2.9 1.8-4.4.9-1.4-1-1.8-2.9-.9-4.4 1-1.4 3-1.8 4.4-.9zM111.9 43.9l12.5-7.9 2.8 4.5c2.3 3.6 1.6 7.6-2.3 10.1s-7.9 1.3-10.2-2.2l-2.8-4.5zm5 2.9c1.3 2 3.6 2.9 6.4 1.2 2.7-1.7 2.9-4.2 1.6-6.3l-1.2-2-8 5.1 1.2 2zM123.9 64.1c-1.8-.1-3.7-1.3-4.3-3.8-.7-2.7.7-5.6 4-6.5 3.2-.8 5.8 1 6.5 3.6.8 3.1-.7 5.4-3.9 6.2l-.8.2-1.8-7.1c-1.3.4-2 1.7-1.6 3.1.3 1.3 1.1 1.8 2.1 1.9l-.2 2.4zm2.6-3.4c1-.3 1.8-1.2 1.4-2.7-.3-1.4-1.6-1.9-2.5-1.7l1.1 4.4zM121 71.6v-2.8l10.3-4.1v3l-6.9 2.5 6.9 2.5v2.9l-10.3-4zM120.8 85.7c-1.5-1-2.5-3-1.8-5.4.8-2.7 3.5-4.5 6.8-3.5 3.1.9 4.5 3.9 3.7 6.4-.9 3-3.4 4.3-6.6 3.3-.4-.1-.8-.3-.8-.3l2.1-7c-1.3-.3-2.6.5-3 1.8-.4 1.2 0 2.1.8 2.7l-1.2 2zm4-1.5c1 .3 2.1-.1 2.6-1.6.4-1.4-.4-2.4-1.3-2.8l-1.3 4.4zM117 86.2l13.3 7.2-1.3 2.4-13.3-7.2 1.3-2.4zM112.1 101.6c-2.4-2.1-2.6-5.3-.6-7.6s5.3-2.6 7.6-.5c2.4 2.1 2.6 5.3.6 7.6s-5.2 2.6-7.6.5zm1.8-2.1c1.5 1.3 3 1 3.9-.1.9-1 1-2.6-.5-3.9-1.5-1.3-3-1-3.9.1-.9 1-1 2.6.5 3.9zM105.1 95.6l7.6 12-2.3 1.4-.7-1.1c0 .9-.6 2.1-1.9 2.9-2.5 1.6-5.2.6-6.9-2-1.7-2.6-1.2-5.6 1.2-7.1 1.2-.8 2.4-.8 3.2-.5l-2.6-4.2 2.4-1.4zm1.9 13c1.2-.8 1.6-2.3.6-3.8s-2.5-1.8-3.7-1.1c-1.2.8-1.6 2.3-.6 3.8s2.5 1.8 3.7 1.1zM97.5 105.3l1.9 10.1-2.6.5-.2-1.2c-.4 1.1-1.6 1.9-2.7 2.1-1.4.3-2.6-.1-3.3-1.1-.6 1.4-1.5 2-2.9 2.3-1.9.3-3.9-.4-4.4-3.1l-1.2-6.5 2.6-.5 1.1 6c.2 1.1.9 1.8 2.1 1.6 1.2-.2 1.7-1.3 1.5-2.3l-1.1-5.9 2.7-.5 1.1 6c.2 1.1.9 1.8 2.1 1.6 1.2-.2 1.7-1.2 1.5-2.3l-1.1-5.9 2.9-.9zM70.9 108.9c.8-1.7 2.7-2.8 5.2-2.4 2.8.5 4.9 2.9 4.3 6.3-.6 3.2-3.3 4.9-5.9 4.5-3.1-.5-4.7-2.9-4.1-6.1l.2-.8 7.2 1.3c.2-1.3-.8-2.5-2.2-2.7-1.3-.2-2.1.3-2.6 1.1l-2.1-1.2zm2 3.8c-.1 1 .4 2.1 1.9 2.4 1.4.2 2.4-.7 2.6-1.6l-4.5-.8zM67.6 104.3l2.5 1.2-4.5 9.2-2.4-1.2.6-1.1c-1 .7-2.3.6-3.3.1-2.3-1.1-2.5-3.3-1.5-5.3l2.9-5.8 2.5 1.2-2.6 5.4c-.5 1-.4 2.1.8 2.7 1.1.5 2.1 0 2.7-1.1l2.3-5.3zM51 105.8l-1.6-1.3 1.6-1.9 1.6 1.3 2.8-3.3c.6-.7.4-1.2-.2-1.7-.3-.2-.6-.4-.7-.5l1.5-1.8c.3.1.7.3 1.4.8 1.5 1.3 1.7 3 .5 4.5l-3.1 3.7 1.4 1.2-1.6 1.9-.4-.3c-.8-.7-1.7-.5-2.3.2l-.9 1.1-1.9-1.6 1.9-2.3zM0 67h51v2.8H0z"
                    class="st0"
                  />
                </svg>
              </AgencyLogoAnimate>
            </div>
          </div>
          <div className="lg:w-6/12 w-full lg:pt-0 pt-8 lg:pr-8 lg:leading-loose leading-relaxed order-2 md:order-1">
            <ParagraphAnimation>
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
            <div className="see-more">
              <PerLineAnimate>
                <Link href="/">
                  <a>Learn More</a>
                </Link>
              </PerLineAnimate>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default UiX
