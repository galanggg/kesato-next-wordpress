import React, { useEffect, useState, useRef } from 'react'
import clsx from 'clsx'

export function LazyImage({ className, src, alt, lqip, aspectRatio = 2 / 3 }) {
  const [loaded, setLoaded] = useState(false)
  const imgRef = useRef()
  useEffect(() => {
    if (imgRef.current && imgRef.current.complete) {
      setLoaded(true)
    }
  }, [])
  return (
    <div className={clsx('wrapper', className)}>
      <div style={{ paddingBottom: `${100 / aspectRatio}%` }} />
      {lqip && <img src={lqip} alt="" aria-hidden="true" />}
      <img
        loading="lazy"
        src={src}
        alt={alt}
        ref={imgRef}
        onLoad={() => setLoaded(true)}
        className={clsx('source', loaded && 'loaded')}
      />
      <style jsx>
        {`
          .wrapper {
            position: relative;
            overflow: hidden;
          }
          img {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            object-fit: cover;
            object-position: center;
          }
          .source {
            opacity: 0;
            transition: opacity 1200ms;
          }
          .loaded {
            opacity: 1;
          }
        `}
      </style>
    </div>
  )
}
