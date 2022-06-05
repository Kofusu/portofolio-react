import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import styles from "./GridCard.module.scss";

interface Props {
  newtab?: boolean;
  href: string;
  title: string;
}

const GridCard: React.FC<Props> = ({
  newtab = false,
  href,
  title,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      whileHover={{ scale: 1.05 }}
      className={styles.card}
    >
      {newtab ? (
        <a href={href} target="_blank" rel="noreferrer" className={styles.link}>
          <div className={`${styles.decor} ${styles.decor1}`} />
          <div className={`${styles.decor} ${styles.decor2}`} />
          <span>{title}</span>
        </a>
      ) : (
        <Link to={href} className={styles.link}>
          <div className={`${styles.decor} ${styles.decor1}`} />
          <div className={`${styles.decor} ${styles.decor2}`} />
          <span>{title}</span>
        </Link>
      )}
    </motion.div>
  );
};

export default GridCard;
