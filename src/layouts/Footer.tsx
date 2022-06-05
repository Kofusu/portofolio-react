import { motion } from "framer-motion";
import link from "config/link";
import { FaGithub, FaStackOverflow } from "react-icons/fa";

import styles from "./Footer.module.scss";

const Footer: React.FC = () => {
  return (
    <motion.section className={styles.footer}>
      <motion.div
        className={styles.link}
        initial={{ opacity: 0, translateX: -25 }}
        whileInView={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 0.5 }}
      >
        <a href={link.gituhubLink} target="_blank" rel="noreferrer">
          <FaGithub size={30} /> <motion.span>@Kofusu</motion.span>
        </a>
      </motion.div>
      <motion.div
        className={styles.link}
        initial={{ opacity: 0, translateX: 25 }}
        whileInView={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 0.5 }}
      >
        <a href={link.stackOverflowLink} target="_blank" rel="noreferrer">
          <FaStackOverflow size={30} /> <motion.span>@Kofusu</motion.span>
        </a>
      </motion.div>
    </motion.section>
  );
};

export default Footer;
