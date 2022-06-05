import { motion } from 'framer-motion'
import { Fragment } from 'react'
import styles from './SectionDecor.module.scss'

const introItemVariants = {
  hidden: { opacity: 0, x: -30 },
  show: { opacity: 1, x: 0 },
};


const SectionDecor: React.FC = () => {
  return (
    <Fragment>
      <motion.div variants={introItemVariants} className={`${styles.decor} ${styles.decor1}`} />
      <motion.div variants={introItemVariants} className={`${styles.decor} ${styles.decor2}`} />
      <motion.div variants={introItemVariants} className={`${styles.decor} ${styles.decor3}`} />
      <motion.div variants={introItemVariants} className={`${styles.decor} ${styles.decor4}`} />
    </Fragment>
  )
}

export default SectionDecor