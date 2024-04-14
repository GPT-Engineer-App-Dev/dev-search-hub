import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";

const developers = [
  {
    name: "John Smith",
    location: "New York, NY",
    technologies: ["React", "Node.js", "MongoDB"],
  },
  {
    name: "Jane Doe",
    location: "San Francisco, CA",
    technologies: ["Angular", "Express", "PostgreSQL"],
  },
  {
    name: "Bob Johnson",
    location: "Chicago, IL",
    technologies: ["Vue.js", "Laravel", "MySQL"],
  },
  {
    name: "Sarah Lee",
    location: "Houston, TX",
    technologies: ["React Native", "Firebase"],
  },
  {
    name: "David Kim",
    location: "Seattle, WA",
    technologies: ["Django", "AWS"],
  },
  {
    name: "Emily Chen",
    location: "Boston, MA",
    technologies: ["Ruby on Rails", "GraphQL"],
  },
];

function Developers() {
  return (
    <Box p={4}>
      <Heading as="h1" size="xl" mb={8}>
        Top Software Developers for Hire
      </Heading>
      <SimpleGrid columns={{ sm: 1, md: 3 }} spacing={10}>
        {developers.map((dev, index) => (
          <Box key={index} bg="gray.100" p={6} rounded="md">
            <Heading as="h3" size="lg" mb={2}>
              {dev.name}
            </Heading>
            <Text fontSize="md" mb={4}>
              {dev.location}
            </Text>
            <Text fontSize="sm" color="gray.600">
              {dev.technologies.join(", ")}
            </Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default Developers;
