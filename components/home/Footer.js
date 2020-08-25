import React from 'react'
import Container from '../Container'
import tw, { styled } from 'twin.macro'

//Example using twin.macro and styled components
const MyButton = styled.button(({ isBold, isPrimary }) => [
  tw`mt-5 ml-5 border-2 border-blue-500 px-4 py-2`,
  // Ternary
  isBold ? tw`font-bold` : tw`font-semibold`,
  // Conditional Style
  isPrimary && tw`text-white bg-blue-500`,
])

const Footer = () => {
  return (
    <div className="w-full bg-gray-500 mt-10">
      <Container>
        <div className="flex flex-wrap text-center text-black">
          <div className="w-full md:w-1/2 p-5 md:text-left">
            <div className="my-6 ml-3 text-xl font-semibold">ABOUT US</div>
            <p className="p-3 text-gray-900">
              Kesato & Co. started as a Digital Agency in Paris, France and
              decided to move its head- quarters and grow up in Bali, Indonesia.
              As the Bali Web Design leading agency, Kesato & Co. is the key to
              provide all solu- tions to your needs through its expertise.
            </p>
            <p className="p-3 text-gray-900">
              We provide digital marketing strategy that is adaptable to your
              business which allow you to reach your target in both online and
              of- fline. Conscientious, wise and attentive, we transform the
              world of digital into a real ex- perience. Our Culture Lorem ipsum
              dolor sit amet, consectetuer adipiscing elit,
            </p>
          </div>
          <div className="w-full md:w-1/2 p-5">
            <div className="my-6 text-xl font-semibold">CONTACT US</div>
            <p className="mt-8 text-gray-900">
              Jl. Bumbak Dauh <br />
              Banjar Anyar Kelod, Kec. Kuta Utara <br />
              Kabupaten Badung, Bali <br />
              <strong>Phone:</strong> (0361) 4740834
              <br />
              <strong>Email:</strong> hello@kesato.com
              <br />
              <MyButton isPrimary>Get in touch</MyButton>
            </p>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Footer
