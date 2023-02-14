import { Center } from '@chakra-ui/layout';
import { Icon, useColorModeValue } from '@chakra-ui/react';
import { RocketLaunchIcon } from '@heroicons/react/20/solid';

type LogoProps = {
  size?: number;
};

export const Logo = ({ size = 12 }: LogoProps = {}) => {
  const color = useColorModeValue('brand.500', 'brand.200');

  return (
    <Center>
      <Icon as={RocketLaunchIcon} color={color} w={size} h={size} />
    </Center>
  );
};
