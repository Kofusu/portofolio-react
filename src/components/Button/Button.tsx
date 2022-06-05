import styles from "./Button.module.scss";

interface Props {
  text: string;
  type: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
}

const Button: React.FC<Props> = (props) => {
  return (
    <button
      onClick={props.onClick}
      type={props.type}
      className={styles.button}
    >
      {props.text}
    </button>
  );
};

export default Button;
