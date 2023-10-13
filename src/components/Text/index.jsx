import React from "react";

const sizeClasses = {
  txtRubikRomanMedium12: "font-medium font-rubik",
  txtRubikRomanSemiBold14: "font-rubik font-semibold",
  txtRubikRomanMedium12Green600: "font-medium font-rubik",
  txtRubikRomanSemiBold32: "font-rubik font-semibold",
  txtRubikRomanRegular16: "font-normal font-rubik",
  txtRubikRomanRegular14: "font-normal font-rubik",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
