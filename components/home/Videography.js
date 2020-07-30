import React from 'react'
import Container from '../Container'

const Videography = ({ videography }) => {
  return (
    <section className="videography">
      <Container>
        <div className="mx-auto">
          <div className="lg:px-16 px-6">
            <div className="ml-5 mt-12">
              <h1 className="font-bold text-5xl">Videography</h1>
              <p className="max-w-4xl font-medium pt-8">
                Whether you need lifestyle showreel, events showreel, or
                corporate showreel, we have a proven track record to create it
                perfectly. Our core strength lies in our ability to adapt to any
                style, under any condition, to cover all our clients needs.
              </p>
            </div>
          </div>
          <div className="image-video pt-5">
            <img className="object-cover" src={videography} alt="video-image" />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Videography
