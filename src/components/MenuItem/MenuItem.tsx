import React from "react";
import "./MenuItem.scss"

interface Props {
  onClick: React.MouseEventHandler<HTMLDivElement>;
  children: React.ReactNode;
  id:any
}

const MenuItem = ({ onClick, children,id }: Props) => {
  return <div className="menu_item" id={id} onClick={onClick}>{children}</div>;
};

export default MenuItem;
