import React from 'react'
import styles from '@/shared/ui/page.module.scss'
import { ContentBlock, ImageWrapper } from '@/shared/ui/Parallax'
import { InfoList, SinglePageLayout } from '@/widgets'
import { E_ROUTES, VideoBlock } from '@/shared'
import { items } from './config'
import commonStyles from '@/views/common-platform/common-platform.module.scss'
import dsStyles from './design-system.module.scss'
import Image from 'next/image'

export const DesignSystemView = () => {
  return (
    <SinglePageLayout
      title="Pilatus Design System"
      subtitle="Building from scratch the first Multi-level Pilatus Design System"
      nextPageTitle="Sharely"
      nextPageLink={E_ROUTES.SHARELY}
      previousPageLink={E_ROUTES.COMMON_PLATFORM}
      industryBlock={<InfoList items={items} />}
    >
      <div className={styles.container}>
        <ImageWrapper
          images={[{ src: '/bg/design/ds1.webp', alt: 'DS image' }]}
          imageWrapperClassName={styles.firstImage}
          imagePriority={true}
          isSkeleton={true}
        />

        <ContentBlock
          texts={[
            'Streamline the production, deployment, and governance of a multi-platform Design System for an Aviation Company with more than 30 Products.',
          ]}
          wrapperClassName={dsStyles.wrapper}
          textStyle={dsStyles.textStyle}
        />

        <ContentBlock
          label="My Role"
          texts={[
            'I have collaborated with two cross-departmental designers to address a key challenge: the lack of a unified visual identity.\n' +
              'After defining the system’s structure and aligning global-local components with devs handoff rules, we transitioned from execution to leadership, overseeing outsourced production. \n' +
              'I now focus on strategic refinement, maintaining consistency, and designing missing components.',
          ]}
        />

        <ContentBlock
          label="One central Source, for many Platforms"
          texts={[
            'My biggest challenge wasn’t just building a clean and functional design system — it was making sure product teams could collaborate easily while connecting global and local design elements.',
            'I helped create a shared foundation: brand guidelines, design tokens, styles, and templates, all in one place and accessible to every team.',
            'On top of that, we built systems tailored to each framework (React, Angular, etc.) to keep things flexible but still consistent.\n' +
              'The idea was to define one common core of rules and styles for all projects. \n' +
              'From there, we adapted components to fit each tech stack. Each project then used a local design system that stayed connected to the core but also gave designers space to be creative.',
            'To improve collaboration between design and development, I introduced shared boards, weekly syncs, and clear diagrams. These explained not just how to build and update components, but also when and why to use them.',
          ]}
        />

        <div className={[styles.blockSpacing, commonStyles.gridElement].join(' ')}>
          <div className={commonStyles.gridElWrapper}>
            <ImageWrapper
              images={[{ src: '/bg/design/ds2.webp', alt: 'Mockup image' }]}
              imageWrapperClassName={commonStyles.imageElement}
              isSkeleton={true}
            />
          </div>
          <div className={commonStyles.gridElWrapper}>
            <ImageWrapper
              images={[{ src: '/bg/design/ds3.webp', alt: 'Mockup image' }]}
              imageWrapperClassName={commonStyles.imageElement}
              isSkeleton={true}
            />
          </div>
        </div>

        <ContentBlock
          label="How?"
          texts={[
            '<b>Modular Libraries:</b> The design system utilized a modular and cascading framework for token and component files.',
            '<b>Modular Layout:</b> We offered a highly adaptable set of section layouts that balanced flexibility and creative freedom for each Software.',
            '<b>Tokens:</b> By using component tokens for every allowed elements, brand design teams gained greater granularity in customizing token values to align with their brand styles.',
            '<b>Automatization:</b> Using plugins, we tried to automatize export and updates at tokens/style level, in order to not miss anything.',
          ]}
        />

        <ContentBlock
          label="Local Components"
          texts={[
            'Each product team built its own framework-specific system, extending and combining core components as needed.',
            'This balance allowed for creativity and innovation, while still leveraging shared tokens and components—ensuring consistency and benefiting from automatic updates across projects.',
          ]}
        />

        <div className={[styles.blockSpacing, commonStyles.gridElement].join(' ')}>
          <div className={commonStyles.gridElWrapper}>
            <ImageWrapper
              images={[{ src: '/bg/design/ds6.webp', alt: 'Mockup image' }]}
              imageWrapperClassName={[commonStyles.imageElement, dsStyles.aspectRatio].join(' ')}
              imageClassName={dsStyles.imageRatio}
            />
          </div>
          <div className={commonStyles.gridElWrapper}>
            <VideoBlock path="/video/video1.mp4" />
          </div>
        </div>

        <ContentBlock
          label="End-to-End Ownership"
          texts={[
            'This was my first large-scale design system project for a complex, multi-team organization. </br> I have collaborated in leading efforts across all fronts:',
            '<ul class="disk"><li class="markedItem"><b>Technical:</b> Created reusable components, tokens, and styles.</li><br /> <li class="markedItem"><b>Governance:</b> Defined guidelines based on accessibility (WCAG), frameworks, and best practices.</li> <br />  <li class="markedItem"><b>Operations:</b> Built scalable workflows and collaboration models for cross-functional teams.</li></ul>',
          ]}
        />

        <div className={[styles.blockSpacing, dsStyles.gridElement].join(' ')}>
          <Image
            src="/bg/design/ds4.webp"
            alt="Mockup image"
            width={828}
            height={604}
            className={dsStyles.shadow}
          />
          <Image
            src="/bg/design/ds5.webp"
            alt="Mockup image"
            width={383}
            height={604}
            className={dsStyles.shadow}
          />
        </div>
      </div>
    </SinglePageLayout>
  )
}
