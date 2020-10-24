import React from 'react'
import Appartment from './miniComponent/Appartment'
import css from './../modules/Appartments.module.css'
import search from '../modules/Search.module.css'

const Appartments = () => {
  return (
    <div>
      <div className={css.background}>
        <main>
          <div className={css.more}>
            <h2>More then 500+ appartments for rent</h2>
          </div>

          <div className={css.appartments}>
            <Appartment photo='Photo' name='Name product' price='$3.500'/>
            <Appartment photo='Photo' name='Name product' price='$3.500'/>
            <Appartment photo='Photo' name='Name product' price='$3.500'/>
            <Appartment photo='Photo' name='Name product' price='$3.500'/>
            <Appartment photo='Photo' name='Name product' price='$3.500'/>
            <Appartment photo='Photo' name='Name product' price='$3.500'/>
          </div>

          <div className={css.bottom}>
            <div className={`${search.search} ${css.search}`}>
              <input type="text" placeholder={"Search locations"}/>
              <button>Search</button>
            </div>
            <div className={css.viewAll}>
              <button>View all appartments</button>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Appartments