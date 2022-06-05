import { memo } from 'react'
import styles from './AvoidHeader.module.scss'

const AvoidHeader: React.FC = () => {
  return (
    <div className={styles.avoiding} />
  )
}

export default memo(AvoidHeader)