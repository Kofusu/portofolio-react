import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { Fragment, useState } from "react";
import styles from "./Menu.module.scss";
import MenuOverlay from "./MenuOverlay";

const Menu: React.FC = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const line = useAnimation();

  const toggleMenu = () => {
    setShowMenu((prevState) => !prevState);
    line.start((i: number) => {
      if (!showMenu) {
        if (i === 1) {
          return {
            rotate: 45,
            y: 8.5,
            x: 1,
          };
        } else if (i === 2) {
          return {
            opacity: 0,
            x: 20,
          };
        } else if (i === 3) {
          return {
            rotate: -45,
            y: -8.5,
            x: 1,
          };
        } else {
          return {};
        }
        
      } else {
        if (i === 1) {
          return {
            rotate: 0,
            y: 0,
            x: 0,
          };
        } else if (i === 2) {
          return {
            opacity: 1,
            x: 0,
          };
        } else if (i === 3) {
          return {
            rotate: 0,
            y: 0,
            x: 0,
          };
        } else {
          return {};
        }
      }
    });
  };

  return (
    <Fragment>
      <motion.div
        onClick={toggleMenu}
        className={styles.hamburgerContainer}
        initial={{ opacity: 0, translateX: 100 }}
        animate={{ opacity: 1, translateX: 0 }}
        exit={{opacity: 0, translateX: 100}}
      >
        <motion.div
          animate={line}
          custom={1}
          className={styles.hamburgerLine}
        />
        <motion.div
          animate={line}
          custom={2}
          className={styles.hamburgerLine}
        />
        <motion.div
          animate={line}
          custom={3}
          className={styles.hamburgerLine}
        />
      </motion.div>
      <AnimatePresence>{showMenu && <MenuOverlay onClick={toggleMenu} />}</AnimatePresence>
    </Fragment>
  );
};

export default Menu;
