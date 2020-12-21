import React from 'react'
// import KESATO from '../../public/kesato-header-logo.svg'
import Link from 'next/link'
import { useRouter, Router } from 'next/router'
import Container from '../Container'

const Nav = () => {
  const router = useRouter()
  return (
    <>
      <header className="sticky top-0 bg-transparant z-40 p-8">
        <div className="container-xl">
          <div className="lg:px-16 px-6 flex flex-wrap items-center lg:py-0 py-2">
            <div className="flex-1 flex justify-between items-center text-xl font-bold">
              <Link href="/">
                <a>
                  <img
                    src="/kesato-header-logo.svg"
                    id="kesato-logo"
                    className="w-5/12"
                    alt="kesato-image"
                  />
                </a>
              </Link>
            </div>

            {/* <label
            htmlFor="menu-toggle"
            className="pointer-cursor lg:hidden block"
          >
            <svg
              className="fill-current text-gray-900"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
            >
              <title>menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </label> */}
            {/* <input className="hidden" type="checkbox" id="menu-toggle" /> */}

            <div
              className="hidden lg:flex lg:items-center lg:w-auto w-full"
              id="menu"
            >
              <nav className="border-solid border border-black">
                <ul className="navbar-right lg:flex items-center justify-between text-base text-black-700 ">
                  <li className="relative">
                    <a href="http://localhost:3001/#service-id">Services</a>
                  </li>
                  <li className="relative">
                    <a href="http://localhost:3001/#hero-id">Case Study</a>
                  </li>
                  <li className="relative">
                    <a href="#">Le Studio</a>
                  </li>
                  <li>
                    <a href="#">
                      <svg
                        viewBox="0 0 100 80"
                        width="20"
                        height="18"
                        fill="#3E4543"
                      >
                        <rect width="100" height="10"></rect>
                        <rect y="25" width="100" height="10"></rect>
                        <rect y="50" width="65" height="10"></rect>
                      </svg>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
      <div className="menu-overlay fixed w-full h-screen z-40 bg-primary opacity-20 top-0 left-0"></div>
      <div className="side-menu pl-20 pt-32">
        <div class="menu-ornaments w-full absolute top-0 left-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Layer_1"
            x="0"
            y="0"
            version="1.1"
            viewBox="0 0 309.3 334.8"
            fill="#4B75A9"
          >
            <defs />
            <path
              d="M297.9 10.4c1.3 0 2.4-1.1 2.4-2.4 0-1.3-1.1-2.4-2.4-2.4s-2.4 1.1-2.4 2.4c0 1.3 1 2.4 2.4 2.4z"
              class="st0"
            />
            <circle cx="297.9" cy="95.4" r="2.4" class="st0" />
            <path
              d="M302.5 77.9c0 1.3 1.1 2.4 2.4 2.4s2.4-1.1 2.4-2.4c0-1.3-1.1-2.4-2.4-2.4-1.4 0-2.4 1.1-2.4 2.4zM299 43c0 1.3 1.1 2.4 2.4 2.4s2.4-1.1 2.4-2.4c0-1.3-1.1-2.4-2.4-2.4-1.4-.1-2.4 1-2.4 2.4zM306 25.5c0 1.3 1.1 2.4 2.4 2.4h.5v-4.8h-.5c-1.4-.1-2.4 1-2.4 2.4zM307.4 165.4c0-1.3-1.1-2.4-2.4-2.4s-2.4 1.1-2.4 2.4 1.1 2.4 2.4 2.4 2.4-1.1 2.4-2.4z"
              class="st0"
            />
            <circle cx="301.4" cy="130.4" r="2.4" class="st0" />
            <path
              d="M306 112.9c0 1.3 1.1 2.4 2.4 2.4h.5v-4.8h-.5c-1.4 0-2.4 1.1-2.4 2.4zM280.4 10.4c1.3 0 2.4-1.1 2.4-2.4 0-1.3-1.1-2.4-2.4-2.4S278 6.7 278 8c0 1.3 1 2.4 2.4 2.4zM262.9 10.4c1.3 0 2.4-1.1 2.4-2.4 0-1.3-1.1-2.4-2.4-2.4s-2.4 1.1-2.4 2.4c-.1 1.3 1 2.4 2.4 2.4zM245.4 10.4c1.3 0 2.4-1.1 2.4-2.4 0-1.3-1.1-2.4-2.4-2.4S243 6.7 243 8c-.1 1.3 1 2.4 2.4 2.4zM230.3 8c0-1.3-1.1-2.4-2.4-2.4-1.3 0-2.4 1.1-2.4 2.4 0 1.3 1.1 2.4 2.4 2.4 1.3 0 2.4-1.1 2.4-2.4z"
              class="st0"
            />
            <circle cx="280.4" cy="95.4" r="2.4" class="st0" />
            <path
              d="M265.4 95.4c0-1.3-1.1-2.4-2.4-2.4s-2.4 1.1-2.4 2.4 1.1 2.4 2.4 2.4 2.4-1 2.4-2.4zM285 77.9c0 1.3 1.1 2.4 2.4 2.4s2.4-1.1 2.4-2.4c0-1.3-1.1-2.4-2.4-2.4s-2.4 1.1-2.4 2.4zM272.4 77.9c0-1.3-1.1-2.4-2.4-2.4s-2.4 1.1-2.4 2.4c0 1.3 1.1 2.4 2.4 2.4 1.2.1 2.4-1 2.4-2.4zM254.8 77.9c0-1.3-1.1-2.4-2.4-2.4-1.3 0-2.4 1.1-2.4 2.4 0 1.3 1.1 2.4 2.4 2.4 1.4.1 2.4-1 2.4-2.4zM292 60.4c0 1.3 1.1 2.4 2.4 2.4s2.4-1.1 2.4-2.4c0-1.3-1.1-2.4-2.4-2.4-1.4 0-2.4 1.1-2.4 2.4z"
              class="st0"
            />
            <circle cx="276.9" cy="60.4" r="2.4" class="st0" />
            <path
              d="M261.9 60.4c0-1.3-1.1-2.4-2.4-2.4s-2.4 1.1-2.4 2.4c0 1.3 1.1 2.4 2.4 2.4 1.3.1 2.4-1 2.4-2.4zM244.3 60.4c0-1.3-1.1-2.4-2.4-2.4s-2.4 1.1-2.4 2.4c0 1.3 1.1 2.4 2.4 2.4s2.4-1 2.4-2.4zM281.5 43c0 1.3 1.1 2.4 2.4 2.4s2.4-1.1 2.4-2.4c0-1.3-1.1-2.4-2.4-2.4-1.4-.1-2.4 1-2.4 2.4zM263.9 43c0 1.3 1.1 2.4 2.4 2.4s2.4-1.1 2.4-2.4c0-1.3-1.1-2.4-2.4-2.4-1.3-.1-2.4 1-2.4 2.4zM251.3 43c0-1.3-1.1-2.4-2.4-2.4s-2.4 1.1-2.4 2.4c0 1.3 1.1 2.4 2.4 2.4s2.4-1.1 2.4-2.4zM233.8 43c0-1.3-1.1-2.4-2.4-2.4S229 41.7 229 43c0 1.3 1.1 2.4 2.4 2.4s2.4-1.1 2.4-2.4zM290.9 27.9c1.3 0 2.4-1.1 2.4-2.4 0-1.3-1.1-2.4-2.4-2.4s-2.4 1.1-2.4 2.4c0 1.3 1 2.4 2.4 2.4z"
              class="st0"
            />
            <circle cx="273.4" cy="25.5" r="2.4" class="st0" />
            <circle cx="255.9" cy="25.5" r="2.4" class="st0" />
            <path
              d="M240.8 25.5c0-1.3-1.1-2.4-2.4-2.4s-2.4 1.1-2.4 2.4c0 1.3 1.1 2.4 2.4 2.4s2.4-1.1 2.4-2.4zM296.9 147.9c0-1.3-1.1-2.4-2.4-2.4s-2.4 1.1-2.4 2.4 1.1 2.4 2.4 2.4 2.4-1.1 2.4-2.4zM286.4 130.4c0-1.3-1.1-2.4-2.4-2.4s-2.4 1.1-2.4 2.4 1.1 2.4 2.4 2.4 2.4-1.1 2.4-2.4zM293.4 112.9c0-1.3-1.1-2.4-2.4-2.4s-2.4 1.1-2.4 2.4c0 1.3 1.1 2.4 2.4 2.4 1.2 0 2.4-1.1 2.4-2.4zM275.9 112.9c0-1.3-1.1-2.4-2.4-2.4s-2.4 1.1-2.4 2.4c0 1.3 1.1 2.4 2.4 2.4 1.3 0 2.4-1.1 2.4-2.4zM212.8 8c0-1.3-1.1-2.4-2.4-2.4S208 6.7 208 8c0 1.3 1.1 2.4 2.4 2.4s2.4-1.1 2.4-2.4zM192.8 5.6c-1.3 0-2.4 1.1-2.4 2.4 0 1.3 1.1 2.4 2.4 2.4s2.4-1.1 2.4-2.4c.1-1.3-1-2.4-2.4-2.4zM175.3 5.6c-1.3 0-2.4 1.1-2.4 2.4 0 1.3 1.1 2.4 2.4 2.4s2.4-1.1 2.4-2.4c.1-1.3-.9-2.4-2.4-2.4zM157.8 5.6c-1.3 0-2.4 1.1-2.4 2.4 0 1.3 1.1 2.4 2.4 2.4 1.3 0 2.4-1.1 2.4-2.4.1-1.3-1-2.4-2.4-2.4zM223.3 25.5c0-1.3-1.1-2.4-2.4-2.4-1.3 0-2.4 1.1-2.4 2.4 0 1.3 1.1 2.4 2.4 2.4 1.3 0 2.4-1.1 2.4-2.4zM140.3 5.6c-1.3 0-2.4 1.1-2.4 2.4 0 1.3 1.1 2.4 2.4 2.4 1.3 0 2.4-1.1 2.4-2.4.1-1.3-.9-2.4-2.4-2.4zM122.8 5.6c-1.3 0-2.4 1.1-2.4 2.4 0 1.3 1.1 2.4 2.4 2.4s2.4-1.1 2.4-2.4c0-1.3-1-2.4-2.4-2.4zM105.3 5.6c-1.3 0-2.4 1.1-2.4 2.4 0 1.3 1.1 2.4 2.4 2.4s2.4-1.1 2.4-2.4c.1-1.3-.9-2.4-2.4-2.4zM87.8 5.6c-1.3 0-2.4 1.1-2.4 2.4 0 1.3 1.1 2.4 2.4 2.4s2.4-1.1 2.4-2.4c0-1.3-1-2.4-2.4-2.4zM70.3 5.6c-1.3 0-2.4 1.1-2.4 2.4 0 1.3 1.1 2.4 2.4 2.4s2.4-1.1 2.4-2.4c.1-1.3-1-2.4-2.4-2.4zM52.9 5.6c-1.3 0-2.4 1.1-2.4 2.4 0 1.3 1.1 2.4 2.4 2.4 1.3 0 2.4-1.1 2.4-2.4-.1-1.3-1.1-2.4-2.4-2.4zM35.4 5.6C34.1 5.6 33 6.7 33 8c0 1.3 1.1 2.4 2.4 2.4 1.3 0 2.4-1.1 2.4-2.4 0-1.3-1.1-2.4-2.4-2.4zM17.9 5.6c-1.3 0-2.4 1.1-2.4 2.4 0 1.3 1.1 2.4 2.4 2.4s2.4-1.1 2.4-2.4c-.1-1.3-1.2-2.4-2.4-2.4zM2.8 8c0-1.3-1.1-2.4-2.4-2.4v4.9c1.3-.1 2.4-1.2 2.4-2.5z"
              class="st0"
            />
          </svg>
        </div>
        <div className="heading-font font-semibold ">
          <ul>
            <li className=" pb-16 text-white">
              <a href="http://localhost:3001/#service-id">Services</a>
            </li>
            <li className=" pb-16 text-white">
              <a href="http://localhost:3001/#hero-id">Case Study</a>
            </li>
            <li className="text-white">
              <a href="#">Le Studio</a>
            </li>
          </ul>
        </div>

        <div className="back pt-32 text-lg text-white">
          <a className="relative inline-block pr-3"> Back</a>
        </div>
        <div className="footer-sidebar ">
          <div className="email text-base pb-2 text-white">
            <p> hello@kesato.com </p>
          </div>
          <div className="sosmed-icon flex ">
            <a href="#" className="mr-6">
              <img src="instagram-2.svg" className="w-5" />
            </a>
            <a href="#" className="mr-6">
              <img src="youtube-2.svg" className="w-6" />
            </a>
            <a href="#" className="mr-6">
              <img src="facebook-2.svg" className="w-6" />
            </a>
          </div>
        </div>
        {/* <div className="ornament-bottom w-full absolute">
          <img src="/4.svg" />
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
        </div> */}
      </div>
    </>
  )
}

export default Nav
