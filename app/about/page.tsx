"use client";

import {
  Container,
  Box,
  Heading,
  Text,
  Image,
  Flex,
  Wrap,
  WrapItem,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import { useAppColors } from "@/hooks/useAppColors";

const About = () => {
  const textColor = useColorModeValue("gray.600", "gray.300");
    const headingColor = useColorModeValue("gray.800", "white");
    const { highlightColor,primaryColor } = useAppColors();

  return (
    <Box id="about" py={20}>
      <Container maxW="container.lg">
        <SectionTitle
          title="About Me"
          logoSrc="/logo.png"
          subtitle="Who am I?"
        />

        <Flex
          direction={{ base: "column", md: "row" }}
          align="center"
          gap={{ base: 10, md: 16 }}
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Box
              position="relative"
              w={{ base: "280px", md: "350px" }}
              h={{ base: "280px", md: "400px" }}
            >
              <Box
                position="absolute"
                top="15px"
                left="15px"
                w="100%"
                h="100%"
                border="3px solid"
                borderColor={primaryColor}
                borderRadius="2xl"
                zIndex={0}
              />
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80"
                alt="Profile"
                w="100%"
                h="100%"
                objectFit="cover"
                borderRadius="2xl"
                position="relative"
                zIndex={1}
                boxShadow="2xl"
              />
            </Box>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ flex: 1 }}
          >
            <Heading size="xl" color={headingColor} mb={4}>
              Im John Doe
            </Heading>
            <Text
              color={highlightColor}
              fontSize="lg"
              fontWeight="medium"
              mb={4}
            >
              Frontend Developer & UI Designer
            </Text>

            <Text color={textColor} lineHeight="tall" mb={6}>
              I build exceptional digital experiences. With a passion for clean
              code and modern design, I transform complex problems into simple,
              beautiful, and intuitive solutions. I am currently focused on
              creating accessible, human-centered products.
            </Text>

            <Wrap spacing={3} mb={8}>
              {["React", "Next.js", "TypeScript", "Chakra UI", "Figma"].map(
                (skill) => (
                  <WrapItem key={skill}>
                    <Box
                      px={4}
                      py={1.5}
                      // eslint-disable-next-line react-hooks/rules-of-hooks
                      bg={useColorModeValue("gray.100", "gray.700")}
                      color={headingColor}
                      borderRadius="full"
                      fontSize="sm"
                      fontWeight="medium"
                    >
                      {skill}
                    </Box>
                  </WrapItem>
                ),
              )}
            </Wrap>
          </motion.div>
        </Flex>
      </Container>
    </Box>
  );
};

export default About;
