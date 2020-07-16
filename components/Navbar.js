import React from 'react'
import KESATO from '../public/kesato-header-logo.svg'
import Link from 'next/link'

const Nav = () => {
  return (
    <header>
      <div className="container">
        <div className="lg:px-16 px-6 flex flex-wrap items-center lg:py-0 py-2">
          <div className="flex-1 flex justify-between items-center text-xl font-bold">
            <Link href="/">
              <a>
                <img src={KESATO} id="kesato-logo" className="w-5/12" />
              </a>
            </Link>
          </div>

          <label
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
          </label>
          <input className="hidden" type="checkbox" id="menu-toggle" />

          <div
            className="hidden lg:flex lg:items-center lg:w-auto w-full"
            id="menu"
          >
            <nav>
              <ul className="lg:flex items-center justify-between text-base text-gray-700 pt-4 lg:pt-0">
                <li>
                  <a
                    className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400 font-bold"
                    href="#"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400 font-bold"
                    href="#"
                  >
                    Case Study
                  </a>
                </li>
                <li>
                  <a
                    className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400 font-bold"
                    href="#"
                  >
                    LeStudio
                  </a>
                </li>
                <Link href="/blogs">
                  <a
                    className="hover:bg-blue-400 text-black font-bold py-2 px-4 border-b-4 border-salmon-700 hover:border-blue-500 rounded shadow opacity-75"
                    href="#"
                  >
                    BLOG
                  </a>
                </Link>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Nav
