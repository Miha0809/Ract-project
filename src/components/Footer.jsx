import React from 'react'
import css from './../modules/Footer.module.css'

const Footer = () => {
  return (
    <div className={css.background}>
      <footer>
        <div className={css.top}>
          <div className={css.title}>
            <h1>
              Luxestate <br/>
              Explore Real Estate
            </h1>
          </div>
          <div className={css.input}>
            <input type="text" placeholder="Subscribe to our newsletter"/>
          </div>
        </div>
        <div className={css.bottom}>
          <div className={css.left}>
            <div className={css.title}>
              <h1>Luxestate</h1>
            </div>
          </div>
          <div className={css.right}>
            <ul>
              <li><span className={css.name}>Luxestate</span></li>
              <li>Agents</li>
              <li>Hunters</li>
            </ul>
            <ul>
              <li><span className={css.name}>Company</span></li>

              <li>About</li>
              <li>FAQ</li>
              <li>Contact</li>
              <li>Social</li>
            </ul>
            <ul>
              <li><span className={css.name}>Product</span></li>

              <li>Appartments</li>
              <li>How it works</li>
            </ul>
            <ul>
              <li><span className={css.name}>Services</span></li>

              <li>Renting</li>
              <li>Selling</li>
              <li>Building</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer