import HtmlToElement from "../utils/HtmlToElement";
import Header from "./index.html";
import Button from "../Button";

import "./index.scss";

const header = HtmlToElement(Header);
const customButton = Button({
  onClick: () => {
    console.log("click!!!");
  },
  clazz: "header-button",
  title: "Header Button",
});
header.appendChild(customButton);
export default header;
