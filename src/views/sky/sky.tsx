import React from 'react'
import styles from '@/shared/ui/page.module.scss'
import { ContentBlock, ImageWrapper } from '@/shared/ui/Parallax'
import { InfoList, SinglePageLayout } from '@/widgets'
import { E_ROUTES } from '@/shared'
import { items } from './config'
import commonStyles from '@/views/common-platform/common-platform.module.scss'
import skyStyles from './sky.module.scss'

export const SkyView = () => {
  return (
    <SinglePageLayout
      title="Sky Television"
      subtitle="Improving Sky Go App functionalities and rewrite the User Experience on Sky-Q and Sky-On-Demand mobile Applications"
      nextPageTitle="Pilatus Website"
      nextPageLink={E_ROUTES.PILATUS}
      previousPageLink={E_ROUTES.SHARELY}
      industryBlock={<InfoList items={items} />}
    >
      <div className={styles.container}>
        <ImageWrapper
          images={[{ src: '/bg/sky/sky1.webp', alt: 'Mockup image' }]}
          imageWrapperClassName={styles.firstImage}
          imagePriority={true}
          isSkeleton={true}
        />

        <ContentBlock
          label="My Role"
          texts={[
            'Sky began as a pan-European TV network and evolved into a streaming leader, expanding its content across platforms to meet changing viewer habits.',
            'Before taking on my UX/UI role, I briefly joined the Graphic Design Team—an experience that gave me insight into the fast-paced, always-on broadcast environment. <br> This foundation helped me design for Sky’s digital products, including Sky Go and Sky On Demand, aligning user experience with the company’s dynamic content delivery.',
          ]}
        />

        <p className={[styles.blockSpacing, skyStyles.skyTitle].join(' ')}>
          “Having had the opportunity to work in different roles has taught me how to communicate
          clearly and effectively, with a strong emphasis on data visualization and visual clarity
          in messaging”
        </p>

        <div className={[styles.blockSpacing, commonStyles.gridElement].join(' ')}>
          <div className={commonStyles.gridElWrapper}>
            <ImageWrapper
              images={[{ src: '/bg/sky/sky5.webp', alt: 'Mockup image' }]}
              imageWrapperClassName={commonStyles.imageElement}
              isSkeleton={true}
            />
          </div>
          <div className={commonStyles.gridElWrapper}>
            <ImageWrapper
              images={[{ src: '/bg/sky/sky4.webp', alt: 'Mockup image' }]}
              imageWrapperClassName={commonStyles.imageElement}
              isSkeleton={true}
            />
          </div>
        </div>

        <ContentBlock
          label="Challenges and Goals"
          texts={[
            '<b>Cross-Platform UX Strategy</b><div class="startSpacing">Sky Go (mobile) and Sky On Demand (OTT/TV) serve different platforms, each with unique user behaviors. Our team conducted user testing to identify which UX elements to unify and where to tailor the experience—balancing consistency with platform-specific needs.</div>',
            '<b>Expanding the User Base</b><div class="startSpacing">As early pioneers in streaming, Sky faced growing competition from newer platforms. One key objective was to analyze user feedback alongside industry trends and competitor features. These insights guided the development of new functionalities, enhancing the overall user experience.</div>',
            '<b>User-Centered Design Approach</b><div class="startSpacing">User research was central to Sky’s design process. Early on, I worked directly with well-profiled subscriber groups, conducting product tests that provided valuable insights to shape and refine the user experience.</div>',
          ]}
        />

        <ImageWrapper
          images={[{ src: '/bg/sky/sky2.webp', alt: 'Mockup image' }]}
          imageWrapperClassName={[styles.blockSpacing].join(' ')}
          isSkeleton={true}
        />

        <ContentBlock
          label="Takeaway"
          texts={[
            'My time at Sky was a transformative experience, where I contributed to launching new features, enhancing app sections, and improving usability based on user feedback.',
            'A key achievement was redesigning the login and onboarding experience, ensuring accessibility across platforms while streamlining the process to reduce user effort.',
            'Beyond the technical work, I gained valuable skills in collaboration within a multinational corporation, adopting data-driven design methodologies, and applying diverse testing techniques. I learned that a solid foundation of research and analysis is essential for creating truly user-centered experiences.',
          ]}
        />

        <ImageWrapper
          images={[{ src: '/bg/sky/sky3.webp', alt: 'Mockup image' }]}
          imageWrapperClassName={[styles.blockSpacing].join(' ')}
          isSkeleton={true}
        />
      </div>
    </SinglePageLayout>
  )
}
