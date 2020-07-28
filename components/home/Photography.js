import React, { useState } from 'react'
import Container from '../Container'
import { Masonry } from 'masonic'

const MasonryCard = ({ data }) => {
  return <img src={data.sourceUrl} />
}

const Photography = ({ gallery }) => {
  const [data, setData] = useState(gallery)
  console.log(data)
  return (
    <section className="photography flex mt-20">
      <Container>
        <div className="mx-auto">
          <div className="lg:px-16 px-6">
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
                <li>
                  <span className="mx-2">/</span>
                </li>
                <li>Photography & Videography</li>
              </ol>
            </nav>
            <div className="ml-5 mt-12">
              <h1 className="font-bold text-5xl">Photography</h1>
              <p className="max-w-4xl font-medium pt-8">
                We provide various photography services indoor or outdoor,
                including product shooting,fash- ion, model portfolio, headshots
                etc. Our team come together to produce superior quality images
                for your website, <br />
                social /printed media, electronic marketing and more. Drop us
                your en- quiries!
              </p>
            </div>
          </div>
          <div className="pt-5">
            <Masonry
              items={data}
              render={MasonryCard}
              columnWidth={350}
              columnGutter={5}
            />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Photography
