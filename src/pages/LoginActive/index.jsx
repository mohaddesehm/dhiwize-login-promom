import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, Text } from "components";

const LoginActivePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex sm:flex-col md:flex-col flex-row font-rubik sm:gap-5 md:gap-5 items-center justify-start mx-auto w-auto sm:w-full md:w-full">
        <div className="flex flex-col h-full items-center justify-start md:px-5 w-full">
          <div className="relative w-full">
            <Img
              className="h-[1024px] m-auto object-cover w-full"
              src="images/img_rectangle142.png"
              alt="rectangle142"
            />
            <div className="absolute border-2 border-solid border-white-A700 h-[960px] inset-[0] justify-center m-auto rounded-lg w-[92%]"></div>
          </div>
        </div>
        <div className="bg-white-A700 flex flex-col gap-12 h-full items-center justify-between md:px-5 px-[110px] py-[120px] w-full">
          <div className="flex flex-col gap-4 items-start justify-start w-full">
            <div className="flex flex-col gap-10 items-start justify-start w-full">
              <div className="flex flex-col gap-2 items-center justify-start w-full">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-center text-gray-900 w-full"
                  size="txtRubikRomanSemiBold32"
                >
                  Login
                </Text>
                <Text
                  className="leading-[24.00px] max-w-[500px] md:max-w-full text-base text-center text-gray-500"
                  size="txtRubikRomanRegular16"
                >
                  Welcome back to ProMom! Please enter your email or phone
                  number and password for login
                </Text>
              </div>
              <div className="flex flex-col gap-8 items-start justify-start w-full">
                <div className="flex flex-col gap-4 items-center justify-center w-full">
                  <div className="flex flex-col gap-1 items-start justify-start w-full">
                    <Text
                      className="text-gray-900 text-xs w-auto"
                      size="txtRubikRomanMedium12"
                    >
                      Email or phone number
                    </Text>
                    <Input
                      name="email"
                      placeholder="email@gmail.com"
                      className="md:h-auto p-0 placeholder:text-gray-900 sm:h-auto text-left text-sm w-full"
                      wrapClassName="border border-gray-300 border-solid w-full"
                      type="email"
                      size="sm"
                    ></Input>
                  </div>
                  <div className="flex flex-col gap-1 items-start justify-start w-full">
                    <Text
                      className="text-gray-900 text-xs w-auto"
                      size="txtRubikRomanMedium12"
                    >
                      Password
                    </Text>
                    <Input
                      name="password_Two"
                      placeholder="Password1"
                      className="p-0 placeholder:text-gray-900 text-left text-sm w-full"
                      wrapClassName="border border-gray-300 border-solid flex md:h-auto w-full"
                      type="password"
                      suffix={
                        <div className="h-6 ml-[35px] w-6 rounded-[5px]">
                          <Img
                            className="h-6 rounded-[5px] my-auto"
                            src="images/img_icons_input.svg"
                            alt="Icons (Input)"
                          />
                        </div>
                      }
                    ></Input>
                  </div>
                  <div className="flex flex-col items-center justify-center px-2.5 py-1.5 w-auto">
                    <a
                      href="javascript:"
                      className="text-green-600 text-sm w-auto"
                    >
                      <Text size="txtRubikRomanSemiBold14">
                        Forgot Password?
                      </Text>
                    </a>
                  </div>
                </div>
                <Button className="cursor-pointer font-semibold text-base text-center w-full">
                  Login to ProMom
                </Button>
              </div>
            </div>
            <div className="flex flex-col gap-4 items-start justify-start w-full">
              <Text
                className="text-center text-gray-900 text-sm w-full"
                size="txtRubikRomanRegular14"
              >
                or
              </Text>
              <Button
                className="border-2 border-gray-300 border-solid cursor-pointer flex items-center justify-center min-w-[500px] sm:min-w-full"
                leftIcon={
                  <Img
                    className="h-6 mr-3"
                    src="images/img_google.svg"
                    alt="google"
                  />
                }
                color="white_A700"
              >
                <div className="font-semibold text-base text-left">
                  Sign in with Google
                </div>
              </Button>
            </div>
          </div>
          <Line className="bg-gray-300 h-px w-full" />
          <div className="flex flex-col gap-6 items-center justify-center w-full">
            <Text
              className="text-center text-gray-900 text-sm w-full"
              size="txtRubikRomanRegular14"
            >
              <span className="text-gray-900 font-rubik font-normal">
                Don’t have an account?
              </span>
              <span className="text-gray-900 font-rubik font-semibold"> </span>
              <span className="text-green-600 font-rubik font-semibold">
                Sign up now{" "}
              </span>
            </Text>
            <div className="flex flex-row gap-4 items-center justify-center w-full">
              <div className="flex flex-col items-center justify-center w-auto">
                <a
                  className="text-green-600 text-xs w-auto"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Text
                    className="common-pointer"
                    size="txtRubikRomanMedium12Green600"
                    onClick={() => navigate(-1)}
                  >
                    Terms of use
                  </Text>
                </a>
              </div>
              <div className="flex flex-col items-center justify-center w-auto">
                <a href="javascript:" className="text-green-600 text-xs w-auto">
                  <Text size="txtRubikRomanMedium12Green600">
                    Privacy Policy
                  </Text>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginActivePage;
