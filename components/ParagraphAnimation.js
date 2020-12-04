import { useEffect, useRef } from 'react'
import { gsap, Power3 } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

const ParagraphAnimation = ({ children }) => {
  const pAnimation = useRef(null)
  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: pAnimation.current,
        toggleActions: 'restart none none reverse',
        start: 'top 70%',
      },
    })
    timeline.from(pAnimation.current, 1, {
      y: 50,
      opacity: 0,
      ease: Power3.easeOut,
    })
  })

  return (
    <>
      <div ref={pAnimation} className="container pb-5">
        {children}
      </div>
    </>
  )
}

export default ParagraphAnimation
