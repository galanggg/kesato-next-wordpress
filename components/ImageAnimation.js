import { useEffect, useRef, useState } from 'react'
import { TimelineLite, Power2, gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

const ImageAnimation = (props) => {
  let image = useRef(null)
  let animateOverlay = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    let tl = gsap.timeline()

    ScrollTrigger.create({
      // trigger: '.image-animate__wrapper',
      trigger: image,
      start: 'top center',
      end: 'bottom top',
      scrub: true,
      // toggleClass: '.visible', //this toggles the specified CSS class on the trigger element
      onEnter: () => {
        console.log('enter')
        tl.play()
      }, //this fires the drawPoints function when the trigger enters the scroller from above
    })

    // const GSAP = require('gsap/CSSRulePlugin')
    // const { CSSRulePlugin } = GSAP
    // let animateOverlay = CSSRulePlugin.getRule('.image-animate__wrapper:after')

    tl.from(animateOverlay, 1, {
      // ScrollTrigger: {
      //   trigger: '.image-animate__wrapper',
      //   start: 'top center',
      //   end: 'bottom center',
      //   scrub: true, //this tells GSAP to link animation progress to scroll progress
      // },
      width: '0%',
      ease: Power2.easeInOut,
    })
      .to(image, 0.5, {
        // ScrollTrigger: {
        //   trigger: '.image-animate__wrapper',
        //   start: 'top center',
        //   end: 'bottom center',
        //   scrub: true, //this tells GSAP to link animation progress to scroll progress
        // },
        autoAlpha: 1,
      })
      .to(animateOverlay, 1, {
        // ScrollTrigger: {
        //   trigger: '.image-animate__wrapper',
        //   start: 'top center',
        //   end: 'bottom center',
        //   scrub: true, //this tells GSAP to link animation progress to scroll progress
        // },
        width: '0%',
        ease: Power2.easeInOut,
      })
    tl.pause()
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
