import styles from './SectionTitle.module.scss';

interface Props {
  title: string
}

const SectionTitle: React.FC<Props> = (props) => {
  return (
    <div className={styles.title}>{props.title}</div>
  )
}

export default SectionTitle