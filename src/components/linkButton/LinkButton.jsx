import React from "react";

function LinkButton({ href, className, buttonText, downloadLink = "" }) {
  return (
    <a href={href} download={downloadLink} className={className}>
      {buttonText}
    </a>
  );
}

export default LinkButton;
