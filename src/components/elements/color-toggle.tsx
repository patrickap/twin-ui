import { Icon, IconButton, useColorMode } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';

const ColorToggle = () => {
  const color = useColorMode();

  return (
    <IconButton
      icon={
        <Icon
          as={color.colorMode === 'light' ? MoonIcon : SunIcon}
          w={6}
          h={6}
        />
      }
      colorScheme='gray'
      variant='ghost'
      aria-label='color-mode'
      onClick={color.toggleColorMode}
    />
  );
};

export { ColorToggle };
