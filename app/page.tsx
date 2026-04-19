"use client";

import { useAppColors } from "@/hooks/useAppColors";
import {
  Container,
  Heading,
  Text,
  Button,
  Box,
  Image,
  Stack,
  Flex,
  useColorModeValue,
  HStack,
  Icon,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaDownload, FaPaperPlane } from "react-icons/fa";
import AnimatedBackground from "./components/AnimatedBackground"; 
import { containerVariants, imageVariants, itemVariants } from "./components/Animations";



const Hero: React.FC = () => {
  const { textColor, headingColor, highlightColor, primaryColor } =
    useAppColors();

  return (
    <Box
      position="relative"
      minH="100vh"
      pt={{ base: "100px", md: "120px" }}
      overflow="hidden"
      zIndex="0"
    >
      <AnimatedBackground />
      <Container maxW="container.xl" position="relative" zIndex="1">
        <Flex
          direction={{ base: "column", md: "row" }}
          align="center"
          justify="space-between"
          gap={10}
        >
          {/* Text Section (Left) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{ flex: 1 }}
          >
            <Stack spacing={6} textAlign={{ base: "center", md: "left" }}>
              <motion.div variants={itemVariants}>
                <Text
                  fontSize="xl"
                  fontWeight="medium"
                  color={highlightColor}
                  letterSpacing="wider"
                >
                  HELLO, IM
                </Text>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Heading
                  as="h1"
                  size="2xl"
                  fontWeight="bold"
                  color={headingColor}
                  lineHeight="shorter"
                >
                  John Doe
                </Heading>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Text
                  fontSize={{ base: "lg", md: "xl" }}
                  color={textColor}
                  maxW="450px"
                  mx={{ base: "auto", md: "0" }}
                >
                  A Frontend Developer specialized in building stunning and fast
                  user experiences using React & Next.js.
                </Text>
              </motion.div>

              <motion.div variants={itemVariants}>
                <HStack
                  spacing={4}
                  justifyContent={{ base: "center", md: "flex-start" }}
                >
                  <Button
                    colorScheme="teal"
                    size="lg"
                    backgroundColor={primaryColor}
                    leftIcon={<Icon as={FaPaperPlane} />}
                    _hover={{ transform: "translateY(-2px)", boxShadow: "lg" }}
                  >
                    Contact Me
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    color={primaryColor}
                    colorScheme="teal"
                    leftIcon={<Icon as={FaDownload} />}
                    _hover={{ transform: "translateY(-2px)", boxShadow: "lg" }}
                  >
                    Download CV
                  </Button>
                </HStack>
              </motion.div>
            </Stack>
          </motion.div>

          {/* Image Section (Right) */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            style={{ flex: 1, display: "flex", justifyContent: "center" }}
          >
            <Box
              position="relative"
              w={{ base: "280px", md: "400px" }}
              h={{ base: "280px", md: "400px" }}
            >
              {/* Decorative Background */}
              <Box
                position="absolute"
                top="0"
                left="0"
                w="100%"
                h="100%"
                bg="teal.500"
                borderRadius="full"
                opacity="0.1"
                zIndex={0}
                filter="blur(40px)"
              />

              {/* Image */}
              <Image
                src="me.jpg"
                alt="Profile"
                borderRadius="full"
                border="4px solid"
                borderColor={useColorModeValue("white", "gray.700")}
                boxShadow="2xl"
                objectFit="cover"
                w="100%"
                h="100%"
                position="relative"
                zIndex={1}
              />
            </Box>
          </motion.div>
        </Flex>
      </Container>
    </Box>
  );
};

export default Hero;
