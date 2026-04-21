"use client";

import { useAppColors } from "@/hooks/useAppColors";
import {
  Container,
  Box,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  HStack,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

import SectionTitle from "../components/SectionTitle";
import { skillsData } from "@/data";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
} as const;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};



const Skills = () => {
  const { primaryColor, textColor, headingColor } = useAppColors();
  const bgColor = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.100", "gray.700");

  return (
    <Box id="skills" py={20} bg={useColorModeValue("gray.50", "gray.900")}>
      <Container maxW="container.xl">
        <SectionTitle
          title="My Skills"
          logoSrc="/logo.png"
          subtitle="What I work with"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {skillsData.map((category, index) => (
              <motion.div key={index} variants={cardVariants}>
                <Box
                  bg={bgColor}
                  p={8}
                  borderRadius="lg"
                  borderWidth="1px"
                  borderColor={borderColor}
                  boxShadow="lg"
                  h="100%"
                  borderTop="4px solid"
                  borderTopColor={primaryColor}
                >
                  <Heading
                    size="md"
                    color={headingColor}
                    mb={6}
                    textAlign="center"
                  >
                    {category.title}
                  </Heading>

                  <VStack spacing={4} align="stretch">
                    {category.skills.map((skill, i) => (
                      <HStack key={i} spacing={4}>
                        <Box
                          p={2}
                          borderRadius="md"
                          // eslint-disable-next-line react-hooks/rules-of-hooks
                          bg={useColorModeValue("gray.100", "gray.700")}
                        >
                          <Icon
                            as={skill.icon}
                            boxSize={6}
                            color={skill.color}
                            // eslint-disable-next-line react-hooks/rules-of-hooks
                            filter={useColorModeValue(
                              "none",
                              "brightness(1.2)",
                            )}
                          />
                        </Box>
                        <Text color={textColor} fontWeight="medium">
                          {skill.name}
                        </Text>
                      </HStack>
                    ))}
                  </VStack>
                </Box>
              </motion.div>
            ))}
          </SimpleGrid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Skills;
