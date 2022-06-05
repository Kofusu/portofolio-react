import { motion } from "framer-motion";
import React, { Fragment, useMemo } from "react";

import styles from "../assets/styles/pages/index.module.scss";
import ParallaxIntroDecor from "components/ParallaxDecor/ParallaxIntroDecor";
import Card from "components/LinkCard/Card";
import SectionDecor from "components/SectionDecor/SectionDecor";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const introItemVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const RootPage: React.FC = () => {
  const [projectMemo, projectDesc] = useMemo(() => ["projects", "Collection My Projects"], []);
  const [skillsMemo, skillsDesc] = useMemo(() => ["skills", "My Learning Skills"], []);
  const [experienceMemo, experienceDesc] = useMemo(() => ["experience", "My Experience"], []);

  return (
    <Fragment>
      <motion.section
        variants={container}
        initial="hidden"
        animate="show"
        className={styles.introSection}
      >
        <ParallaxIntroDecor />
        <motion.div variants={introItemVariants} className={styles.name}>
          Hendratara Pratama
        </motion.div>
        <motion.div variants={introItemVariants} className={styles.role}>
          FullStack Developer
        </motion.div>
      </motion.section>

      <motion.section
        className={styles.infoSection}
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.span
          className={styles.cardContainer}
          variants={container}
          initial="hidden"
          animate="show"
        >
          <SectionDecor />
          <Card to={projectMemo} text={projectDesc} />
          <Card to={skillsMemo} text={skillsDesc} />
          <Card to={experienceMemo} text={experienceDesc} />
        </motion.span>
      </motion.section>
    </Fragment>
  );
};

export default RootPage;
