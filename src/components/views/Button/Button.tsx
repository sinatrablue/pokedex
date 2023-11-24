import { ButtonProps } from "../../../types";
import "./Button.css";

export default function Button({
  content,
  icon,
  onClick,
  reverseContent,
}: ButtonProps) {
  return (
    <div
      className={`button-container ${reverseContent ? "inverted" : ""}`}
      onClick={onClick}
    >
      <div className="button-content">{content}</div>
      <img className="button-icon" src={icon} alt="button-icon" />
    </div>
  );
}
