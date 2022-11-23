import React from "react";
import "./GridContainer.scss";

interface Props {
  children: React.ReactNode;
}

const GridContainer = ({ children }: Props) => {
  return <div className="grid_container">{children}</div>;
};

export default GridContainer;
