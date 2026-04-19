"use client";

import { useColorModeValue } from "@chakra-ui/react";

export const useAppColors = () => {
  const bg = useColorModeValue("white", "gray.800");
  const text = useColorModeValue("gray.600", "white");
  const primaryColor = "#E60914";

  return { bg, text, primaryColor };
};
