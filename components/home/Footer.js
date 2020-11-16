import React from 'react'
import Container from '../Container'
import tw, { styled } from 'twin.macro'
import { collectFields } from 'graphql/execution/execute'

const Footer = () => {
  return (
    <section className="pt-32 pb-20">
      <div className="container-footer">
        <div className="border-solid border border-black wrapper-footer">
          <div className="col-footer col-info">
            <div className="w-full">
              <h3>(0361) 732873</h3>
              <p> From 9AM to 5PM (UTC+8)</p>
            </div>
          </div>
          <div className="col-footer col-info">
            <div className="w-full">
              <h3> Bali Office</h3>
              <p>
                Jalan Plawa No.8A, Seminyak, Kuta, Kabupaten Badung - Bali
                80361, Indonesia
              </p>
            </div>
          </div>
          <div className="col-footer col-info">
            <div className="w-full">
              <h3> Jakarta Office</h3>
              <p>
                Graha Milestone, Jalan Limau 1/28, Kebayoran Baru, Jakarta
                Selatan 12130, Indonesia
              </p>
            </div>
          </div>
          <div className="col-footer col-info">
            <div className="w-full">
              <h3> Fill out our online form</h3>
              <p> Or by email at hello@kesato.com</p>
            </div>
          </div>
          <div className="col-footer col-social-icon">
            <div className="w-full">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 51.7 48.3">
                <defs />
                <path d="M29 44h-8.5V26.2h-4.7V18h4.7v-4.6c0-4.2 2.6-9.1 10.1-9.1 2.6 0 4.5.2 4.6.3l.8.1-.2 7.7h-.9-4.1c-1.6 0-1.8.4-1.8 1.9V18h7l-.4 8.2H29V44zm-6.8-1.8h5V24.4h6.7l.2-4.6h-6.9v-5.6c0-1.8.4-3.7 3.6-3.7H34l.1-4.3c-.8-.1-2.1-.2-3.6-.2-6.1 0-8.3 3.8-8.3 7.4v6.4h-4.7v4.6h4.7v17.8zm0 0" />
              </svg>
            </div>
          </div>
          <div className="col-footer col-social-icon">
            <div className="w-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="Layer_1"
                x="0"
                y="0"
                version="1.1"
                viewBox="0 0 51.7 48.3"
                fill="020203"
              >
                <defs />
                <path
                  d="M34.2 4H17.5C11 4 5.8 9.3 5.8 15.8v16.6c0 6.5 5.3 11.8 11.8 11.8h16.6C40.7 44.3 46 39 46 32.5V15.8C46 9.3 40.7 4 34.2 4zm0 38.4H17.5c-4.8 0-9.9-3.8-9.9-9.9V15.8c0-5.6 5.3-9.9 9.9-9.9h16.6c4.8 0 9.9 3.8 9.9 9.9v16.6c.1 4.9-3.9 10-9.8 10z"
                  class="st0"
                />
                <path
                  d="M36.7 11.5c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8 1.8-.8 1.8-1.8-.8-1.8-1.8-1.8zM25.9 13.2c-6 0-11 4.9-11 11s4.9 11 11 11 11-4.9 11-11-5-11-11-11zm8.8 10.9c0 4.9-4 8.8-8.8 8.8-4.9 0-8.8-4-8.8-8.8s4-8.8 8.8-8.8c4.8 0 8.8 4 8.8 8.8z"
                  class="st0"
                />
              </svg>
            </div>
          </div>
          <div className="col-footer col-social-icon">
            <div className="w-full">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65.2 48.3">
                <defs />
                <path d="M34 44c-.1 0 0 0 0 0-6.3 0-13.2-.2-20.4-.6-4.3-.2-7.6-3.5-8.1-8-.8-7.5-.8-15.1 0-22.5.5-4.5 3.8-7.8 8.1-8 12.5-.8 25.3-.8 38.2 0 4.3.3 7.6 3.5 8.1 8 .8 7.2.8 14.7 0 22.5-.5 4.5-3.7 7.7-8.1 8-5.6.4-11.5.6-17.8.6zM32.5 6.4c-6.3 0-12.6.2-18.8.6-3.3.2-5.7 2.7-6.1 6.1-.8 7.3-.8 14.7 0 22.1.4 3.5 2.8 5.9 6.1 6.1 7.2.4 14 .6 20.3.6 6.3 0 12.2-.2 17.6-.6 3.3-.2 5.7-2.7 6.1-6.1.8-7.6.8-15 0-22.1-.4-3.5-2.8-5.9-6.1-6.1-6.4-.4-12.8-.6-19.1-.6zm-5.3 10.2v14.6l14-7.2-14-7.4zm0 0" />
              </svg>
            </div>
          </div>
          {/* <div class="phone-footer">sdsdkskksksskskskksksksf</div>
          <div className="bali-footer">sd</div>
          <div className="jkt-footer"></div>
          <div className="form-footer"></div>
          <div className="fb-footer"></div>
          <div className="ig-footer"></div>
          <div className="ty-footer"></div> */}
        </div>
      </div>
      <div className="footer-2">
        <ul className="lg:flex items-center justify-center divide-x divide-gray-600 leading-none">
          <li className="px-3">
            <a href=""> © 2018 Kesato. All Rights Reserved</a>
          </li>
          <li className="px-3  ">
            <a href=""> View Career Openings</a>
          </li>
          <li className="px-3 ">
            <a href=""> Chat Us Now </a>
          </li>
          {/* <li className="px-3 py-2 b-r-4">
            © 2018 Kesato. All Rights Reserved
          </li>
          <li className="px-3 py-2 b-r-4"> View Career Openings </li>
          <li className="px-3 py-2 b-r-4"> Chat Us Now</li> */}
        </ul>
      </div>
    </section>
  )
}

export default Footer
