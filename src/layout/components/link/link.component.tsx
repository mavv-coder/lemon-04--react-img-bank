import React from "react";
import { useHistory, Link } from "react-router-dom";

interface Props {
  destinationPath: string;
  linkclassName: string;
  selectedClassName: string;
  linkName: string;
}

export const LinkComponent: React.FC<Props> = (props) => {
  const { destinationPath, linkclassName, selectedClassName, linkName } = props;
  const history = useHistory();

  return (
    <Link
      to={destinationPath}
      className={
        history.location.pathname === destinationPath
          ? selectedClassName
          : linkclassName
      }
    >
      {linkName}
    </Link>
  );
};
