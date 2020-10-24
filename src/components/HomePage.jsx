import React from 'react'
import css from './../modules/HomePage.module.css'
import logo from './../img/logo.png'
import search from './../modules/Search.module.css'
import phone from './../img/phone.png'
import location from './../img/location.png'
import arrow from './../img/left-arrow.png'
import {Status} from './miniComponent/Status'

const HomePage = () => {
  return (
    <div>
      <header>
        {/* Start top menu */}
        <div className={css.top_menu}>
          <div className={css.logo}>
            <a><img src={logo} alt="Logo"/></a>
          </div>
          <div className={css.navigator}>
            <nav>
              <ul>
                <a href="/about">
                  <li>About</li>
                </a>
                <a href="/appartments">
                  <li>Appartments</li>
                </a>
                <a href="/howItWork">
                  <li>How It Work</li>
                </a>
                <a href="/agents">
                  <li>Agents</li>
                </a>
                <a href="/contactUs">
                  <li>Contact Us</li>
                </a>
              </ul>
            </nav>
            <div className={css.login}>
              <nav>
                <ul>
                  <a href="/gettingStarted">
                    <li className={css.started}>Getting Started</li>
                  </a>
                  <a href="/joinUs">
                    <li>Join Us</li>
                  </a>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        {/* End menu top */}

        {/* Start main menu */}
        <div className={css.main_menu}>

          <div className={css.test}>
            <div className={css.left}>
              <h1>find your new modern apartement</h1>
              <div className={search.search}>
                <input type="text" placeholder={"Search locations"}/>
                <button>Search</button>
              </div>
              <div className={css.scroll_down}>
                <a href=""><img src={arrow} alt="arrow"/> scroll down</a>
              </div>
            </div>

            <div className={css.info}>
              <div className={css.phone}>
                <div className={css.phone_icon}>
                  <img src={phone} alt="phone"/>
                </div>
                <p>(000) 123-4567</p>
              </div>
              <div className={css.location}>
                <div className={css.location_icon}>
                  <img src={location} alt="location"/>
                </div>
                <p>Melboume,Australia</p>
              </div>
            </div>
          </div>
        </div>
        {/* End main menu */}

        {/* Start main bottom */}
        <div className={css.main_bottom}>
          <div className={css.left2}>
            <div className={css.text_left}>
              <h2>Our's company statistics</h2>
            </div>
            <div className={css.text}>
              <p>
                In this space market-facing, yet UI work flows, or bake it in. Red flag we need a recap by
                eod, cob or whatever comes first agile at the end day. Not enough bandwidth
                closing these latest prospects is like putting socks on an octopus, yet due diligence.
              </p>
              <p>
                We need to get all stakeholders up to speed and in the right place hard stop, or technologically
                savvy or pre launch. Pro-sumer software commitment to the cause offline this
                discussion and wiggle room blue sky. Beef up teams were able to drive adoption and
                awareness. Screw the pooch killing it.
              </p>
            </div>
          </div>
          <div className={css.right2}>
            <div className={css.statistics}>
              <Status number='748' name='Appartments'/>
              <Status number='3854' name='Clients'/>
              <Status number='24' name='Employees'/>
              <Status number='14' name='Awards'/>
            </div>
          </div>
        </div>
        {/* End main bottom */}
      </header>
    </div>
  )
}

export default HomePage