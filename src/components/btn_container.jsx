import Buttons from "./btn_elements";
import style from "./btn_container.module.css";
function ButtonContainer({ onButtonClicked }) {
  return (
    <div className={style.btn_container}>
      <Buttons onButtonClicked={onButtonClicked}></Buttons>
    </div>
  );
}

export default ButtonContainer;
