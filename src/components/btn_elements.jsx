function Buttons({ onButtonClicked }) {
  let btn_nums = [
    "C",
    "(",
    ")",
    "/",
    "7",
    "8",
    "9",
    "x",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "%",
    "0",
    ".",
    "=",
  ];
  return (
    <>
      {btn_nums.map((element) => (
        <button key={element} onClick={() => onButtonClicked(element)}>
          {element}
        </button>
      ))}
    </>
  );
}
export default Buttons;
