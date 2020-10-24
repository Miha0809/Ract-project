import React from 'react'
import css from './../../modules/miniModule/Text.module.css'

const Text = (props) => {
  return (
    <div>
      <div className={css.title}>
        <h2>{props.title}</h2>
      </div>
      <div className={css.text}>
        <p>{props.text}</p>
      </div>
    </div>
  )
}

export default Text