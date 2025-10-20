import { Button, Link } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const ThirdPage = () => {
  return (
    <div className="relative">
      <div className="container-responsive">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content Section */}
          <div className="space-y-6">
            <motion.h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
              initial={{ translateY: 50, opacity: 0 }}
              viewport={{ once: true }}
              whileInView={{ translateY: 0, opacity: 1 }}
              transition={{
                type: "spring",
              }}
            >
              Visual Designer Present
            </motion.h1>
            
            <motion.p
              className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-300"
              initial={{ translateY: 50, opacity: 0 }}
              viewport={{ once: true }}
              whileInView={{ translateY: 0, opacity: 1 }}
              transition={{
                type: "spring",
                delay: 0.2,
              }}
            >
              Ability to create and design colors in various products or digital art.
              Crafting beautiful visual experiences with attention to detail and creativity.
            </motion.p>
            
            <motion.div
              initial={{ translateY: 50, opacity: 0 }}
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
                href="https://www.behance.net/Indramaulaagung" 
                target="_blank"
              >
                View Works
              </Button>
            </motion.div>
          </div>

          {/* Image Section */}
          <div className="relative flex justify-center lg:justify-end">
            <motion.div
              className="relative z-10"
              initial={{ translateY: 100, opacity: 0 }}
              viewport={{ once: true }}
              whileInView={{ translateY: 0, opacity: 1 }}
              transition={{
                type: "spring",
                delay: 0.3,
              }}
            >
              <Image
                src="/Group 22.png"
                alt="Visual design showcase"
                width={500}
                height={500}
                className="w-full h-auto max-w-md lg:max-w-lg"
              />
            </motion.div>
            
            {/* Background decoration */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0">
              <Image
                src="/bg-second.png"
                alt="Background decoration"
                width={400}
                height={400}
                className="w-80 h-80 md:w-96 md:h-96 opacity-20"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdPage;
