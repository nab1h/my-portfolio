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
import { skillsAboutPage } from "@/data";

const About = () => {
    const { highlightColor, primaryColor, textColor, headingColor } =
      useAppColors();

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
                src="about.jpg"
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
              I&apos;m Nabih Alashmawy
            </Heading>
            <Text
              color={highlightColor}
              fontSize="lg"
              fontWeight="medium"
              mb={4}
            >
              Full-Stack Web Developer
            </Text>

            <Text color={textColor} lineHeight="tall" mb={6}>
              I build fast, modern, and scalable web applications using the
              latest technologies.
            </Text>

            <Wrap spacing={3} mb={8}>
              {skillsAboutPage.map((skill) => (
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
              ))}
            </Wrap>
          </motion.div>
        </Flex>
      </Container>
    </Box>
  );
};

export default About;
