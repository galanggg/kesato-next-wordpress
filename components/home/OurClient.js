import React from 'react'
import Container from '../Container'
import styled from 'styled-components'

const ImgClient = styled.img`
  filter: invert(1);
`

const OurClient = ({ client }) => {
  const images = client
  console.log(images)
  return (
    <section className="client">
      <Container>
        <div className="mx-auto">
          <div className="lg:px-16 px-6">
            <div className="ml-5 mt-12">
              <h1 className="font-bold text-5xl text-center">Our Client</h1>
              <p className="text-center py-12">
                List of our remarkable clients throughout the years.
              </p>
            </div>
            <div className="flex flex-wrap flex-row mt-5">
              {images.map((image) => (
                <div className="w-1/6 py-10 flex items-center justify-center">
                  <ImgClient
                    src={image.sourceUrl}
                    className="transition duration-150 ease-in-outhover: transform hover:-translate-y-1 hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default OurClient
