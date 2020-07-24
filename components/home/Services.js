import React from 'react'
import Container from '../Container'
import leftImage from '../../public/sitting-4.png'

const Services = () => {
  return (
    <section className="services flex mt-10">
      <Container>
        <div className="mx-auto overflow-hidden">
          <div className="lg:px-16 px-6">
            {/* breadcumb */}
            <nav className="bg-grey-light mr-10 p-3 rounded font-sans w-full">
              <ol className="list-reset flex text-grey-dark">
                <li>
                  <a href="#" className="text-blue font-bold">
                    Home
                  </a>
                </li>
                <li>
                  <span className="mx-2">/</span>
                </li>
                <li>
                  <a href="#" className="text-blue font-bold">
                    Services
                  </a>
                </li>
                <li>
                  <span className="mx-2">/</span>
                </li>
                <li>Creative</li>
              </ol>
            </nav>

            {/* services section */}
            <div className="ml-5 mt-12">
              <div className="w-full">
                <p className="text-5xl font-bold">
                  Brand <br /> Identity
                </p>
              </div>
              <div className="pt-8 w-full flex flex-row max-w-4xl">
                <div className="w-1/2">
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh eu- ismod tincidunt ut laoreet dolore
                    magna ali- quam erat volutpat.
                  </p>
                  <br />
                  <p className="max-w-sm">
                    Ut wisi enim ad minim veniam, quis nostrud exerci tation
                    ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                    consequat.
                  </p>
                </div>
                <div className="w-1/2 max-w-sm rounded overflow-hidden shadow-lg bg-gray-800 h-64">
                  <div className="px-6 py-4"></div>
                </div>
              </div>
              <div className="w-full">
                <p className="text-5xl font-bold">
                  Graphic <br /> Design
                </p>
              </div>
              <div className="pt-8 w-full flex flex-row max-w-4xl">
                <div className="w-1/2">
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh eu- ismod tincidunt ut laoreet dolore
                    magna ali- quam erat volutpat.
                  </p>
                  <br />
                  <p className="max-w-sm">
                    Ut wisi enim ad minim veniam, quis nostrud exerci tation
                    ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                    consequat.
                  </p>
                </div>
                <div className="w-1/2 max-w-sm rounded overflow-hidden shadow-lg bg-gray-800 h-64">
                  <div className="px-6 py-4"></div>
                </div>
              </div>
            </div>
            <div className="pt-10 flex justify-center">
              <h1 className="text-2xl font-semibold">
                Strategy | Marketing | Development |{' '}
                <span className="text-blue-600">Creative</span>
              </h1>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Services
