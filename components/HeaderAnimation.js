import { useEffect, useRef } from 'react'
import { TimelineLite, Power4, gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

const HeaderAnimation = (props) => {
  // let texTrigger = useRef(null)
  let animateText = useRef(null)
  let arraytext = props.source.split(' ')

  useEffect(() => {
    //   gsap.registerPlugin(ScrollTrigger)

    let tl = gsap.timeline()

    //   ScrollTrigger.create({
    //     // trigger: '.image-animate__wrapper',
    //     trigger: texTrigger,
    //     start: 'top center',
    //     end: 'bottom top',
    //     scrub: true,
    //     // toggleClass: '.visible', //this toggles the specified CSS class on the trigger element
    //     onEnter: () => {
    //       console.log('enter')
    //       tl.play()
    //     }, //this fires the drawPoints function when the trigger enters the scroller from above
    //   })

    tl.staggerFrom(animateText, 1.5, { y: '100%', ease: Power4.easeOut }, 0.15)
  })

  return arraytext.map((text) => (
    <h1 key={text}>
      <span ref={(el) => (animateText = el)} className="hidetext">
        {text}
      </span>
    </h1>
  ))
}

export default HeaderAnimation
