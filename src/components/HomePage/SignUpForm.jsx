/* eslint-disable react/prop-types */
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
} from "@nextui-org/react";
import { LuUser2 } from "react-icons/lu";
import google from "/google.png";
import facebook from "/facebook.png";
import apple from "/apple.png";
import { useState } from "react";
const SignUpForm = ({ isDark }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <Button
        variant="none"
        size="sm"
        className={
          isDark
            ? "text-white font-[500] text-[18px] leading-5"
            : "text-black font-[500] text-[18px] leading-5"
        }
        onPress={handleOpen}
      >
        <LuUser2 /> Account
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={handleClose}
        backdrop="blur"
        placement="top"
        size="5xl"
        className="sm:w-full w-[90%] mx-auto"
      >
        <ModalContent>
          <ModalBody className="md:py-0 md:ps-0 md:pe-3 p-0">
            <div className="w-full h-full overflow-y-auto md:overflow-visible flex flex-col md:flex-row items-start gap-6 lg:gap-12">
              {/* left side */}
              <div className="w-full md:w-1/3 h-screen bg-[url('/login.png')] bg-cover bg-center bg-no-repeat rounded-sm">
                <div className="bg-[url('/blur.png')] h-screen bg-cover bg-center bg-no-repeat px-4 py-8">
                  <div className="px-5">
                    <h2 className="font-RedHotDisplay font-[800] lg:text-5xl text-4xl leading-[50px] lg:leading-[63px] text-white mb-2">
                      Sign Up
                    </h2>
                    <p className="text-[15px] leading-5 font-RedHotDisplay text-white">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc tellus ullamcorper hendrerit quis purus pellentesque.
                      Ac sagittis, convallis non tincidunt interdum eu nullam
                      aliquam maecenas. Enim sed tortor morbi ut suspendisse.{" "}
                    </p>
                  </div>
                </div>
              </div>
              {/* right side */}
              <div className="w-full md:w-2/3 flex flex-col items-start px-5">
                <img src="/logo.png" className="w-fit mx-auto" alt="" />
                <div className="space-y-2">
                  <h2 className="font-RedHotDisplay font-bold text-xl sm:text-[32px] leading-[42px] text-[#26395C]">
                    Sign up and get exploring!
                  </h2>
                  <p className="text-[#26395C] text-[15px] leading-5 font-[500]">
                    Already have an account?
                    <a href="" className="text-[#0E8BFF] ms-1">
                      Sign In
                    </a>
                  </p>
                </div>
                <div className="mt-5 w-full space-y-3">
                  <Button
                    variant="bordered"
                    color="primary"
                    fullWidth
                    className="font-RedHotDisplay font-bold text-[15px] leading-4 -tracking-[1%] text-[#26395C]"
                  >
                    <img src={google} alt="" /> Sign Up with Google
                  </Button>
                  <Button
                    variant="bordered"
                    color="primary"
                    fullWidth
                    className="font-RedHotDisplay font-bold text-[15px] leading-4 -tracking-[1%] text-[#26395C]"
                  >
                    <img src={facebook} alt="" /> Sign Up with Facebook
                  </Button>
                  <Button
                    variant="bordered"
                    color="primary"
                    fullWidth
                    className="font-RedHotDisplay font-bold text-[15px] leading-4 -tracking-[1%] text-[#26395C]"
                  >
                    <img src={apple} alt="" /> Sign Up with Apple
                  </Button>
                </div>

                {/* divider */}
                <div className="flex justify-center items-center w-full my-6 text-center text-gray-500">
                  <div className="flex-grow border-t border-gray-300"></div>
                  <span className="px-3 font-RedHotDisplay font-[500] text-base leading-5 text-[#26395C]">
                    or continue with
                  </span>
                  <div className="flex-grow border-t border-gray-300"></div>
                </div>

                <form className="w-full">
                  <div>
                    <Input
                      placeholder="mehedihasan@gmail.com"
                      label="Email"
                      labelPlacement="outside"
                      type="email"
                      variant="bordered"
                      className="text-[#969DAA] font-RedHotDisplay font-[500] text-base leading-6"
                    />
                  </div>
                  <div className="mt-12">
                    <Input
                      placeholder="************"
                      label="Password"
                      labelPlacement="outside"
                      type="password"
                      variant="bordered"
                      className="text-[#26395C] font-RedHotDisplay font-[500] text-base leading-6"
                    />
                  </div>
                </form>
                <div className="w-full mt-6">
                  <Button
                    variant="solid"
                    color="primary"
                    fullWidth
                    className="font-RedHotDisplay font-bold text-base leading-4 -tracking-[1%] text-center py-3 text-white"
                  >
                    Sign Up
                  </Button>
                </div>
                <p className="text-center w-full text-[#26395C] text-[12px] leading-5 my-3">
                  By creating an account, you agree to our
                  <a href="" className="ms-[3px] me-[3px] text-[#0E8BFF]">
                    Terms & Conditions
                  </a>
                  and
                  <a href="" className="ms-[3px] text-[#0E8BFF]">
                    Privacy Policy
                  </a>
                  .
                </p>
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default SignUpForm;
