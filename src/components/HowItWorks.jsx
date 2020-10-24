import React from 'react'
import Text from './miniComponent/Text'
import css from './../modules/HowItWorks.module.css'
import Works from './miniComponent/Works'


const Services = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.header}>
        <div className={css.title}>
          <h1>Services</h1>
        </div>
        <div className={css.text}>
          <p>
            In this space market-facing, yet UI work flows, or bake it in.
            Red flag we need a first agile at the end of the day.
          </p>
        </div>
      </div>
      <div className={css.content}>
        <div className={css.left}></div>
        <div className={css.right}>
          <Text title="Renting"
                text="In this space market-facing, yet UI work flows, or bake it in. Red flag we need a recap by
                      eod, cob or whatever comes first agile at the end day. Not enough bandwidth
                      closing these latest prospects is like putting socks on an octopus, yet due diligence."/>
          <Text title="Selling"
                text="In this space market-facing, yet UI work flows, or bake it in. Red flag we need a recap by
                      eod, cob or whatever comes first agile at the end day. Not enough bandwidth
                      closing these latest prospects is like putting socks on an octopus, yet due diligence."/>
          <Text title="Building"
                text="In this space market-facing, yet UI work flows, or bake it in. Red flag we need a recap by
                      eod, cob or whatever comes first agile at the end day. Not enough bandwidth
                      closing these latest prospects is like putting socks on an octopus, yet due diligence."/>
        </div>
      </div>
    </div>
  )
}

const HowItWorks = () => {
  return (
    <div>
      <div className={css.header}>
        <div className={css.title}>
          <h1>How it works?</h1>
        </div>
        <div className={css.text}>
          <p>
            In this space market-facing, yet UI work flows, or bake it in.
            Red flag we need a recap by end, cob or whatever comes
            first agile at the end of the day.
          </p>
        </div>
      </div>

      <div className={css.works}>
        <Works number="01" title="Find your location"
               text="In this space market-facing, yet UI work flows, or bake it in. Red flag we neef the day"
               nameLink="Find location"/>
        <Works number="02" title="Find appartment"
               text="In this space market-facing, yet UI work flows, or bake it in. Red flag we neef the day"
               nameLink="Find appartment"/>
        <Works number="03" title="Make contact"
               text="In this space market-facing, yet UI work flows, or bake it in. Red flag we neef the day"
               nameLink="Make contact"/>
      </div>

      <div className={css.services}>

        <Services/>
      </div>
    </div>
  )
}

export default HowItWorks