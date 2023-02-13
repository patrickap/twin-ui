import { Flex, Text } from '@chakra-ui/layout';
import { Icon, useColorModeValue } from '@chakra-ui/react';
import { RocketLaunchIcon } from '@heroicons/react/20/solid';

export const Logo = () => {
  const color = useColorModeValue('brand.500', 'brand.200');

  return (
    <Flex justifyContent='center' alignItems='center' gap={0.5}>
      <Icon as={RocketLaunchIcon} color={color} />
      <Text>
        <b>sftp</b>go
      </Text>
    </Flex>
  );
};
