import React from 'react'
import styles from '@/shared/ui/page.module.scss'
import { ContentBlock, ImageWrapper } from '@/shared/ui/Parallax'
import { InfoList, SinglePageLayout } from '@/widgets'
import { E_ROUTES, Hint, VideoBlock } from '@/shared'
import { items } from './config'
import { GridShowcase } from '@/views/common-platform/ui/grid-showcase/grid-showcase'
import commonStyles from './common-platform.module.scss'

export const CommonPlatformView = () => {
  return (
    <SinglePageLayout
      title="Common Platform"
      subtitle='End-to-End Development of "Common Platform" Suite Products: From Concept to Delivery'
      nextPageTitle="Design System"
      nextPageLink={E_ROUTES.DESIGN_SYSTEM}
      previousPageLink={E_ROUTES.VR}
      industryBlock={<InfoList items={items} />}
    >
      <div className={styles.container}>
        <ImageWrapper
          images={[{ src: '/bg/common/cm1.webp', alt: 'Mockup image' }]}
          imageWrapperClassName={styles.firstImage}
          imagePriority={true}
          isSkeleton={true}
        />

        <ContentBlock
          label="Project Overview"
          texts={[
            'Just as in any other field, the military aviation sector has felt the need to innovate to keep up with the times, and Pilatus has decided to seize the opportunity.',
            'At the beginning of 2022, the "Common Platform" project was launched, aimed at creating new teaching tools based on the latest technologies, improving and integrating established products.',
          ]}
        />

        <VideoBlock path="/video/video9.mp4" blockClassName={styles.blockSpacing} />

        <ContentBlock
          label="Challenges and Goals"
          texts={[
            'The ultimate goal was to develop a wide range of products that cover every aspect of Training Academy instruction.',
            'Theoretical lessons, based on images and 3D aircraft models, VR and XR familiarization devices, mission planning and debriefing tools, full-flight simulators.',
            'The real goal was to create this set of products, interconnecting them through a centralized management system. This system, called Academy TMS, not only collects and analyzes data but also schedules the academic year and manages content, training assets and Users.',
          ]}
        />

        <div className={[styles.blockSpacing, commonStyles.gridElement].join(' ')}>
          <div className={commonStyles.gridElWrapper}>
            <ImageWrapper
              images={[{ src: '/bg/common/cm2.webp', alt: 'Mockup image' }]}
              imageWrapperClassName={commonStyles.imageElement}
              isSkeleton={true}
            />
          </div>
          <div className={commonStyles.gridElWrapper}>
            <ImageWrapper
              images={[{ src: '/bg/common/cm3.webp', alt: 'Mockup image' }]}
              imageWrapperClassName={commonStyles.imageElement}
              isSkeleton={true}
            />
          </div>
        </div>

        <ImageWrapper
          images={[{ src: '/bg/common/cm4.webp', alt: 'Mockup image' }]}
          imageWrapperClassName={[styles.blockSpacing].join(' ')}
          isSkeleton={true}
        />

        <ContentBlock
          label="Building a Process"
          texts={[
            'My first Goal was to understand how to incorporate Design discipline into an already well-defined development process.',
            'We used the Google Design Sprint methodology, tailoring the process to fit our needs and expectations, as baseline to create our own design process.',
            'Introducing workshops, User Research and collaborating with other departments, we were at the end able to fit Design discipline into the Pilatus Lifecycle, starting immediately to see on the products under development results and improvements.',
          ]}
        />

        <div className={styles.blockSpacing}>
          <GridShowcase />
        </div>

        <Hint title="Hover to see the Redesign" isVerticalCentered={true} />

        <ContentBlock
          label="The Design"
          texts={[
            'I have designed the UX and UI for three completely new products: Academy TMS, Interactive Wallboards, and Familiarization Learning CBT.',
            'In the meantime, I completed a full redesign of existing products such as Mission Planner, Debrief System, and Computer-Based Training. This redesign aimed to unify their visual appearance and add new features and functionalities, enabling data exchange and full integration with the product suite.',
            'Through user research, I tackled complex topics like data exchange and content management. The research and testing allowed us to simplify the user journey as much as possible in very complex management software used by many aviation academies worldwide.',
          ]}
        />

        <ImageWrapper
          images={[{ src: '/bg/common/cm5.webp', alt: 'Mockup image' }]}
          imageWrapperClassName={styles.blockSpacing}
          isSkeleton={true}
        />

        <ContentBlock
          texts={[
            'After nearly three years of development, we successfully delivered our complete product suite to our first clients: one European and one international training academy.',
            'Despite challenging timelines and the need to develop new functionalities, we designed a solution that is not only intuitive and tailored to the daily operations of these organizations but also fully compliant with the stringent requirements set by national aviation authorities and the high standards of regulatory agencies such as NATO and FOCA.',
            'This project was a true test of balancing usability with complexity, ensuring a frictionless experience while meeting industry-specific hard requirements.',
          ]}
        />
      </div>
    </SinglePageLayout>
  )
}
