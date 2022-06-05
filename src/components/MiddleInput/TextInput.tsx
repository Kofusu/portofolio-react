import styles from "./TextInput.module.scss";

interface Props {
  label?: string,
  state: string,
  onChange: (e: any) => void,
  name?: string
}

const TextInput: React.FC<Props> = (props) => {
  return (
    <div className={styles.controlInput}>
      <label className={styles.label}>{props.label}</label>
      <input name={props.name} value={props.state} onChange={props.onChange} className={styles.input} />
    </div>
  );
};

export default TextInput;
