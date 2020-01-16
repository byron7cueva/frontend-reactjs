import React from "react";
import md5 from "md5";

function Gravatar(props) {
  let hash = md5(props.email);
  return (
    <img
      className={props.className}
      src={`https://s.gravatar.com/avatar/${hash}?d=identicon&s=160`}
      alt={props.alt}
    />
  );
}

export default Gravatar;
