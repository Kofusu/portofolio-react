import { Fragment } from "react";
import { motion } from "framer-motion";

import styles from "./ParallaxIntroDecor.module.scss";
import usePageYOffset from "hooks/usePageYOffset";

const introItemVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const ParallaxDecor: React.FC = () => {
  const { verticalOffset } = usePageYOffset();

  return (
    <Fragment>
      <div
        style={{ transform: `translateY(${verticalOffset * 0.5}px)` }}
        className={`${styles.decor1} ${styles.decor}`}
      />
      <div
        style={{ transform: `translateY(${verticalOffset * 0.5}px)` }}
        className={`${styles.decor2} ${styles.decor}`}
      />
      <motion.div
        variants={introItemVariants}
        style={{ transform: `translateY(${verticalOffset * 0.75}px)` }}
        className={`${styles.decor3} ${styles.decor}`}
      />
      <motion.div
        variants={introItemVariants}
        style={{ transform: `translateY(${verticalOffset * 0.75}px)` }}
        className={`${styles.decor4} ${styles.decor}`}
      />
    </Fragment>
  );
};

export default ParallaxDecor;
