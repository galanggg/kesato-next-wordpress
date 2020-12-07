import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

const AgencyLogoAnimate = ({ children }) => {
  const rotateLogo = useRef(null)
  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: rotateLogo.current,
        toggleActions: 'restart none none reverse',
        start: 'top 70% ',
        end: 'bottom 30 ',
        scrub: true,
      },
    })
    timeline.to(rotateLogo.current, 5, { rotation: 360 })
  })

  return (
    <>
      <div ref={rotateLogo} className="agency-logo ">
        {children}
      </div>
    </>
  )
}

export default AgencyLogoAnimate
