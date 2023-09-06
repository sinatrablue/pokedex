import { ErrorHandlerProps } from "../../types";
import "./ErrorHandler.css";

export default function ErrorHandler(props: ErrorHandlerProps) {
  return (
    <div className="error-handler-container">
      <h2>THERE WAS AN ERROR :</h2>
      {props.err}
    </div>
  );
}
