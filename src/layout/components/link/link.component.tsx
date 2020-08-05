import React from "react";
import { useHistory, Link } from "react-router-dom";

interface Props {
  destinationPath: string;
  linkClassName: string;
  activeClassName: string;
  linkName: string;
}

export const LinkComponent: React.FC<Props> = (props) => {
  const { destinationPath, linkClassName, activeClassName, linkName } = props;
  const history = useHistory();

  return (
    <Link
      to={destinationPath}
      className={
        history.location.pathname === destinationPath
          ? activeClassName
          : linkClassName
      }
    >
      {linkName}
    </Link>
  );
};
