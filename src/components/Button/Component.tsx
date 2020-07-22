import React, { CSSProperties, ReactNode, SyntheticEvent, memo } from "react";

import "./styles.scss";

interface Props {
  children: ReactNode;
  disabled?: boolean;
  onPress?: (e: SyntheticEvent) => void;
  className?: string;
  style?: CSSProperties;
}

const Component = ({
  children,
  disabled,
  onPress,
  className,
  style
}: Props) => {
  return !disabled ? (
    <div
      className={`button-container ${className}`}
      onClick={onPress}
      style={style}
    >
      {children}
    </div>
  ) : (
    <>{children}</>
  );
};

Component.defaultProps = {
  disabled: false
};

export default memo(Component);
