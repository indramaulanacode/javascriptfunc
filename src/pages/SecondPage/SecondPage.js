import React from "react";
import { Inter } from "next/font/google";
import { Button, Link } from "@nextui-org/react";
import Image from "next/image";
import CardSecondPage from "../component/CardSecondPage";
import CardRectangle from "../component/CardRectangle";
import TriplePage from "../TriplePage/TriplePage";
import { useTheme } from "../../Darkmode/ThemeContext";
import { motion } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

const SecondPage = () => {
  const { isLightMode } = useTheme();
  return (
    <div className="relative">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0">
        <Image
          src="/bg-second.png"
          alt="Background decoration"
          width={600}
          height={600}
          className="w-96 h-96 md:w-[600px] md:h-[600px] opacity-30"
        />
      </div>
      
      <div className="container-responsive relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content Section */}
          <div className="space-y-6">
            <motion.h1
              className={`${isLightMode ? "" : "text-black"} ${
                inter.className
              } text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight`}
              initial={{ translateY: 100, opacity: 0 }}
              viewport={{ once: true }}
              whileInView={{ translateY: 0, opacity: 1 }}
              transition={{
                type: "spring",
              }}
            >
              Digital <span className="text-[#118BFC]">Illustration</span> Present
            </motion.h1>
            
            <motion.p
              className={`${isLightMode ? "text-gray-300" : "text-gray-600"} text-sm sm:text-base md:text-lg leading-relaxed`}
              initial={{ translateY: 100, opacity: 0 }}
              viewport={{ once: true }}
              whileInView={{ translateY: 0, opacity: 1 }}
              transition={{
                type: "spring",
                delay: 0.2,
              }}
            >
              Ability to create digital illustrations with various types of digital illustrations.
              Bringing creative visions to life through professional digital art and design.
            </motion.p>
            
            <motion.div
              initial={{ translateY: 100, opacity: 0 }}
              viewport={{ once: true }}
              whileInView={{ translateY: 0, opacity: 1 }}
              transition={{
                type: "spring",
                delay: 0.4,
              }}
            >
              <Button 
                color="primary" 
                size="lg"
                radius="full"
                className="font-semibold" 
                as={Link} 
                href="https://www.instagram.com/ideosprocess/" 
                target="_blank"
              >
                View Portfolio
              </Button>
            </motion.div>
            
            {/* Secondary card component for desktop */}
            <motion.div
              className="hidden lg:block"
              initial={{ translateY: 100, opacity: 0 }}
              viewport={{ once: true }}
              whileInView={{ translateY: 0, opacity: 1 }}
              transition={{
                type: "spring",
                delay: 0.6,
              }}
            >
              <CardSecondPage />
            </motion.div>
          </div>
          {/* Image Section */}
          <div className="relative flex justify-center lg:justify-end">
            <motion.div
              className="relative z-10"
              initial={{ translateX: 100, opacity: 0 }}
              viewport={{ once: true }}
              whileInView={{ translateX: 0, opacity: 1 }}
              transition={{
                type: "spring",
                delay: 0.3,
              }}
            >
              <Image
                src="/Group 11.png"
                alt="Digital Illustration showcase"
                width={500}
                height={500}
                className="w-full h-auto max-w-md lg:max-w-lg"
              />
            </motion.div>
            
            {/* Floating card component */}
            <motion.div
              className="hidden lg:block absolute bottom-0 right-0 w-64"
              initial={{ translateY: 50, opacity: 0 }}
              viewport={{ once: true }}
              whileInView={{ translateY: 0, opacity: 1 }}
              transition={{
                type: "spring",
                delay: 0.5,
              }}
            >
              <CardRectangle />
            </motion.div>
        </div>
        
        {/* Triple Page Section */}
        <div className="mt-16 md:mt-24">
          <TriplePage />
        </div>
      </div>
    </div>
    </div>
  );
};

export default SecondPage;
