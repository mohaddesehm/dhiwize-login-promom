import React from "react";

import { Button, Img, Line, Text } from "components";
import EmailVerificationEmptyInput from "components/EmailVerificationEmptyInput";

const EmailVerificationEmptyPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-rubik items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-5 h-[1024px] md:h-auto items-center justify-start max-w-[1440px] w-full">
          <div className="flex flex-col h-[1024px] md:h-auto items-center justify-start md:px-5">
            <div className="relative w-[720px] md:w-full">
              <Img
                className="h-[1024px] m-auto object-cover w-[720px]"
                src="images/img_rectangle142.png"
                alt="rectangle142"
              />
              <div className="absolute border-2 border-solid border-white-A700 h-[960px] inset-[0] justify-center m-auto rounded-lg w-[92%]"></div>
            </div>
          </div>
          <div className="bg-white-A700 flex flex-1 flex-col md:gap-10 gap-[60px] h-[1024px] md:h-auto items-start justify-between max-w-[720px] md:px-5 px-[110px] py-[120px] w-full">
            <div className="flex flex-row gap-2.5 items-start justify-start w-auto">
              <Img
                className="h-4 w-4"
                src="images/img_arrowleft.svg"
                alt="arrowleft"
              />
              <Text
                className="text-green-600 text-xs w-auto"
                size="txtRubikRomanMedium12Green600"
              >
                Previous Step
              </Text>
            </div>
            <div className="flex flex-col md:gap-10 gap-[60px] items-start justify-start w-full">
              <div className="flex flex-col gap-2 items-center justify-start w-full">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-center text-gray-900 w-full"
                  size="txtRubikRomanSemiBold32"
                >
                  Email Verification
                </Text>
                <Text
                  className="leading-[24.00px] max-w-[500px] md:max-w-full text-base text-center text-gray-500"
                  size="txtRubikRomanRegular16"
                >
                  <span className="text-gray-500 font-rubik font-normal">
                    Please, check your inbox for verification code sent to{" "}
                  </span>
                  <span className="text-gray-900 font-rubik font-semibold">
                    email@gmail.com
                  </span>
                </Text>
              </div>
              <div className="flex flex-col gap-8 items-start justify-start w-full">
                <div className="flex flex-col gap-4 items-start justify-start w-full">
                  <EmailVerificationEmptyInput className="sm:flex-col flex-row gap-4 grid sm:grid-cols-1 grid-cols-6 h-[70px] justify-start w-full" />
                  <div className="flex flex-col items-center justify-end w-full">
                    <div className="flex flex-col items-center justify-end pl-2.5 py-1.5 w-auto">
                      <Text
                        className="text-green-600 text-sm w-auto"
                        size="txtRubikRomanSemiBold14"
                      >
                        Resend Code
                      </Text>
                    </div>
                  </div>
                </div>
                <Button
                  className="cursor-pointer font-semibold text-base text-center w-full"
                  color="gray_200"
                >
                  Verify
                </Button>
              </div>
            </div>
            <div className="flex flex-col gap-9 items-center justify-start w-full">
              <Line className="bg-gray-300 h-px w-full" />
              <div className="flex flex-col gap-6 items-center justify-center w-full">
                <Text
                  className="text-center text-gray-900 text-sm w-full"
                  size="txtRubikRomanRegular14"
                >
                  Can’t find? Please check your spam folder
                </Text>
                <div className="flex flex-row gap-4 items-center justify-center w-full">
                  <div className="flex flex-col items-center justify-center w-auto">
                    <a
                      href="https://app.dhiwise.com/figmaReact/screens-config/65294bd4f65b0b0014dd5bce?screen=0:9589"
                      className="text-green-600 text-xs w-auto"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Text size="txtRubikRomanMedium12Green600">
                        Terms of use
                      </Text>
                    </a>
                  </div>
                  <div className="flex flex-col items-center justify-center w-auto">
                    <a
                      href="javascript:"
                      className="text-green-600 text-xs w-auto"
                    >
                      <Text size="txtRubikRomanMedium12Green600">
                        Privacy Policy
                      </Text>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmailVerificationEmptyPage;
