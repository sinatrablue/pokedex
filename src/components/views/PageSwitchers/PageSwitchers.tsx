import { PageSwitchersProps } from "../../../types";
import Button from "../Button/Button";
import "./PageSwitchers.css";
import LeftArrow from "../../../assets/left-direction.svg";
import RightArrow from "../../../assets/right-direction.svg";
import { useQueryClient } from "@tanstack/react-query";

export default function PageSwitchers({
  previous,
  next,
  setCurrentPageUrl,
}: PageSwitchersProps) {
  return (
    <div className="page-switchers">
      <Button
        content="Previous"
        icon={LeftArrow}
        onClick={() => {
          setCurrentPageUrl(previous ?? "");
        }}
      />
      <Button
        content="Next"
        icon={RightArrow}
        onClick={() => {
          setCurrentPageUrl(next ?? "");
        }}
      />
    </div>
  );
}
