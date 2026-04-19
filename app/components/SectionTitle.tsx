"use client";

import { useAppColors } from "@/hooks/useAppColors";
import { Box, Heading, Text, Image, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  logoText?: string;
  logoSrc?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  logoText = "MG",
  logoSrc,
}) => {
    const { headingColor, textColor, primaryColor } = useAppColors();
  const watermarkColor = useColorModeValue("gray.100", "gray.800");


  return (
    <Box
      mt={"50px"}
      position="relative"
      textAlign="center"
      py={10}
      mb={10}
      overflow="hidden"
    >
      <Box
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        zIndex="0"
        userSelect="none"
        pointerEvents="none"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {logoSrc ? (
            <Image
              src={logoSrc}
              alt="Logo Watermark"
              w={{ base: "200px", md: "350px", lg: "450px" }}
              opacity="0.15"
              objectFit="contain"
            />
          ) : (
            <Text
              fontSize={{ base: "8rem", md: "12rem", lg: "16rem" }}
              fontWeight="black"
              color={watermarkColor}
              lineHeight="none"
              letterSpacing="tight"
              opacity="0.5"
            >
              {logoText}
            </Text>
          )}
        </motion.div>
      </Box>

      <Box position="relative" zIndex="1">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Heading
            as="h2"
            size="2xl"
            fontWeight="bold"
            color={headingColor}
            textTransform="uppercase"
            letterSpacing="wider"
          >
            {title}
          </Heading>

          <Box
            w="70px"
            h="4px"
            bg={primaryColor}
            mx="auto"
            mt={4}
            borderRadius="full"
          />
        </motion.div>

        {subtitle && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Text mt={4} fontSize="lg" color={textColor} maxW="600px" mx="auto">
              {subtitle}
            </Text>
          </motion.div>
        )}
      </Box>
    </Box>
  );
};

export default SectionTitle;
