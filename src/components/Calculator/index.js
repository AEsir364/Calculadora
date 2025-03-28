import { useState } from "react";
import Display from "../Display";
import Keyboard from "../Keyboard";
import styles from "./Calculator.module.css";

const Calculator = () => {
  const [currentNumber, setCurrentNumber] = useState("");
  const [previousNumber, setPreviousNumber] = useState("");
  const [operator, setOperator] = useState(null);

  const handleButtonClick = (label) => {
    if (!isNaN(label) || label === ".") {
      setCurrentNumber((prev) => prev + label);
    } else if (["+", "-", "*", "/"].includes(label)) {
      setPreviousNumber(currentNumber);
      setOperator(label);
      setCurrentNumber("");
    } else if (label === "=") {
      if (previousNumber && operator && currentNumber) {
        const result = eval(`${previousNumber} ${operator} ${currentNumber}`);
        setCurrentNumber(result.toString());
        setPreviousNumber("");
        setOperator(null);
      }
    }
  };

  return (
    <div className={styles.calculator}>
      <Display value={currentNumber || "0"} />
      <Keyboard onButtonClick={handleButtonClick} />
    </div>
  );
};

export default Calculator;
