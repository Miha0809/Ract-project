import React from 'react'
import css from './../../modules/miniModule/Works.module.css'

const Works = (props) => {
  return (
    <div className={css.work}>
      <div className={css.number}>
        <p>{props.number}</p>
      </div>
      <div className={css.description}>
        <div className={css.title}>
          <p>{props.number} {props.title}</p>
        </div>
        <div className={css.text}>
          <p>{props.text}</p>
        </div>
        <div className={css.nameLink}>
          <a href=""><p>{props.nameLink}</p></a>
        </div>
      </div>
    </div>
  )
}

export default Works