import React from 'react'
import css from '../../modules/miniModule/Status.module.css'

export const Status = (props) => {
  return (
    <div className={css.status}>
      <div className={css.text_status}>
        <p className="number">{props.number}</p>
        <p className={css.name}>{props.name}</p>
      </div>
    </div>
  )
}