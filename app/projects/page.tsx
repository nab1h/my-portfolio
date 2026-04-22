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
  Button,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import SectionTitle from "../components/SectionTitle";
import { projectsData } from "@/data";


const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
} as const;



const Projects = () => {
  const { primaryColor } = useAppColors();

  const cardBg = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.600", "gray.300");
  const headingColor = useColorModeValue("gray.800", "white");

  return (
    <Box id="projects" py={20} bg={useColorModeValue("gray.50", "gray.900")}>
      <Container maxW="container.xl">
        <SectionTitle
          title="My Projects"
          logoSrc="/logo.png"
          subtitle="What I've built"
        />

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -5 }}
            >
              <Box
                bg={cardBg}
                borderRadius="none"
                boxShadow="md"
                overflow="hidden"
                position="relative"
                transition="all 0.3s"
                borderLeft="4px solid"
                borderColor={primaryColor}
                _hover={{
                  boxShadow: "xl",
                  transform: "translateY(-5px)",
                }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  w="100%"
                  h="300px"
                  objectFit="fill"
                />

                <Box p={6}>
                  <VStack align="start" spacing={3} mb={4}>
                    <Heading size="md" color={headingColor}>
                      {project.title}
                    </Heading>
                    <Text fontSize="sm" color={textColor} lineHeight="tall">
                      {project.description}
                    </Text>
                  </VStack>

                  <HStack spacing={4} mb={6} color={primaryColor}>
                    {project.tools.map((IconComp, i) => (
                      <Icon key={i} as={IconComp} boxSize={6} />
                    ))}
                  </HStack>

                  <HStack spacing={4} wrap="wrap">
                    <Button
                      as="a"
                      href={project.githubUrl}
                      target="_blank"
                      leftIcon={<Icon as={FaGithub} />}
                      variant="outline"
                      color={primaryColor}
                      borderRadius="4"
                      size="sm"
                    >
                      Code
                    </Button>
                    <Button
                      as="a"
                      href={project.liveUrl}
                      target="_blank"
                      leftIcon={<Icon as={FaExternalLinkAlt} />}
                      backgroundColor={primaryColor}
                      color="white"
                      _hover={{ opacity: 0.8 }}
                      borderRadius="4"
                      size="sm"
                    >
                      Live Demo
                    </Button>
                    {project.liveUrlOne ? (
                      <Button
                        as="a"
                        href={project.liveUrlOne}
                        target="_blank"
                        leftIcon={<Icon as={FaExternalLinkAlt} />}
                        backgroundColor={primaryColor}
                        color="white"
                        _hover={{ opacity: 0.8 }}
                        borderRadius="4"
                        size="sm"
                      >
                        Live Demo One
                      </Button>
                    ) : (
                      ""
                    )}

                    {project.liveUrlTwo ? (
                      <Button
                        as="a"
                        href={project.liveUrlTwo}
                        target="_blank"
                        leftIcon={<Icon as={FaExternalLinkAlt} />}
                        backgroundColor={primaryColor}
                        color="white"
                        _hover={{ opacity: 0.8 }}
                        borderRadius="4"
                        size="sm"
                      >
                        Live Demo Tow
                      </Button>
                    ) : (
                      ""
                    )}
                  </HStack>
                </Box>
              </Box>
            </motion.div>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Projects;
