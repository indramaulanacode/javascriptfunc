import React from "react";
import { Button, Link } from "@nextui-org/react";
import Image from "next/image";
import { Inter } from "next/font/google";
import { useTheme } from "../../Darkmode/ThemeContext";
import { motion } from "framer-motion";
import Text from "../component/Text";

const inter = Inter({ subsets: ["latin"] });

const FirstPage = () => {
  const { isLightMode } = useTheme();
  return (
    <div className="relative">
      <div className="min-h-screen flex items-center">
        <div className="container-responsive">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1 space-y-6">
              <div className="space-y-6">
                <motion.h1
                  className={`${
                    inter.className
                  } text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight uppercase ${
                    isLightMode ? "" : "text-black"
                  }`}
                  initial={{ translateY: 100, opacity: 0 }}
                  animate={{ translateY: 0, opacity: 1 }}
                  transition={{
                    type: "spring",
                  }}
                >
                  I&apos;M A UI/UX Designer And Front-End Web Dev
                  <motion.span
                    className="text-[#F09] uppercase block mt-2"
                    initial={{ translateY: 100, opacity: 0 }}
                    animate={{ translateY: 0, opacity: 1 }}
                    transition={{
                      type: "spring",
                      delay: 0.2,
                    }}
                  >
                    <Text />
                  </motion.span>
                </motion.h1>
                <motion.p
                  className={`text-sm sm:text-base md:text-lg leading-relaxed ${
                    isLightMode ? "text-gray-300" : "text-gray-600"
                  }`}
                  initial={{ translateY: 100, opacity: 0 }}
                  animate={{ translateY: 0, opacity: 1 }}
                  transition={{
                    type: "spring",
                    delay: 0.4,
                  }}
                >
                  As an Informatics Engineering Student with experience as a Graphic Designer, Agency Freelancer, and UI/UX Designer Freelancer. I have developed myself in creating engaging and creative graphic designs for diverse clients across various industries. My expertise with design software like Adobe Creative Suite helps me deliver compelling visual solutions.
                </motion.p>
                <motion.div
                  className="flex flex-col sm:flex-row gap-4 sm:gap-6"
                  initial={{ translateY: 100, opacity: 0 }}
                  animate={{ translateY: 0, opacity: 1 }}
                  transition={{
                    type: "spring",
                    delay: 0.5,
                  }}
                >
                  <Button
                    color="primary"
                    variant="shadow"
                    radius="full"
                    size="lg"
                    className="font-semibold"
                    as={Link}
                    href="https://dribbble.com/indramaulana"
                    target="_blank"
                  >
                    Get Started
                  </Button>

                  <Button
                    color="default"
                    variant="bordered"
                    radius="full"
                    size="lg"
                    className="font-semibold"
                    as={Link}
                    href="https://github.com/indramaulanacode"
                    target="_blank"
                  >
                    <svg
                      height="20"
                      viewBox="0 0 24 24"
                      width="20"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path
                        clipRule="evenodd"
                        d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                        fill="currentColor"
                        fillRule="evenodd"
                      />
                    </svg>
                    GitHub
                  </Button>
                </motion.div>
              </div>
            </div>

            {/* Hero Image/Graphics Section */}
            <div className="order-1 lg:order-2 relative flex justify-center lg:justify-end">
              <motion.div
                className="relative z-10"
                initial={{ translateY: 100, opacity: 0 }}
                animate={{ translateY: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  delay: 0.3,
                }}
              >
                {/* Placeholder for hero image/graphic */}
                <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-[#FF0099] to-[#D9E021] rounded-full opacity-20 animate-pulse" />
              </motion.div>
              
              {/* Background Gradient SVG */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 overflow-hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="400"
                  height="400"
                  viewBox="0 0 842 1080"
                  fill="none"
                  className="w-full h-full max-w-md lg:max-w-lg"
                >
                  <path
                    opacity="0.3"
                    d="M706.5 2262.88C1096.69 2262.88 1413 1674.92 1413 949.642C1413 224.361 1096.69 -363.596 706.5 -363.596C316.311 -363.596 0 224.361 0 949.642C0 1674.92 316.311 2262.88 706.5 2262.88Z"
                    fill="url(#paint0_radial_1_58)"
                  />
                  <defs>
                    <radialGradient
                      id="paint0_radial_1_58"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(706.5 949.642) scale(706.5 1313.24)"
                    >
                      <stop stopColor="#FF0099" />
                      <stop offset="1" stopColor="#D9E021" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
