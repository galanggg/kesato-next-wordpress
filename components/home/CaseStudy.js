import tw, { styled, css } from 'twin.macro'

const Grid = tw.div`grid grid-cols-3 grid-flow-row gap-2 justify-center items-center`
const GridItem = styled.div(({ active }) => [
  tw`flex items-center justify-center h-full relative`,
  active && tw`row-start-1 row-end-3 col-start-2 col-end-2`,
])
const Player = styled.div`
position:absolute;
`
// Add data
const Datas = [
  {
    title: 'Test',
    image: 'https://picsum.photos/600/300',
  },
  {
    title: 'Test',
    image: 'https://picsum.photos/600/300',
  },
  {
    title: 'Test',
    image: 'https://picsum.photos/600/300',
  },
  {
    title: 'Test',
    image: 'https://picsum.photos/600/300',
  },
  {
    title: 'Test',
    image: 'https://picsum.photos/600/300',
  },
]

const CaseStudy = ({ tagline, heroImage }) => {
  return (
    <>
      <Grid>
        {Datas.map((data, index) => {
          return (
            <GridItem active={index == 3 - 1 ? true : false}>
              <img tw="object-cover w-full h-full" src={data.image} />
              <div tw="bg-black bg-opacity-25 w-full h-full absolute" />
              <div tw="absolute text-white">{data.title}</div>
            </GridItem>
          )
        })}
      </Grid>
    </>
  )
}

export default CaseStudy
