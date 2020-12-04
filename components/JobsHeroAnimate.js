import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

const JobsHeroAnimate = (props) => {
  let animateText = useRef([])
  const headerAnimation = useRef(null)
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
  })

  return (
    <>
      <div ref={headerAnimation} className="jobs-section__wrapper">
        <div className="jobs-section__item">
          <span
            ref={(el) => {
              animateText.current.push(el)
            }}
          >
            {props.source}
          </span>
        </div>
      </div>
    </>
  )
}

export default JobsHeroAnimate
