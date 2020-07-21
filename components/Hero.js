import React from 'react'
import hero from '../public/3535686.jpg'

const Hero = ({ tagline }) => {
  return (
    <section>
      <div className="container">
        <div className="lg:px-16 px-6 mt-5 h-screen">
          <div className="mx-auto flex flex-col md:flex-row items-center">
            <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
              <p className="uppercase tracking-loose w-full">KESATO & CO</p>
              <h1 className="my-4 text-5xl font-bold leading-tight w-full">
                KESATO & CO
              </h1>
              <p className="leading-normal text-2xl mb-8">{tagline}</p>
            </div>
            <div className="w-full md:w-3/5 py-6 text-center">
              <img className="w-full md:w-5/5 z-50" src={hero} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
