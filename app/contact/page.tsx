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
  Input,
  Textarea,
  Button,
  FormControl,
  FormLabel,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaPaperPlane,
} from "react-icons/fa";
import SectionTitle from "../components/SectionTitle";
import { iconNavbar } from "@/data";

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
} as const;

const Contact = () => {
  const { primaryColor, textColor, headingColor } = useAppColors();
  const bgColor = useColorModeValue("white", "gray.800");
  const inputBg = useColorModeValue("gray.50", "gray.900");

  return (
    <Box id="contact" py={20} bg={useColorModeValue("gray.50", "gray.900")}>
      <Container maxW="container.xl">
        <SectionTitle
          title="Contact Me"
          logoSrc="/logo.png"
          subtitle="Let's work together"
        />

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <VStack align="start" spacing={8}>
              <Box>
                <Heading size="lg" color={headingColor} mb={2}>
                  Get in Touch
                </Heading>
                <Text color={textColor} fontSize="lg">
                  Feel free to get in touch with me. I am always open to
                  discussing new projects, creative ideas or opportunities to be
                  part of your visions.
                </Text>
              </Box>

              <VStack align="start" spacing={5}>
                <HStack spacing={4}>
                  <Icon as={FaMapMarkerAlt} boxSize={6} color={primaryColor} />
                  <Box>
                    <Text fontWeight="bold" color={headingColor}>
                      Address
                    </Text>
                    <Text color={textColor}>Tanta,Gharbya, Egypt</Text>
                  </Box>
                </HStack>

                <HStack spacing={4}>
                  <Icon as={FaPhoneAlt} boxSize={6} color={primaryColor} />
                  <Box>
                    <Text fontWeight="bold" color={headingColor}>
                      Phone
                    </Text>
                    <Text color={textColor}>+20 115 442 4837</Text>
                  </Box>
                </HStack>

                <HStack spacing={4}>
                  <Icon as={FaEnvelope} boxSize={6} color={primaryColor} />
                  <Box>
                    <Text fontWeight="bold" color={headingColor}>
                      Email
                    </Text>
                    <Text color={textColor}>info@nabih.online</Text>
                  </Box>
                </HStack>
              </VStack>

              <HStack spacing={4} pt={4}>
                {iconNavbar.map((link) => (
                  <Link href={link.href} isExternal key={link.label}>
                    <Icon
                      as={link.icon}
                      boxSize={6}
                      color={textColor}
                      _hover={{
                        color: primaryColor,
                        transform: "translateY(-3px)",
                      }}
                      transition="0.2s"
                    />
                  </Link>
                ))}
              </HStack>
            </VStack>
          </motion.div>

          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Box
              bg={bgColor}
              p={8}
              borderRadius="none"
              boxShadow="lg"
              borderLeft="4px solid"
              borderColor={primaryColor}
            >
              <VStack
                spacing={5}
                as="form"
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Message Sent!");
                }}
              >
                <FormControl isRequired>
                  <FormLabel color={headingColor}>Name</FormLabel>
                  <Input
                    type="text"
                    placeholder="Your Name"
                    bg={inputBg}
                    border="none"
                    borderRadius="none"
                    _placeholder={{ color: "gray.500" }}
                    focusBorderColor={primaryColor}
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel color={headingColor}>Email</FormLabel>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    bg={inputBg}
                    border="none"
                    borderRadius="none"
                    _placeholder={{ color: "gray.500" }}
                    focusBorderColor={primaryColor}
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel color={headingColor}>Subject</FormLabel>
                  <Input
                    type="text"
                    placeholder="Subject"
                    bg={inputBg}
                    border="none"
                    borderRadius="none"
                    _placeholder={{ color: "gray.500" }}
                    focusBorderColor={primaryColor}
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel color={headingColor}>Message</FormLabel>
                  <Textarea
                    placeholder="Your Message"
                    rows={5}
                    bg={inputBg}
                    border="none"
                    borderRadius="none"
                    resize="none"
                    _placeholder={{ color: "gray.500" }}
                    focusBorderColor={primaryColor}
                  />
                </FormControl>

                <Button
                  type="submit"
                  w="full"
                  backgroundColor={primaryColor}
                  color="white"
                  size="lg"
                  borderRadius="none"
                  leftIcon={<Icon as={FaPaperPlane} />}
                  _hover={{ opacity: 0.9, transform: "translateY(-2px)" }}
                  transition="all 0.2s"
                >
                  Send Message
                </Button>
              </VStack>
            </Box>
          </motion.div>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Contact;
