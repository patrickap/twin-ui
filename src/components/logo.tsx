import { Flex } from '@chakra-ui/layout';
import { Icon, useColorModeValue } from '@chakra-ui/react';
import { BoltIcon } from '@heroicons/react/20/solid';

export const Logo = () => {
  const color = useColorModeValue('brand.500', 'brand.200');

  return (
    <Flex justifyContent='center'>
      <Icon as={BoltIcon} w={50} h={50} color={color} />
    </Flex>
  );
};
