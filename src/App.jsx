import style from "./App.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Screen from "./components/screen";
import ButtonContainer from "./components/btn_container";
import { useState } from "react";
function App() {
  let [calValue, setcalValue] = useState("");

  const OnButtonClicked = (ButtonText) => {
    if (ButtonText === "C") {
      setcalValue("");
    } else if (ButtonText === "=") {
      let result = eval(calValue);
      setcalValue(result);
    } else if (ButtonText === "x") {
      ButtonText = "*";
      setcalValue(calValue + ButtonText);
    } else {
      setcalValue(calValue + ButtonText);
    }
  };
  return (
    <div className={style.calculator}>
      <Screen CalValue={calValue}></Screen>
      <ButtonContainer onButtonClicked={OnButtonClicked}></ButtonContainer>
    </div>
  );
}

export default App;
