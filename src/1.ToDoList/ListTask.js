import React from "react";

const ListTask =
  /**
   *
   * @param {React.PropsWithChildren} props
   */
  (props) => {
    return <div className="listTask">{props.children}</div>;
  };

export default ListTask;
