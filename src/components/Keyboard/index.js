import styles from"./Keyboard.module.css";
import Button from "../Button";

const Keyboard = ({ onButtonClick }) => {
  const buttons = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", ".", "=", "+"
  ];

  return (
    <div className={styles.keyboard}>
      {buttons.map((btn) => (
        <Button key={btn} label={btn} onClick={onButtonClick} />
      ))}
    </div>
  );
};

export default Keyboard;
