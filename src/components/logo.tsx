import { Flex } from '@chakra-ui/layout';
import { Icon, useColorModeValue } from '@chakra-ui/react';
import { RocketLaunchIcon } from '@heroicons/react/20/solid';

type LogoProps = {
  size?: number;
};

export const Logo = ({ size = 48 }: LogoProps = {}) => {
  const color = useColorModeValue('brand.500', 'brand.200');

  return (
    <Flex justifyContent='center' alignItems='center'>
      <Icon
        as={RocketLaunchIcon}
        color={color}
        w={size + 'px'}
        h={size + 'px'}
      />
    </Flex>
  );
};
