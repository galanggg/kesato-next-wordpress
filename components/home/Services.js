import React from 'react'
import Container from '../Container'
import tw from 'twin.macro'
import styled from 'styled-components'

const SingleColumn = tw.div`max-w-screen-xl mx-auto py-20 lg:py-8`

const HeadingInfoContainer = tw.div`flex flex-col items-center`
const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center max-w-sm`

const Content = tw.div`mt-16`

const Card = styled.div((props) => [
  tw`mt-24 md:flex justify-center items-center`,
  props.reversed ? tw`flex-row-reverse` : 'flex-row',
])
const Image = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded md:w-1/2 lg:w-5/12 xl:w-1/3 flex-shrink-0 h-screen md:h-64 bg-cover bg-center mx-4 sm:mx-8 md:mx-4 lg:mx-8`,
])
const Details = tw.div`mt-4 md:mt-0 md:max-w-md mx-4 sm:mx-8 md:mx-4 lg:mx-8`
const Title = tw.h4`text-3xl font-bold text-gray-900`
const Description = tw.p`mt-2 text-sm leading-loose`
const Link = tw.a`inline-block mt-4 text-sm text-teal-500 font-bold cursor-pointer transition duration-300 border-b-2 border-transparent hover:border-gray-500`

const Services = () => {
  const cards = [
    {
      imageSrc:
        'https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/07/brand-identity-design.jpg?auto=format&q=60&w=2060&h=1545&fit=crop&crop=faces',
      title: 'Brand Identity',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      url: 'https://timerse.com',
    },

    {
      imageSrc:
        'https://i2.wp.com/www.wendyzhou.se/blog/wp-content/uploads/2019/08/uixninja.png?fit=1600%2C1200&ssl=1',
      title: 'UI/UX Design',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      url: 'https://timerse.com',
    },

    {
      imageSrc:
        'https://png.pngtree.com/png-vector/20190611/ourlarge/pngtree-web-development-illustration-modern-can-be-used-for-landing-pages-web-png-image_1496200.jpg',
      title: 'Web Development',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      url: 'https://timerse.com',
    },
  ]

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

            <SingleColumn>
              <HeadingInfoContainer>
                <HeadingDescription>
                  Here are some of the services
                </HeadingDescription>
              </HeadingInfoContainer>

              <Content>
                {cards.map((card, i) => (
                  <Card key={i} reversed={i % 2 === 1}>
                    <Image imageSrc={card.imageSrc} />
                    <Details>
                      <Title>{card.title}</Title>
                      <Description>{card.description}</Description>
                      <Link href={card.url}>See Event Details</Link>
                    </Details>
                  </Card>
                ))}
              </Content>
            </SingleColumn>
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
