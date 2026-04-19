
"use client"; // Required for Next.js App Router

import { iconNavbar, LinksPage } from "@/data";
import { useAppColors } from "@/hooks/useAppColors";
import {
  Box,
  Flex,
  IconButton,
  HStack,
  Link,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
  Image,
  useColorMode,
} from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import { FaBars, FaMoon, FaSun } from "react-icons/fa";

// 1. Define the interface for the NavLinks props
interface NavLinksProps {
  onClick: () => void;
}

// 2. Define the component OUTSIDE the main component to avoid render-time creation errors
const NavLinks: React.FC<NavLinksProps> = ({ onClick }) => {
  return (
    <VStack spacing={4}>
      {LinksPage.map((item) => (
        <Link key={item.label} href={item.href} fontSize="lg" fontWeight="medium" onClick={onClick}>
          {item.label}
        </Link>
      ))}
    </VStack>
  );
};

const Navbar: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const { navbarBg, primaryColor, highlightColor } = useAppColors();
  const pathname = usePathname();

  return (
    <>
      <Box
        position="fixed"
        top="0"
        w="100%"
        zIndex="sticky"
        bg={navbarBg}
        boxShadow="sm"
        borderTop={`5px solid ${primaryColor}`}
      >
        <Flex
          as="nav"
          align="center"
          justify="space-between"
          wrap="wrap"
          padding="1rem 1.5rem"
          maxW="container.xl"
          mx="auto"
        >
          {/* START: Mobile Hamburger OR Desktop Nav Tabs */}
          <HStack spacing={8} flex="1" justify="flex-start">
            {/* Mobile: Hamburger Icon */}
            <IconButton
              size="md"
              icon={<FaBars />}
              aria-label="Open Menu"
              display={{ base: "flex", md: "none" }}
              onClick={onOpen}
              variant="ghost"
              color={highlightColor}
            />

            {/* Desktop: Nav Tabs */}
            <HStack spacing={8} display={{ base: "none", md: "flex" }}>
              {LinksPage.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    height="full"
                    style={{ textDecoration: "none" }}
                    key={item.label}
                    href={item.href}
                    position="relative"
                    _after={{
                      content: '""',
                      position: "absolute",
                      left: 0,
                      bottom: "-20px",
                      width: isActive ? "100%" : "0%",
                      height: "5px",
                      bg: "#e60914",
                      transition: "0.3s",
                    }}
                    _hover={{
                      _after: {
                        width: "100%",
                      },
                    }}
                    fontSize="lg"
                    fontWeight="medium"
                    color={isActive ? primaryColor : highlightColor}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </HStack>
          </HStack>

          {/* CENTER: Logo */}
          <Box
            position="absolute"
            left="50%"
            transform="translateX(-50%)"
            maxW="50%"
            isTruncated
            cursor="pointer"
          >
            <Image
              src="/logo.png"
              alt="Logo"
              width={140}
              height={60}
              style={{ objectFit: "contain" }}
            />
          </Box>

          {/* END: Social Icons (Hidden on Mobile) */}
          <HStack spacing={4} flex="1" justify="flex-end">
            <IconButton
              aria-label="Toggle Color Mode"
              icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
              onClick={toggleColorMode}
              variant="ghost"
              color={highlightColor}
              fontSize="20px"
              position="relative"
              _after={{
                content: '""',
                position: "absolute",
                left: 0,
                bottom: "-15px",
                width: "0%",
                height: "5px",
                bg: "#e60914",
                transition: "0.3s",
              }}
              _hover={{
                _after: {
                  width: "100%",
                },
              }}
            />
            {iconNavbar.map((item) => {
              const Icon = item.icon;
              return (
                <IconButton
                  key={item.label}
                  as="a"
                  href={item.href}
                  target="_blank"
                  aria-label={item.label}
                  icon={<Icon />}
                  variant="ghost"
                  color={highlightColor}
                  fontSize="20px"
                  display={{ base: "none", md: "inline-flex" }}
                  position="relative"
                  _after={{
                    content: '""',
                    position: "absolute",
                    left: 0,
                    bottom: "-15px",
                    width: "0%",
                    height: "5px",
                    bg: "#e60914",
                    transition: "0.3s",
                  }}
                  _hover={{
                    _after: {
                      width: "100%",
                    },
                  }}
                />
              );
            })}
          </HStack>
        </Flex>
      </Box>

      {/* MOBILE DRAWER COMPONENT */}
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent color={highlightColor}>
          <DrawerCloseButton color={highlightColor} />
          <DrawerHeader borderBottomWidth="1px">Menu</DrawerHeader>
          <DrawerBody>
            {/* Render the external component here */}
            <NavLinks onClick={onClose} />

            {/* Social Icons inside Drawer */}
            <HStack justifyContent="center" mt={8} spacing={4}>
              {iconNavbar.map((item) => {
                const Icon = item.icon;
                return (
                  <IconButton
                    key={item.label}
                    as="a"
                    href={item.href}
                    icon={<Icon />}
                    variant="ghost"
                    color={highlightColor}
                    aria-label={item.label}
                  />
                );
              })}
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Navbar;