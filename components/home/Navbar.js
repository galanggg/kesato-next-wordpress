import React from 'react'
// import KESATO from '../../public/kesato-header-logo.svg'
import Link from 'next/link'
import { useRouter, Router } from 'next/router'
import Container from '../Container'

const Nav = () => {
  const router = useRouter()
  return (
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
  )
}

export default Nav
