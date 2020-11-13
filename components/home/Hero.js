const Hero = () => {
  return (
    <section>
      <div className="hero-wrapper py-3 pb-24">
        <div className="grid-container">
          <div class="grid-item pr-1 pb-1">
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
                  <p>Managemen</p>
                </div>
              </div>
            </div>
          </div>
          <div class="grid-item grid-no2 pr-1">
            <div className="service-card">
              <img
                className="absolute object-cover w-full h-full "
                src="grid2.png"
              />
              <div className="overlay">
                <div className="overlay-desc">
                  <h3>Case Study - Majo Villas </h3>
                  <p>Re-Branding Your Logo</p>
                  <p> and Business Identity </p>
                </div>
              </div>
            </div>
          </div>
          <div class="grid-item">
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
          <div class="grid-item pr-1">
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
          <div class="grid-item">
            <div className="service-card">
              <img
                className="absolute object-cover w-full h-full "
                src="grid4.png"
              />
              <div class="overlay">
                <div className="overlay-desc">
                  <h3>Case Study - Beach Walk Bali</h3>
                  <p> Custome Solution for Biggest Shopping Mall in Bali</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
