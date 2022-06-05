import { ReactElement } from "react";

import styles from "./Button.module.scss";

interface Props {
  icon: ReactElement;
  onClick?: () => void;
  shadow?: boolean;
  disabled? :boolean
}

const IconButton: React.FC<Props> = (props) => {
  return (
    <button
      disabled={props.disabled}
      onClick={props.onClick}
      className={`${styles.iconButton} ${props.shadow && styles.shadowed}`}
    >
      {props.icon}
    </button>
  );
};

export default IconButton;
