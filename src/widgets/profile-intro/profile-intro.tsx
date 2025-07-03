import React from 'react'

import styles from './profile-intro.module.scss'
import Image from 'next/image'
import { FadeInScroll } from '@/shared'

export const ProfileIntro = () => {
  return (
    <FadeInScroll>
      <div className={styles.profileIntro}>
        <p>
          Hi, I’m Giacomo, a <b>Senior UX/UI Designer</b> passionate about crafting intuitive
          digital experiences that bridge user needs and business goals.
        </p>

        <br />
        <p>
          Currently at{' '}
          <Image
            src="/img/plane-icon-dark-blue.svg"
            alt="plane-icon-dark"
            width={24}
            height={24}
            className={['dark-blue-icon', styles.iconInline].join(' ')}
          />{' '}
          <Image
            src="/img/plane-icon-bluewish.svg"
            alt="plane-icon-bluewish"
            width={24}
            height={24}
            className={['blueish-icon', styles.iconInline].join(' ')}
          />{' '}
          <b>Pilatus Aircraft</b>, I design <b>ERP software</b> and <b>training tools</b> that power
          the future of aviation.
        </p>
      </div>
    </FadeInScroll>
  )
}
