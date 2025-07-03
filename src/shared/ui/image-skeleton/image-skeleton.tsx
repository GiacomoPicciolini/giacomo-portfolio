import styles from './image-skeletom.module.scss'

export const SkeletonImage = () => {
  return (
    <div className={styles.skeletonWrapper}>
      <div className={styles.shimmer}></div>
    </div>
  )
}
