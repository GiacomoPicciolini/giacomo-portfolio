import React from 'react'
import styles from '@/shared/ui/page.module.scss'
import { ContentBlock, ImageWrapper } from '@/shared/ui/Parallax'
import { InfoList, SinglePageLayout } from '@/widgets'
import { E_ROUTES, VideoBlock } from '@/shared'
import { items } from './config'
import commonStyles from '@/views/common-platform/common-platform.module.scss'

export const SharelyView = () => {
  return (
    <SinglePageLayout
      title="Sharely"
      subtitle="Sharely is a startup driven by a huge ambition: to change the consumption habits of Swiss citizens"
      nextPageTitle="Sky Television"
      nextPageLink={E_ROUTES.SKY}
      previousPageLink={E_ROUTES.DESIGN_SYSTEM}
      industryBlock={<InfoList items={items} />}
    >
      <div className={styles.container}>
        <ImageWrapper
          images={[{ src: '/bg/sharely/sh1.webp', alt: 'Mockup image' }]}
          imageWrapperClassName={styles.firstImage}
          imagePriority={true}
          isSkeleton={true}
        />

        <ContentBlock
          label="Overview"
          texts={[
            '"Own less, do more" encapsulates Sharely\'s vision—why own and waste when you can be part of a circular community that exchanges objects?',
            'Joining Sharely, we were ambitious and driven by a clear vision, but we faced significant challenges. Beyond economic constraints, we had to build a foundation from scratch—gathering usage data, conducting product studies, collecting user feedback, and crafting a strong, recognizable brand identity.',
          ]}
        />

        <VideoBlock path="/video/video2.mp4" blockClassName={styles.blockSpacing} />

        <ContentBlock
          texts={[
            'The goal was to analyze the environment, understand user needs, evaluate market demands, and modernize the platform to deliver the right features.',
            'We quickly launched an MVP to gather data and shape the roadmap. In parallel, we conducted extensive user testing—surveys and interviews with existing users of the old Sharely version.',
            'With the initial phase complete, the focus shifted to developing a rental platform, structured like an e-commerce system. The challenge was to meet stakeholder deadlines while driving growth to attract potential investors.',
          ]}
        />

        <VideoBlock path="/video/video3.mp4" blockClassName={styles.blockSpacing} />

        <ContentBlock
          label="The Design"
          texts={[
            'By combining analytics insights from Hotjar, Metabase, and Google Analytics with qualitative testing, we redesigned the platform while introducing new features.',
            'The design encourages users not only to search for items, following e-commerce best practices, but also to list their own, supported by an automatic price calculator. This fosters circularity and expands available choices.',
            'Built for both desktop and mobile, the platform adapts to different user types, offering tailored functionalities for individuals and stores.',
            'A centralized dashboard streamlines operations, integrating transaction management, messaging, and review services with a social media-inspired approach.',
            'A key focus was refining item categorization. Using Card Sorting, we explored user perceptions of product grouping and search behavior to optimize the browsing experience.',
          ]}
        />

        <VideoBlock path="/video/video4.mp4" blockClassName={styles.blockSpacing} />

        <ContentBlock
          label="Takeaway"
          texts={[
            'This project is particularly meaningful to me, as I’ve been involved since day one. Like any startup, we’ve faced both exhilarating successes and tough challenges—each one a valuable learning experience.',
            '<ul class="disk"><li class="markedItem">Through three rounds of investment, we’ve not only secured funding but also strengthened the company’s perceived value.</li><br /> <li class="markedItem">We revitalized a struggling brand, growing the community from a few thousand to tens of thousands of users.</li> <br />  <li class="markedItem">Key partnerships with major Swiss companies like DiePost, Migros, and Interdiscount helped expand our reach.</li> <br />  <li class="markedItem">By optimizing the user journey and introducing new, user-centric features, we achieved a 100% increase in transactions in 2022.</li> <br />  <li class="markedItem">Additionally, we quintupled the number of items listed on our platform, ensuring greater variety and accessibility for all users.</li></ul>',
          ]}
        />

        <div className={[styles.blockSpacing, commonStyles.gridElement].join(' ')}>
          <div className={commonStyles.gridElWrapper}>
            <ImageWrapper
              images={[{ src: '/bg/sharely/sh2.webp', alt: 'Mockup image' }]}
              imageWrapperClassName={commonStyles.imageElement}
              isSkeleton={true}
            />
          </div>
          <div className={commonStyles.gridElWrapper}>
            <ImageWrapper
              images={[{ src: '/bg/sharely/sh3.webp', alt: 'Mockup image' }]}
              imageWrapperClassName={commonStyles.imageElement}
              isSkeleton={true}
            />
          </div>
        </div>

        <ImageWrapper
          images={[{ src: '/bg/sharely/sh5.webp', alt: 'Mockup image' }]}
          imageWrapperClassName={[styles.blockSpacing].join(' ')}
          isSkeleton={true}
        />
      </div>
    </SinglePageLayout>
  )
}
