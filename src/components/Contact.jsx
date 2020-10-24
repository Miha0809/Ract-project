import React from 'react'
import css from './../modules/Contact.module.css'
import location from '../img/location.png'
import Text from "./miniComponent/Text";

const Contact = (props) => {
  return (
    <div className={css.wrapper}>
      <div className={css.content}>

        <div className={css.left_background}>
          <div className={css.left}>
            <div className={css.background}></div>
            <div className={css.location}>
              <div className={css.location_icon}>
                <img src={location} alt="location"/>
              </div>
              <p>Melboume,Australia</p>
            </div>
          </div>
        </div>

        <div className={css.right_text}>
          <Text title="Building"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, hic neque.
                Nulla architecto, deleniti illo laudantium ullam voluptatem sequi,
                repudiandae ea cumque hic a alias vero distinctio saepe suscipit voluptate ratione!"/>
        </div>

        <div className={css.left_text}>
          <Text title="Building"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, hic neque.
                Nulla architecto, deleniti illo laudantium ullam voluptatem sequi,
                repudiandae ea cumque hic a alias vero distinctio saepe suscipit voluptate ratione!"/>
        </div>

        <div className={css.right_background}>
          <div className={css.right}>
            <div className={css.background}></div>
            <div className={css.location}>
              <div className={css.location_icon}>
                <img src={location} alt="location"/>
              </div>
              <p>Melboume,Australia</p>
            </div>
          </div>
        </div>

        <div className={css.left_background}>
          <div className={css.left}>
            <div className={css.background}></div>
          </div>
        </div>

        <div className={css.right_text}>
          <Text title="Building"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, hic neque.
                Nulla architecto, deleniti illo laudantium ullam voluptatem sequi,
                repudiandae ea cumque hic a alias vero distinctio saepe suscipit voluptate ratione!"/>

          <button>Show me more</button>
        </div>

      </div>
    </div>
  )
}

export default Contact