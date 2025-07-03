import React from 'react'
import styles from '@/shared/ui/page.module.scss'
import { ContentBlock, ImageWrapper } from '@/shared/ui/Parallax'
import { InfoList, SinglePageLayout } from '@/widgets'
import { E_ROUTES, Hint, VideoBlock } from '@/shared'
import { items } from './config'
import vrStyles from './vr-aicraft.module.scss'

export const VrAicraftView = () => {
  return (
    <SinglePageLayout
      title="VR Aircraft"
      subtitle="Designing User Experience and UI of Aircraft Familiarization Learning tool"
      nextPageTitle="Common Platform"
      nextPageLink={E_ROUTES.COMMON_PLATFORM}
      previousPageLink={E_ROUTES.PILATUS}
      industryBlock={<InfoList items={items} />}
    >
      <div className={styles.container}>
        <VideoBlock
          path="/video/video8.mp4"
          blockClassName={vrStyles.firstVideoBlock}
          src="/bg/vr/placeholder-vr-4.webp"
        />

        <Hint
          title="Please note that the video does not represent the final version of the product's user
            interface. Due to a non-disclosure agreement signed with the client, I am unable to
            share any visuals related to the final design. Out of respect for the company's
            confidentiality, I have chosen to showcase an early-stage prototype instead. The goal
            here is to highlight the user journey and core functionalities, rather than the visual
            aesthetics or finalized UI."
        />

        <ContentBlock
          label="Familiarization Learning CBT Interactive Training Tool"
          texts={[
            'Familiarization Learning CBT is a digital training tool designed to introduce trainees to the aircraft —both inside and out— through an interactive virtual experience, including a simulated sortie (flight).',
            'This solution allows trainees to explore and interact with aircraft components without needing physical access, significantly reducing time, costs, and resource demands for the Training Academy.',
            'I led the entire UX research and prototype testing phase, guiding the project through to the final product design.',
          ]}
        />

        <ContentBlock
          label="User-Centered, Iterative Testing"
          texts={[
            'The key to delivering a successful product was simple: test, test, and test again.',
            'With direct access to pilots, trainees, instructors, and aircraft engineers, we were able to engage closely with end users throughout the process. This enabled an iterative approach from early concept development to final design.',
            "Given the project's duration, testing extended beyond software to include hardware evaluations—ensuring compatibility with the latest devices and staying aligned with emerging tech trends.",
          ]}
        />

        <ImageWrapper
          images={[{ src: '/bg/vr/vr-1.webp', alt: 'Mockup image' }]}
          imageWrapperClassName={styles.blockSpacing}
          isSkeleton={true}
        />

        <ImageWrapper
          images={[{ src: '/bg/vr/vr-2.webp', alt: 'Mockup image' }]}
          imageWrapperClassName={[styles.blockSpacing, vrStyles.limitedImage].join(' ')}
          isSkeleton={true}
        />

        <ContentBlock
          label="Sociodemographic influence on Motion Sickness"
          texts={[
            'One of the earliest challenges identified was the risk of motion sickness during software use—especially critical given the core feature: a fully immersive VR flight simulation.',
            'While existing research offers best practices and technical solutions, our scenario was more complex. \n' +
              'To address this, we implemented a dedicated user testing phase with multiple iterations to determine the limits of user comfort and identify effective mitigation strategies. These insights were combined with data from other testing, resulting in a product well-positioned for future commercialization.',
            'We also found that user demographics significantly influenced motion sickness sensitivity. \n' +
              'Older users were more prone to discomfort, but this was offset by the fact that our target personas—aircraft pilots—are generally accustomed to rapid visual and physical shifts. \n' +
              'Interestingly, experienced older pilots often compensated with their training, while younger users benefited from age-related resilience.',
          ]}
        />

        <ImageWrapper
          images={[{ src: '/bg/vr/vr-3.webp', alt: 'Mockup image' }]}
          imageWrapperClassName={styles.blockSpacing}
          isSkeleton={true}
        />
      </div>
    </SinglePageLayout>
  )
}
