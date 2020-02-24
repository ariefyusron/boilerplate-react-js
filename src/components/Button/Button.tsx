import React, { BaseSyntheticEvent, ReactChild } from "react";

import "./styles.css";

interface Props {
  children: ReactChild;
  disabled?: boolean;
  onPress?: (e: BaseSyntheticEvent) => void;
}

const Button = ({ children, disabled, onPress }: Props) => {
  return !disabled ? (
    <div className="button-container" onClick={onPress}>
      {children}
    </div>
  ) : (
    <>{children}</>
  );
};

Button.defaultProps = {
  disabled: false
};

export default Button;
