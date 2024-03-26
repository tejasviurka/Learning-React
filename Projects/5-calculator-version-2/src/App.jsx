import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import styles from "./App.module.css";
import { useState } from "react";


// ui made no functioing in version 1 of calci
// now for functioning, when we click on button it will display on screen
// for this we have to do this, jisko bhi click ho usko bubble up krke jo bhi event ko click kiya hai usko parent ke pass bhjnna hoga
// jab wo parent ke pass jayega toh wo parent usse state mai set karega or wo state screen pr ayege, when equal to clicked give overall result
// so we need state and event handler 


function App() {

  // firstly, declare state inside app
  const [calVal, setCalVal] = useState("");
  const onButtonClick = (buttonText) => {

    // buttontext pr ek action lege
    // c is an special case
    if (buttonText === "C") {
setCalVal("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setCalVal(result);
    }
    //  else is simple case
    else {
      // then add old text in new text, and set new value in new display value
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  };

  return (
    <div className={styles.calculator}>
      <Display displayValue={calVal}></Display>
      {/* checking if method is getting called if we click the button */}
      <ButtonsContainer
        onButtonClick={onButtonClick}
      ></ButtonsContainer>
    </div>
  );
}

export default App;
