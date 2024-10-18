import Buttons from "./btn_elements";
import style from "./btn_container.module.css";
function ButtonContainer() {
  return (
    <div className={style.btn_container}>
      <Buttons></Buttons>
    </div>
  );
}

export default ButtonContainer;
