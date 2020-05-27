import React from "react";
import "./directory.styles.scss";
import MenuItem from "../menu-item/menu-item.component";
import { sections } from "../../utilites/constants/MenuItemConstants";

const Directory = () => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...sectionProp }) => (
        <MenuItem key={id} {...sectionProp} />
      ))}
    </div>
  );
};

export default Directory;
