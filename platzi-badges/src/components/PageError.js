import React from "react";

import "./styles/PageError.css";

function PageError(props) {
  return <id className="PageError">{props.error.message}</id>;
}

export default PageError;
