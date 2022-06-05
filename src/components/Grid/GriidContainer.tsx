import styles from './GridContainer.module.scss'

const GridContainer: React.FC = (props) => {
  return(
    <div className={styles.containerGrid}>{props.children}</div>
  )
}

export default GridContainer