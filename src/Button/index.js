import HtmlToElement from "../utils/HtmlToElement";
import ButtonHTML from "./index.html";
import "./index.scss";

const Button = ({ title, onClick, clazz }) => {
  const buttonElement = HtmlToElement(ButtonHTML);
  buttonElement.innerHTML = title;
  buttonElement.classList.add(clazz);
  buttonElement.addEventListener("click", onClick);
  return buttonElement;
};

export default Button;
