import { ButtonProps } from "../../../types";
import "./Button.css";

export default function Button({ content, icon, onClick }: ButtonProps) {
  return (
    <div className="button-container" onClick={onClick}>
      <div className="button-content">{content}</div>
      <img className="button-icon" src={icon} alt="button-icon" />
    </div>
  );
}
