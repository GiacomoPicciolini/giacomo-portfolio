import styles from '@/shared/ui/page.module.scss'
import { ContentBlock, ImageWrapper } from '@/shared/ui/Parallax'
import { InfoList, SinglePageLayout } from '@/widgets'
import { E_ROUTES, VideoBlock } from '@/shared'
import { items } from './config'
import stylesPilatus from './pilatus.module.scss'
import Image from 'next/image'

export const PilatusView = () => {
  return (
    <SinglePageLayout
      title="Pilatus Website"
      subtitle="A Website to Dazzle and Captivate"
      nextPageTitle="VR Aircraft"
      nextPageLink={E_ROUTES.VR}
      previousPageLink={E_ROUTES.SKY}
      industryBlock={<InfoList items={items} />}
    >
      <div className={styles.container}>
        <VideoBlock path="/video/video7.mp4" blockClassName={stylesPilatus.imageBlock} />

        <ContentBlock
          label="My Role"
          texts={[
            'The redesign of the Pilatus website spanned a year, from briefing to launch.',
            'I led workshops and design meetings, collaborating not only with the software development team but also with Marketing and Strategy. The goal was to define a clear stylistic direction and create a product that captivates users while communicating the uniqueness of the Pilatus brand.',
          ]}
        />

        <ContentBlock
          label="Updated Design Language"
          texts={[
            'Redesigned the website with a fresh, modern look, evolving from flat design to a “glass effect” aesthetic with updated buttons and dialogs. We introduced a softer color palette with pastel and neutral tones, moving away from the dominant Pilatus Blue.',
            'Mobile interactions were optimized for accessibility, keeping consistent patterns and improved component placement. Through usability and A/B testing, we repositioned the main menu in an unconventional spot.',
            'Despite the change, users navigated faster — both right- and left-handed — confirming the new layout improved the navigation.',
          ]}
        />

        <VideoBlock path="/video/video6.mp4" blockClassName={styles.blockSpacing} />

        <ContentBlock
          texts={[
            'The goal of this website was to captivate, impress, and elevate the Pilatus brand above its competitors.',
            'Inspired by the visual language of luxury brands like Ferrari and high-end yachts, the design uses immersive videos and emotional imagery to convey the unique experience of owning and flying a Pilatus aircraft.',
            'Unlike the previous version, this redesign places the Pilatus lifestyle at the center of the user journey, shifting the focus from technical specifications to aspirational storytelling—while still providing detailed information in dedicated sections.',
          ]}
        />

        <ImageWrapper
          images={[{ src: '/bg/pilatus/pilatus1.webp', alt: 'Mockup image' }]}
          imageWrapperClassName={styles.blockSpacing}
          isSkeleton={true}
        />

        <ContentBlock
          texts={[
            'To create a more immersive and engaging experience, we incorporated dynamic elements such as parallax scrolling, layered video and image overlays, and subtle microanimations throughout the site.',
            'A custom jet configurator was integrated, allowing users to begin visualizing their dream aircraft directly on the platform.',
          ]}
        />

        <VideoBlock path="/video/video5.mp4" blockClassName={styles.blockSpacing} />

        <div className={styles.blockSpacing}>
          <div className={stylesPilatus.largeImage}>
            <Image
              src="/bg/pilatus/pilatus2.webp"
              alt="Plane"
              fill
              style={{ objectFit: 'cover', objectPosition: 'top', borderRadius: '12px' }}
            />
          </div>
          <div className={stylesPilatus.smallImage}>
            <Image
              src="/bg/pilatus/pilatus3.webp"
              alt="Mobile"
              fill
              style={{ objectFit: 'cover', objectPosition: 'top' }}
            />
          </div>
        </div>
      </div>
    </SinglePageLayout>
  )
}
