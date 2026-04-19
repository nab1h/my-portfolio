"use client";

import { Box, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";

const randomMoveValues = Array.from({ length: 3 }).map(() => ({
  x: `${Math.random() * 20 - 10}%`,
  y: `${Math.random() * 20 - 10}%`,
}));

const orbsConfig = [
  { size: 500, initialX: "10%", initialY: "20%" },
  { size: 400, initialX: "70%", initialY: "60%" },
  { size: 300, initialX: "40%", initialY: "80%" },
];

const AnimatedBackground = () => {
  const dotColor = useColorModeValue("gray.200", "gray.700");

  const orbColors = [
    useColorModeValue("rgba(56, 189, 248, 0.2)", "rgba(56, 189, 248, 0.15)"), // Blue
    useColorModeValue("rgba(153, 246, 228, 0.3)", "rgba(153, 246, 228, 0.1)"), // Teal
    useColorModeValue("rgba(192, 132, 252, 0.2)", "rgba(192, 132, 252, 0.15)"), // Purple
  ];

  return (
    <Box
      position="absolute"
      top="0"
      left="0"
      w="100%"
      h="100%"
      overflow="hidden"
      zIndex="0"
      pointerEvents="none"
    >
      <Box
        position="absolute"
        w="100%"
        h="100%"
        bgImage={`radial-gradient(${dotColor} 1px, transparent 1px)`}
        bgSize="30px 30px"
        opacity="0.5"
      />

      {orbsConfig.map((orb, i) => (
        <motion.div
          key={i}
          style={{
            position: "absolute",
            width: orb.size,
            height: orb.size,
            borderRadius: "50%",
            background: orbColors[i],
            filter: "blur(80px)",
            top: orb.initialY,
            left: orb.initialX,
          }}
          animate={{
            x: ["-50%", randomMoveValues[i].x, "-50%"],
            y: ["-50%", randomMoveValues[i].y, "-50%"],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      ))}
    </Box>
  );
};

export default AnimatedBackground;
