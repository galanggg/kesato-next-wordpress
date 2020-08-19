import React, { useState, useEffect, useRef } from 'react'
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

function Experimental() {
  return (
    <div className="App">
      <h3>
        <a href="https://hangindev.com/blog/create-a-lazy-loading-image-component-with-react-hooks">
          Read: Create a Lazy-Loading Image Component with React Hooks
        </a>
      </h3>
      <figure>
        <LazyImage
          className="demo"
          aspectRatio={16 / 9}
          lqip="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAUACYDASIAAhEBAxEB/8QAGQABAAMBAQAAAAAAAAAAAAAAAAQGBwEF/8QALhAAAgEDAgQEBAcAAAAAAAAAAQIDAAQRBRIGITFBBxMikTJRgbEVFkJhYnGh/8QAFgEBAQEAAAAAAAAAAAAAAAAABAMC/8QAHhEAAgICAgMAAAAAAAAAAAAAAAIBAxESITEyM1H/2gAMAwEAAhEDEQA/AKdpOiaOHUvYzs2wJkZwB860Dg/QbKxvIntLZkLyB2Dsctjn3qPZ6JqDoRHPatjphtpHuKi8TaxJwzabblliunOEO4MCRjv9aKuWbECZ1WMlz8QdJGu2MrpBDaX1uoeKbzAQe+04+/Y1n35cW5tUubGdkWT48+rDd/8Aar3F3G9xqkCx2mYIgm2RlyDI3T2PXlUHw/1S/E2oWspmWJlEkLHKq20AMA3TuOVVsqbTJiHSW1JGqcIzysQ1yylXOCUxkUr0bi6uJG3Sv8PpCh8/WlRiW+mtENe06OMBB5antzH7VmvjnaRbbaQAq8YAUj+XI/YUpSa/Ii/RXNI0Kxn8Fte1x4z+J2N5EkMwPRSUBGOn6z7D5VbdFUbEhb1RhgmG59uZ/ulKdVyjg7vZWdvNJtJcF4+eTzHKlKUAcf/Z"
          src="https://images.unsplash.com/photo-1518991791750-044b923256f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&h=630&q=80"
          alt="a woman covering face with frosted glass"
        />
        <figcaption>refresh the page to see the effect</figcaption>
      </figure>
      <style jsx>
        {`
          h3 {
            margin-bottom: 0.25rem;
          }
          a {
            color: #4299e1;
            text-decoration: none;
          }
          figcaption {
            margin-top: 0.3rem;
            color: #4a5568;
            font-size: 0.9rem;
          }
          .App {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            width: 100%;
            min-height: calc(100vh - 100px);
          }
          .demo {
            width: 600px;
            max-width: calc(100vw - 36px);
            border-radius: 8px;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
              0 4px 6px -2px rgba(0, 0, 0, 0.05);
          }
        `}
      </style>
    </div>
  )
}

export default Experimental
