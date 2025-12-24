import "../styles/MobileWrapper.css";
import { memo } from "react";

const MobileWrapper = ({ children }) => {
  return (
    <div className="mobile-container">
      {children}
    </div>
  );
};

export default memo(MobileWrapper);
