import { Button, Card, CardBody, Heading, Link, Stack } from '@chakra-ui/react';
import { InputPassword } from '../components/input/input-password';
import { InputText } from '../components/input/input-text';

const SignIn = () => {
  // TODO: move reusable parts to /layouts
  return (
    <Stack
      width='100%'
      height='100vh'
      alignItems='center'
      justifyContent='center'
    >
      <Card px={4} py={4} width='100%' maxWidth='sm' shadow='xs'>
        <CardBody>
          <Stack spacing={10}>
            <Heading size='sm'>Sign in to your account</Heading>
            <Stack spacing={4}>
              <InputText label='Username' />
              <InputPassword label='Password' />
            </Stack>
            <Stack spacing={4}>
              <Button colorScheme='teal'>Sign in</Button>
              <Link fontSize={14} textAlign='center' color='teal'>
                Forgot your password?
              </Link>
            </Stack>
          </Stack>
        </CardBody>
      </Card>
    </Stack>
  );
};

export { SignIn };
