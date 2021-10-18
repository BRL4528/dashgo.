import { Flex, Box, Text, Avatar } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Bruno Luiz</Text>
          <Text color="gray.300" fontSize="small">
            blgc.sgo@hotmail.com
          </Text>
        </Box>
      )}

      <Avatar size="md" name="Bruno Luiz" />
    </Flex>
  );
}
