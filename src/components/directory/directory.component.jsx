import React from "react";
import "./directory.styles.scss";
import { useSelector } from "react-redux";
import MenuItem from "../menu-item/menu-item.component";
import { createStructuredSelector } from "reselect";
import { selectSections } from "../../redux/directory/directory.selector";

const Directory = () => {
  //state
  const { sections } = useSelector(
    createStructuredSelector({
      sections: selectSections,
    })
  );

  //UI
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...sectionProp }) => (
        <MenuItem key={id} {...sectionProp} />
      ))}
    </div>
  );
};

export default Directory;
