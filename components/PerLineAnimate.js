import { useEffect, useRef } from 'react'
import { gsap, Power3 } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

const PerLineAnimate = ({ children }) => {
  const perLine = useRef(null)
  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: perLine.current,
        toggleActions: 'restart none none reverse',
        start: 'top 75%',
      },
    })
    timeline.from(perLine.current, 1, {
      y: 50,
      opacity: 0,
      ease: Power3.easeOut,
    })
  })

  return (
    <>
      <div ref={perLine} className="container pb-5">
        {children}
      </div>
    </>
  )
}
export default PerLineAnimate
