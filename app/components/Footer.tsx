"use client";

import { iconNavbar, LinksPage } from "@/data";
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
            {LinksPage.map((link, i) => (
              <Link
                key={i}
                href={link.href}
                color={textColor}
                _hover={{ color: primaryColor }}
                fontWeight="medium"
              >
                {link.label}
              </Link>
            ))}
          </HStack>

          <HStack spacing={5}>
            {iconNavbar.map((item, i) => (
              <Link href={item.href} isExternal key={i}>
                <Icon
                  as={item.icon}
                  boxSize={5}
                  color={textColor}
                  _hover={{
                    color: primaryColor,
                    transform: "translateY(-2px)",
                  }}
                  transition="all 0.2s"
                />
              </Link>
            ))}
          </HStack>

          <Text fontSize="sm" color={textColor} opacity="0.7">
            © {new Date().getFullYear()} <a color={primaryColor} href="https://nabih.online">Nabih Alashmawy</a>. All Rights Reserved.
          </Text>
        </VStack>
      </Container>
    </Box>
  );
};

export default Footer;
