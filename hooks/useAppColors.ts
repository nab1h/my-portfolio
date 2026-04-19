"use client";

import { useColorModeValue } from "@chakra-ui/react";

export const useAppColors = () => {
  const primaryColor = "#E60914";

  const bg = useColorModeValue("white", "gray.800");
    const textColor = useColorModeValue("gray.700", "gray.300");
    const headingColor = useColorModeValue("gray.800", "white");
    const highlightColor = useColorModeValue(
      "rgba(230, 9, 20, 0.7)",
      "rgba(230, 9, 20, 0.7)",
    );
    const navbarBg = useColorModeValue(
      "rgba(255, 255, 255, 0.7)", // light mode
      "rgba(0, 0, 0, 0.7)", // dark mode
    );

  return {
    bg,
    headingColor,
    primaryColor,
    highlightColor,
    textColor,
    navbarBg,
  };
};
