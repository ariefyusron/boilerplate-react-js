import React, { ReactElement, ReactNode, useEffect } from "react";

interface Props {
  children: ReactNode;
  isEmpty: boolean;
  emptyComponent: () => ReactElement;
  onEndReached?: () => void;
}

const WrapList = ({
  isEmpty,
  children,
  emptyComponent,
  onEndReached
}: Props) => {
  const _runFunc = () => {
    if (
      document.documentElement.scrollHeight -
        document.documentElement.offsetHeight ===
      window.scrollY
    ) {
      onEndReached!();
    }
  };

  useEffect(() => {
    if (onEndReached) {
      window.addEventListener("scroll", _runFunc);
    }

    return () => {
      if (onEndReached) {
        window.removeEventListener("scroll", _runFunc);
      }
    };
  }, []);

  return isEmpty ? <>{emptyComponent()}</> : <>{children}</>;
};

export default WrapList;
