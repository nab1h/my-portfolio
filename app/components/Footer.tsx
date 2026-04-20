"use client";

import { useAppColors } from "@/hooks/useAppColors";
import {
  Box,
  Container,
  Image,
  HStack,
  Link,
  Text,
  VStack,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const { primaryColor, textColor } = useAppColors();
  const bgColor = useColorModeValue("white", "gray.800");

  return (
    <Box
      as="footer"
      bg={bgColor}
      borderTop="4px solid"
      borderColor={primaryColor}
      py={10}
    >
      <Container maxW="container.xl">
        <VStack spacing={4}>
          <Image
            src="/logo.png"
            alt="Logo"
                      h="100px"
            objectFit="contain"
            fallback={
              <Text fontSize="2xl" fontWeight="bold" color={primaryColor}>
                LOGO
              </Text>
            }
          />

          <HStack spacing={8}>
            <Link
              href="#home"
              color={textColor}
              _hover={{ color: primaryColor }}
              fontWeight="medium"
            >
              Home
            </Link>
            <Link
              href="#about"
              color={textColor}
              _hover={{ color: primaryColor }}
              fontWeight="medium"
            >
              About
            </Link>
            <Link
              href="#projects"
              color={textColor}
              _hover={{ color: primaryColor }}
              fontWeight="medium"
            >
              Projects
            </Link>
            <Link
              href="#contact"
              color={textColor}
              _hover={{ color: primaryColor }}
              fontWeight="medium"
            >
              Contact
            </Link>
          </HStack>

          <HStack spacing={5}>
            <Link href="https://github.com" isExternal>
              <Icon
                as={FaGithub}
                boxSize={5}
                color={textColor}
                _hover={{ color: primaryColor, transform: "translateY(-2px)" }}
                transition="all 0.2s"
              />
            </Link>
            <Link href="https://linkedin.com" isExternal>
              <Icon
                as={FaLinkedin}
                boxSize={5}
                color={textColor}
                _hover={{ color: primaryColor, transform: "translateY(-2px)" }}
                transition="all 0.2s"
              />
            </Link>
            <Link href="https://twitter.com" isExternal>
              <Icon
                as={FaTwitter}
                boxSize={5}
                color={textColor}
                _hover={{ color: primaryColor, transform: "translateY(-2px)" }}
                transition="all 0.2s"
              />
            </Link>
          </HStack>

          <Text fontSize="sm" color={textColor} opacity="0.7">
            © {new Date().getFullYear()} John Doe. All Rights Reserved.
          </Text>
        </VStack>
      </Container>
    </Box>
  );
};

export default Footer;
