import { Flex, Box, Text, Avatar } from '@chakra-ui/react';

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Bruno Luiz</Text>
        <Text color="gray.300" fontSize="small">
          blgc.sgo@hotmail.com
        </Text>
      </Box>

      <Avatar size="md" name="Bruno Luiz" />
    </Flex>
  );
}
