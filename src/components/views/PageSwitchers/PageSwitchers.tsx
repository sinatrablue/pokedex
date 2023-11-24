import { PageSwitchersProps } from "../../../types";
import Button from "../Button/Button";
import "./PageSwitchers.css";
import LeftArrow from "../../../assets/left-direction.svg";
import RightArrow from "../../../assets/right-direction.svg";
import { useCallback } from "react";

export default function PageSwitchers({
  previous,
  next,
  setCurrentPageUrl,
}: PageSwitchersProps) {
  const setUrlToPrevious = useCallback(() => {
    setCurrentPageUrl(previous ?? "");
  }, [previous]);
  const setUrlToNext = useCallback(() => {
    setCurrentPageUrl(next ?? "");
  }, [next]);

  return (
    <div className="page-switchers">
      <Button
        content="Previous"
        icon={LeftArrow}
        onClick={setUrlToPrevious}
        reverseContent
      />
      <Button content="Next" icon={RightArrow} onClick={setUrlToNext} />
    </div>
  );
}
