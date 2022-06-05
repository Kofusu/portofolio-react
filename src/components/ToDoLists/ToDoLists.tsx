import Button from "components/Button/Button";
import { memo } from "react";
import { motion } from "framer-motion";

import styles from "./ToDoLists.module.scss";

interface Props {
  text: string;
  id: string;
  onDelete: (id: string) => void;
}

const ToDoLists: React.FC<Props> = (props) => {
  return (
    <motion.span
      className={styles.card}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h3 className={styles.text}>{props.text}</h3>
      <Button
        type="button"
        text="Clear This To Do"
        onClick={() => props.onDelete(props.id)}
      />
    </motion.span>
  );
};

export default memo(ToDoLists);
