import { useEffect, useRef } from 'react'
import { Power2, gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

const ImageAnimation = (props) => {
  let wrapperImage = useRef(null)
  let image = useRef(null)
  let animateOverlay = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrapperImage.current,
        start: 'top 70%',
        toggleActions: 'restart none none reset',
      },
    })

    tl.from(animateOverlay, 1, {
      width: '0%',
      ease: Power2.easeInOut,
    })
      .fromTo(
        image,
        {
          autoAlpha: 0,
          scale: 1.6,
        },
        {
          autoAlpha: 1,
           scale: 1,
          duration: 2,
        },
      )
      .to(
        animateOverlay,
        0.7,
        {
          width: '0%',
          ease: Power2.easeInOut,
        },
        '-=1.7',
      )
  })

  return (
    <>
      <div
        className="image-animate__wrapper overflow-hidden"
        ref={wrapperImage}
      >
        <img
          className="invisible"
          src={props.source}
          ref={(el) => (image = el)}
        />
        <div ref={(el) => (animateOverlay = el)} className="bgoverlay"></div>
      </div>
    </>
  )
}
export default ImageAnimation
