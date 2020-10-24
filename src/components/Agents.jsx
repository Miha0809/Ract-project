import React from 'react'
import css from './../modules/Agents.module.css'
import Appartment from './miniComponent/Appartment'

const Agents = () => {
  return (
    <div>
      <div className={css.background}>
        <main>
          <div className={css.content}>
            <div className={css.header}>
              <div className={css.title}>
                <h1>Meet our agents</h1>
              </div>
              <div className={css.text}>
                <p>
                  In this space market-facing, yet UI work flows, or bake it in.
                  Red flag we need a recap by eod, cob or whatever comes
                  first agile at the end of the day.
                </p>
              </div>
            </div>

            <div className={css.apartments}>

              <Appartment photo='Photo' name='Agent' price='Mr. Luke Skywalker'/>
              <Appartment photo='Photo' name='Agent' price='Mr. Luke Skywalker'/>
              <Appartment photo='Photo' name='Agent' price='Mr. Luke Skywalker'/>

            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Agents