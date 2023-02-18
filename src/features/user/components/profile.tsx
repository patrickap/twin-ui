import { Avatar, Icon, Spacer, Stack, Text } from '@chakra-ui/react';
import { ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { UserIcon } from '@heroicons/react/24/outline';
import { useUser } from '../hooks';

type ProfileProps = {
  isIconOnly?: boolean;
};

const Profile = ({ isIconOnly }: ProfileProps) => {
  const { getUser } = useUser();

  return (
    <>
      {isIconOnly ? (
        <Stack
          py={3}
          px={4}
          spacing={4}
          direction='row'
          align='center'
          justify='center'
        >
          <Avatar
            size='sm'
            colorScheme='gray'
            icon={<Icon as={UserIcon} fontSize={16} strokeWidth={2} />}
          />
        </Stack>
      ) : (
        <Stack
          py={3}
          px={4}
          spacing={4}
          direction='row'
          align='center'
          justify='center'
          rounded='xl'
          border='1px'
          borderColor='bg-subtle'
        >
          <Avatar
            size='md'
            colorScheme='gray'
            icon={<Icon as={UserIcon} fontSize={24} />}
          />

          <Text>{getUser.data?.username}</Text>
          <Spacer />
          <Icon as={ChevronUpDownIcon} fontSize={24} />
        </Stack>
      )}
    </>
  );
};

export { Profile };
