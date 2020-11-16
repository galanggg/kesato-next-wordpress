import React from 'react'
import styled from 'styled-components'

const ImgClient = styled.img`
  filter: invert(1);
`

const images = [
  { sourceUrl: 'https://next.kesato.io/wp-content/uploads/2020/09/karma.png' },
  { sourceUrl: 'https://next.kesato.io/wp-content/uploads/2020/09/cuen.png' },
  {
    sourceUrl: 'https://next.kesato.io/wp-content/uploads/2020/09/nitihara.png',
  },
  {
    sourceUrl:
      'https://next.kesato.io/wp-content/uploads/2020/09/malamadre.png',
  },
  { sourceUrl: 'https://next.kesato.io/wp-content/uploads/2020/09/ambre.png' },
  {
    sourceUrl:
      'https://next.kesato.io/wp-content/uploads/2020/09/soo-santai.png',
  },
  {
    sourceUrl: 'https://next.kesato.io/wp-content/uploads/2020/09/le-petit.png',
  },
  {
    sourceUrl: 'https://next.kesato.io/wp-content/uploads/2020/09/whotels.png',
  },
  { sourceUrl: 'https://next.kesato.io/wp-content/uploads/2020/09/ps.png' },
  {
    sourceUrl:
      'https://next.kesato.io/wp-content/uploads/2020/09/motel-mexicola.png',
  },
  {
    sourceUrl: 'https://next.kesato.io/wp-content/uploads/2020/09/da-maria.png',
  },
  { sourceUrl: 'https://next.kesato.io/wp-content/uploads/2020/09/bw.png' },
]

const OurClient = ({ client }) => {
  console.log(images)
  return (
    <section>
      <div className="pt-32 mx-auto">
        <div className="lg:px-16 px-6">
          <div className="ml-5 mt-12">
            <h1 className="font-bold heading-font text-center">Our Client</h1>
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
    </section>
  )
}

export default OurClient
