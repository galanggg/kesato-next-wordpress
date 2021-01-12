import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

const HeaderAnimation = (props) => {
  const headerAnimation = useRef(null)
  let animateText = useRef([])
  let arraytext = props.source.split(' ')
  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: headerAnimation.current,
        once: false,
        toggleActions: 'restart none none reverse',
        start: 'top 70%',
      },
    })

    timeline
      .to(headerAnimation.current, {
        autoAlpha: 1,
      })
      .from(
        animateText.current,
        {
          y: '100%',
        },
        '-=0.3',
      )
    console.log('apa')
  })

  return (
    <div ref={headerAnimation} className="heading-section__wrapper">
      {arraytext.map((value, index) => {
        return (
          <div key={value} className="heading-section__item">
            <span
              ref={(el) => {
                animateText.current.push(el)
              }}
            >
              {value}
            </span>
          </div>
        )
      })}
    </div>
  )
}

export default HeaderAnimation
