import React from "react";

import { List } from "components";

const EmailVerificationEmptyInput = (props) => {
  return (
    <>
      <List className={props.className} orientation="horizontal">
        <div className="bg-gray-50 flex flex-col h-[70px] md:h-auto items-start justify-start rounded-lg w-full">
          <div className="bg-gray-50 border border-gray-300 border-solid h-[70px] rounded-lg w-[70px]"></div>
        </div>
        <div className="bg-gray-50 flex flex-col h-[70px] md:h-auto items-start justify-start rounded-lg w-full">
          <div className="bg-gray-50 border border-gray-300 border-solid h-[70px] rounded-lg w-[70px]"></div>
        </div>
        <div className="bg-gray-50 flex flex-col h-[70px] md:h-auto items-start justify-start rounded-lg w-full">
          <div className="bg-gray-50 border border-gray-300 border-solid h-[70px] rounded-lg w-[70px]"></div>
        </div>
        <div className="bg-gray-50 flex flex-col h-[70px] md:h-auto items-start justify-start rounded-lg w-full">
          <div className="bg-gray-50 border border-gray-300 border-solid h-[70px] rounded-lg w-[70px]"></div>
        </div>
        <div className="bg-gray-50 flex flex-col h-[70px] md:h-auto items-start justify-start rounded-lg w-full">
          <div className="bg-gray-50 border border-gray-300 border-solid h-[70px] rounded-lg w-[70px]"></div>
        </div>
        <div className="bg-gray-50 flex flex-col h-[70px] md:h-auto items-start justify-start rounded-lg w-full">
          <div className="bg-gray-50 border border-gray-300 border-solid h-[70px] rounded-lg w-[70px]"></div>
        </div>
      </List>
    </>
  );
};

EmailVerificationEmptyInput.defaultProps = {};

export default EmailVerificationEmptyInput;
