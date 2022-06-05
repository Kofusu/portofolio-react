import styles from "./GridItem.module.scss";

interface Props {
  className?: string;
  text?: string;
  onClick?: () => void
}

const GridItem: React.FC<Props> = (props) => {
  return (
    <div onClick={props.onClick} className={`${styles.itemGrid} ${props.className}`}>
      {props.text}
    </div>
  );
};

export default GridItem;
