import style from "./screen.module.css";
const Screen = ({ CalValue }) => {
  return (
    <>
      <input type="text" className={style.screen} value={CalValue} readOnly />
    </>
  );
};

export default Screen;
