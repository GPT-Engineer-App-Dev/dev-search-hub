import { Box, Button, Container, Flex, Heading, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { FaSearch, FaFilter, FaComments, FaFileSignature } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Hero */}
      <Box bg="gray.800" color="white" py={24}>
        <Container maxW="container.lg">
          <Heading as="h1" size="3xl" mb={4}>
            Hire Top Software Talent, Fast
          </Heading>
          <Text fontSize="xl" mb={8}>
            Particles is the leading marketplace for companies to find and hire specialized software developers in web technologies like React, Node.js, .NET, Go, and JavaScript.
          </Text>
          <Button size="lg" colorScheme="blue">
            View Developer Listings
          </Button>
        </Container>
      </Box>

      {/* Benefits */}
      <Box py={24}>
        <Container maxW="container.lg">
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
            <Box>
              <Image src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx2ZXR0ZWQlMjBkZXZlbG9wZXIlMjBwb3J0cmFpdHxlbnwwfHx8fDE3MTMwNTgxOTl8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Vetted developer" mb={4} />
              <Heading as="h3" size="lg" mb={2}>
                Access to pre-vetted, top developers
              </Heading>
              <Text>Every developer on Particles is carefully screened and tested to ensure they meet the highest standards.</Text>
            </Box>
            <Box>
              <Image src="https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3ZWIlMjB0ZWNobm9sb2dpZXMlMjBjb2xsYWdlfGVufDB8fHx8MTcxMzA1ODIwMHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Web technologies" mb={4} />
              <Heading as="h3" size="lg" mb={2}>
                Wide range of web technology expertise
              </Heading>
              <Text>Find developers specializing in React, Node.js, .NET, Go, JavaScript and more. Whatever your stack, we've got you covered.</Text>
            </Box>
            <Box>
              <Image src="https://images.unsplash.com/photo-1571828731160-e6280f7d30ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmYXN0JTIwaGlyaW5nJTIwcHJvY2Vzc3xlbnwwfHx8fDE3MTMwNTgyMDB8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Fast hiring" mb={4} />
              <Heading as="h3" size="lg" mb={2}>
                Faster hiring process
              </Heading>
              <Text>Go from posting a job to hiring a developer in days instead of weeks or months. Particles streamlines hiring.</Text>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* How It Works */}
      <Box bg="gray.50" py={24}>
        <Container maxW="container.lg">
          <Heading as="h2" size="2xl" mb={12} textAlign="center">
            How It Works
          </Heading>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
            <Stack spacing={8}>
              <Flex>
                <Box flexShrink={0}>
                  <Flex align="center" justify="center" h={12} w={12} rounded="md" bg="blue.500" color="white">
                    <FaSearch size={24} />
                  </Flex>
                </Box>
                <Box ml={4}>
                  <Heading as="h3" size="md" mb={2}>
                    1. Search developer listings
                  </Heading>
                  <Text>Browse our network of top developers across various technologies and experience levels.</Text>
                </Box>
              </Flex>

              <Flex>
                <Box flexShrink={0}>
                  <Flex align="center" justify="center" h={12} w={12} rounded="md" bg="blue.500" color="white">
                    <FaFilter size={24} />
                  </Flex>
                </Box>
                <Box ml={4}>
                  <Heading as="h3" size="md" mb={2}>
                    2. Filter by technology and location
                  </Heading>
                  <Text>Refine your search to find the perfect developer for your needs and timezone.</Text>
                </Box>
              </Flex>
            </Stack>

            <Stack spacing={8}>
              <Flex>
                <Box flexShrink={0}>
                  <Flex align="center" justify="center" h={12} w={12} rounded="md" bg="blue.500" color="white">
                    <FaComments size={24} />
                  </Flex>
                </Box>
                <Box ml={4}>
                  <Heading as="h3" size="md" mb={2}>
                    3. Message developers directly
                  </Heading>
                  <Text>Contact your top candidates to discuss your project requirements and their availability.</Text>
                </Box>
              </Flex>

              <Flex>
                <Box flexShrink={0}>
                  <Flex align="center" justify="center" h={12} w={12} rounded="md" bg="blue.500" color="white">
                    <FaFileSignature size={24} />
                  </Flex>
                </Box>
                <Box ml={4}>
                  <Heading as="h3" size="md" mb={2}>
                    4. Hire and start your project
                  </Heading>
                  <Text>Choose your developer, sign the contract, and kick off your project directly through Particles.</Text>
                </Box>
              </Flex>
            </Stack>
          </SimpleGrid>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;
