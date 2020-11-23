import { useEffect, useRef } from 'react'
import { TimelineLite, Power2, gsap } from 'gsap'
const ImageAnimation = (props) => {
  let image = useRef(null)
  let animateOverlay = useRef(null)
  // let imgContainer = useRef(null)

  useEffect(() => {
    let tl = new TimelineLite()

    // const GSAP = require('gsap/CSSRulePlugin')
    // const { CSSRulePlugin } = GSAP
    // let animateOverlay = CSSRulePlugin.getRule('.image-animate__wrapper:after')

    tl.from(animateOverlay, 1, {
      width: '0%',
      ease: Power2.easeInOut,
    })
      .to(image, 0.5, {
        autoAlpha: 1,
      })
      .to(animateOverlay, 1, {
        width: '0%',
        ease: Power2.easeInOut,
      })
  }, [])
  return (
    <>
      <div className="image-animate__wrapper">
        <img src={props.source} ref={(el) => (image = el)} />
        <div ref={(el) => (animateOverlay = el)} className="bgoverlay"></div>
      </div>
    </>
  )
}
export default ImageAnimation
