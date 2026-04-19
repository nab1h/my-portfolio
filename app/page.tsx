// app/page.tsx
"use client";
import { Link } from "@chakra-ui/next-js";
import { Button, Stack } from "@chakra-ui/react";
import { ArrowForwardIcon, EmailIcon } from "@chakra-ui/icons";

export default function Page() {
  return (
    <>
      <Link href="/about" color="blue.400" _hover={{ color: "blue.500" }}>
        About
      </Link>
      <Stack direction="row" spacing={4}>
        <Button leftIcon={<EmailIcon />} colorScheme="teal" variant="solid">
          Email
        </Button>
        <Button
          rightIcon={<ArrowForwardIcon />}
          colorScheme="teal"
          variant="outline"
        >
          Call us
        </Button>
      </Stack>
    </>
  );
}
