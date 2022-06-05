import ReactDOM from "react-dom";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

import styles from "./Menu.module.scss";

interface Props {
  onClick?: () => void;
}

const navLinkStyling = (d: any) => (d.isActive ? styles.activeNav : "");

const MenuOverlay: React.FC<Props> = (props) => {
  return ReactDOM.createPortal(
    <motion.div
      onClick={props.onClick}
      className={styles.modalMenu}
      initial={{ bottom: 1000 }}
      animate={{ bottom: 0 }}
      exit={{ bottom: 1000 }}
      transition={{ ease: "easeOut" }}
    >
      <NavLink className={navLinkStyling} to={"/"}>
        Homepage
      </NavLink>
      <NavLink className={navLinkStyling} to={"/projects"}>
        Projects
      </NavLink>
      <NavLink className={navLinkStyling} to={"/skills"}>
        Skills
      </NavLink>
      <NavLink className={navLinkStyling} to={"/experience"}>
        Experience
      </NavLink>
    </motion.div>,
    document.getElementById("overlay")!
  );
};

export default MenuOverlay;
