import { motion } from "framer-motion";
import { memo } from "react";
import { Link } from "react-router-dom";

import styles from "./Card.module.scss";

interface Props {
  to: string;
  text: string;
}

const introItemVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const Card: React.FC<Props> = (props) => {
  return (
    <motion.div
      variants={introItemVariants}
      initial="hidden"
      whileInView="show"
      className={styles.card}
    >
      <div className={`${styles.decor} ${styles.decor1}`} />
      <div className={`${styles.decor} ${styles.decor2}`} />
      <h2>{props.text}</h2>
      <Link to={props.to}>Look Inside..</Link>
    </motion.div>
  );
};

export default memo(Card);
