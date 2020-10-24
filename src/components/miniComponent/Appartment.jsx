import React from 'react'
import css from '../../modules/miniModule/Appartment.module.css'

const Appartment = (props) => {
  return (
    <div className={css.appartments}>
      <div className={css.appartment}>
        <div className={css.photo}>
          <h1>{props.photo}</h1>
        </div>
        <div className={css.description}>
          <div className={css.name}>
            <p>{props.name}</p>
          </div>
          <div className={css.price}>
            <p>{props.price}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Appartment