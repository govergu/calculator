import style from "./App.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Screen from "./components/screen";
import ButtonContainer from "./components/btn_container";
function App() {
  return (
    <div className={style.calculator}>
      <Screen></Screen>
      <ButtonContainer></ButtonContainer>
    </div>
  );
}

export default App;
