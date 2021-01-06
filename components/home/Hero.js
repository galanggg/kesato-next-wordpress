import SwiperCore, { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'
// import 'swiper/components/pagination/pagination.scss'

SwiperCore.use([Pagination])

const Hero = () => {
  return (
    <section id="hero-id">
      <div className="hero-wrapper pb-24">
        <div className="grid-container">
          <div class="grid-item lg:pr-1 pb-1">
            <div className="service-card">
              <img
                className="absolute object-cover w-full h-full "
                src="grid1.png"
              />
              <div className="overlay">
                <div className="overlay-desc">
                  <h3>Case Study - Colors Canggu Bali</h3>
                  <p>Social Media</p>
                  <p>Campaign</p>
                  <p>Management</p>
                </div>
              </div>
            </div>
          </div>
          <div class="grid-item grid-no2 lg:pr-1 pb-1">
            <div className="service-card">
              <img
                className="absolute object-cover w-full h-full "
                src="grid2.png"
              />
              <div className="overlay">
                <div className="overlay-desc">
                  <h3>Case Study - Majo Villas </h3>
                  <p>Re-Branding Your Logo</p>
                  <p>and Business Identity </p>
                </div>
              </div>
            </div>
          </div>
          <div class="grid-item pb-1">
            <div className="service-card">
              <img
                className="absolute object-cover w-full h-full "
                src="grid3.png"
              />
              <div class="overlay">
                <div className="overlay-desc">
                  <h3>Case Study - Soo Santai</h3>
                  <p>Simple eCommerce Solution for Small Business</p>
                </div>
              </div>
            </div>
          </div>
          <div class="grid-item lg:pr-1 pb-1">
            <div className="service-card">
              <img
                className="absolute object-cover w-full h-full "
                src="grid5.png"
              />
              <div class="overlay">
                <div className="overlay-desc">
                  <h3>Case Study - Ticket to The Moon</h3>
                  <p>Custome eCommerce for Well Establish Business</p>
                </div>
              </div>
            </div>
          </div>
          <div class="grid-item ">
            <div className="service-card">
              <img
                className="absolute object-cover w-full h-full "
                src="grid4.png"
              />
              <div class="overlay">
                <div className="overlay-desc">
                  <h3>Case Study - Beach Walk Bali</h3>
                  <p>Custome Solution for Biggest Shopping Mall in Bali</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="swiper-hero-mb">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          className="mb-hero-carousel"
          pagination={{ clickable: true }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div className="mb-hero-wrapper">
              <div className="service-card">
                <img
                  className="absolute object-cover w-full h-full "
                  src="grid1.png"
                />
                <div className="overlay">
                  <div className="overlay-desc">
                    <h3>Case Study - Colors Canggu Bali</h3>
                    <p>Social Media</p>
                    <p>Campaign</p>
                    <p>Management</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="mb-hero-wrapper">
              <div className="service-card">
                <img
                  className="absolute object-cover w-full h-full "
                  src="grid2.png"
                />
                <div className="overlay">
                  <div className="overlay-desc">
                    <h3>Case Study - Majo Villas </h3>
                    <p>Re-Branding Your Logo</p>
                    <p>and Business Identity </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="mb-hero-wrapper">
              <div className="service-card">
                <img
                  className="absolute object-cover w-full h-full "
                  src="grid3.png"
                />
                <div class="overlay">
                  <div className="overlay-desc">
                    <h3>Case Study - Soo Santai</h3>
                    <p>Simple eCommerce Solution for Small Business</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="mb-hero-wrapper">
              <div className="service-card">
                <img
                  className="absolute object-cover w-full h-full "
                  src="grid5.png"
                />
                <div class="overlay">
                  <div className="overlay-desc">
                    <h3>Case Study - Ticket to The Moon</h3>
                    <p>Custome eCommerce for Well Establish Business</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="mb-hero-wrapper">
              <div className="service-card">
                <img
                  className="absolute object-cover w-full h-full "
                  src="grid4.png"
                />
                <div class="overlay">
                  <div className="overlay-desc">
                    <h3>Case Study - Beach Walk Bali</h3>
                    <p>Custome Solution for Biggest Shopping Mall in Bali</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  )
}

export default Hero
