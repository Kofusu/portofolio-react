import { Fragment } from "react";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";

import Menu from "components/Menu/Menu";
import styles from "./Header.module.scss";

const Header: React.FC = () => {
  const controlAnimate = useAnimation();
  
  controlAnimate.start({ opacity: 1, translateY: 0 });
  return (
    <Fragment>
      <motion.header
        className={styles.header}
        initial={{ opacity: 0, translateY: -100 }}
        animate={controlAnimate}
      >
        <Link to="/" className={styles.logo}>
          Hendratara
        </Link>
        <nav className={styles.nav}>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/hendratara-pratama-8590a0221/"
          >
            <FaLinkedin size={40} />
          </a>
        </nav>
      </motion.header>
      <Menu />
    </Fragment>
  );
};

export default Header;
