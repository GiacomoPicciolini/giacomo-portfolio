'use client'
import React from 'react'
import styles from './about.module.scss'
import { Header } from '@/widgets'
import { DownloadCv, Linkedin } from '@/shared'
import { Tooltip } from '@/views/about/lib'

export const AboutView = () => {
  return (
    <div className={[styles.mainWrapper].join(' ')}>
      <Header isCloseButton={true} baseLinksColorStyle={styles.linksColorStyle} menuButtonClassName='menuButtonBlack' />
      <main className={styles.main}>
        <section className={styles.about}>
          <h1 className={styles.title}>About</h1>

          <div className={styles.description}>
            <p>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              I'm a UX/UI Designer from <strong>Bologna</strong>, Italy, where I began my journey
              through a university internship that led to a role at{' '}
              <Tooltip
                hoveredText="LeadSpot"
                imagePath="/bg/about/leadspot.webp"
                width={263}
                height={277}
                placement="top-end"
              />
              , a local design agency. Over three years, I gained hands-on experience while earning
              my degree in Communication of New Media and UX. <b /> Eager to grow, I moved to{' '}
              <strong>Milan</strong> for a Master’s at <strong>IED</strong>, then joined{' '}
              <Tooltip
                hoveredText="Sky Television"
                imagePath="/bg/about/sky.webp"
                width={263}
                height={277}
                placement="top-end"
              />
              , where I worked on large-scale digital products. <br /> I later relocated to{' '}
              <strong>Zurich</strong> to join{' '}
              <Tooltip
                hoveredText="Sharely"
                imagePath="/bg/about/sharely.webp"
                width={263}
                height={277}
                placement="top-end"
              />
              , a dynamic startup where I could experiment, learn, and shape innovative user
              experiences daily.
            </p>
          </div>

          <div className={styles.work}>
            <p>
              Today, I work at{' '}
              <Tooltip
                hoveredText="Pilatus Aircraft"
                imagePath="/bg/about/pilatus.webp"
                width={263}
                height={277}
                placement="top-end"
              />{' '}
              in the GBTS department, where I design UX/UI for a range of aviation training tools.{' '}
              <br /> I collaborate with cutting-edge technologies and passionate teams to help shape
              the future of aircraft training.
            </p>
          </div>

          <div className={styles.footer}>
            <a href="mailto:giacomo.picciolini3@gmail.com" className={styles.email}>
              giacomo.picciolini3@gmail.com
            </a>
            <div className={styles.links}>
              <DownloadCv />
              <Linkedin />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
