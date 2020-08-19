import React, { useState } from 'react'
import Container from '../Container'
import axios from 'axios'

const Contact = () => {
  return (
    <section className="contact-form flex mt-20">
      <Container>
        {/* <form
          className="w-full max-w-lg"
          action="https://formspree.io/xyynovpg"
          method="POST"
        >
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Your Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="nick"
                type="text"
                name="nama"
              />
              <p className="text-gray-600 text-xs italic">
                First Name / Last Name
              </p>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                E-mail
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="email"
                type="email"
                name="email"
              />
              <p className="text-gray-600 text-xs italic">Your email address</p>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Message
              </label>
              <textarea
                className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                id="message"
                name="text"
              ></textarea>
              <p className="text-gray-600 text-xs italic">
                Anything that you want to know
              </p>
            </div>
          </div>
          <div className="md:flex md:items-center">
            <div className="md:w-1/3">
              <button
                className="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="submit"
              >
                Submit
              </button>
            </div>
            <div className="md:w-2/3"></div>
          </div>
        </form> */}
        <section className=" body-font relative">
          <div className="ml-5 mt-10">
            <h1 className="font-bold text-5xl">Contact Us !</h1>
          </div>
          <div className="container px-5 py-5 mx-auto flex sm:flex-no-wrap flex-wrap">
            <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
              <iframe
                width="100%"
                height="100%"
                className="absolute inset-0"
                frameBorder="0"
                title="map"
                marginHeight="0"
                marginWidth="0"
                scrolling="no"
                src=" https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Jl.%20Bumbak%20Dauh%20Jl.%20Pulau%20Ambon%20No.4,%20Banjar%20Anyar%20Kelod,%20Kec.%20Kuta%20Utara,%20Kabupaten%20Badung,%20Bali%20+(Kesato)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                style={{ filter: 'grayscale(1) contrast(1.2) opacity(0.4)' }}
              ></iframe>
              <div className="bg-white relative flex flex-wrap py-6">
                <div className="lg:w-1/2 px-6">
                  <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm">
                    ADDRESS
                  </h2>
                  <p className="leading-relaxed">
                    Jl. Bumbak Dauh Jl. Pulau Ambon No.4, Banjar Anyar Kelod,
                    Kec. Kuta Utara, Kabupaten Badung, Bali
                  </p>
                </div>
                <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                  <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm">
                    EMAIL
                  </h2>
                  <a className="text-indigo-500 leading-relaxed">
                    hello@kesato.com
                  </a>
                  <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mt-4">
                    PHONE
                  </h2>
                  <p className="leading-relaxed">
                    <span className="font-bold">+62</span> 361 474 0834
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
              <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
                Get in touch !
              </h2>
              <p className="leading-relaxed mb-5 text-gray-600">
                Please dont be hesistate if you have any questions, just fill
                the form
              </p>
              <input
                className="bg-white rounded border border-gray-400 focus:outline-none focus:border-gray-900 text-base px-4 py-2 mb-4"
                placeholder="Name"
                type="text"
              />
              <input
                className="bg-white rounded border border-gray-400 focus:outline-none focus:border-gray-900 text-base px-4 py-2 mb-4"
                placeholder="Email"
                type="email"
              />
              <textarea
                className="bg-white rounded border border-gray-400 focus:outline-none h-32 focus:border-gray-900 text-base px-4 py-2 mb-4 resize-none"
                placeholder="Message"
              ></textarea>
              <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Submit
              </button>
            </div>
          </div>
        </section>
      </Container>
    </section>
  )
}

export default Contact
