import { useEffect, useRef } from 'react'
import { gsap, Power1 } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

const ServiceLinkAnimate = ({ children }) => {
  const ServiceLink = useRef(null)
  gsap.registerPlugin(ScrollTrigger)
  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ServiceLink.current,
        toggleActions: 'restart none none reverse',
        start: 'top 75%',
      },
    })
    timeline.from(ServiceLink.current, 1.5, {
      y: 50,
      opacity: 0,
      ease: Power1.easeOut,
    })
  })

  return (
    <>
      <div ref={ServiceLink} className="container">
        {children}
      </div>
    </>
  )
}

export default ServiceLinkAnimate
