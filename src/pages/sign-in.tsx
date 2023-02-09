import { Button, Card, CardBody, Heading, Link, Stack } from '@chakra-ui/react';
import { Input } from '../components/input';

const SignIn = () => {
  return (
    <Stack
      width='100%'
      height='100vh'
      justifyContent='center'
      alignItems='center'
    >
      <Card shadow='xs' px={4} py={4} maxWidth='sm' width='100%'>
        <CardBody>
          <Stack spacing={10}>
            <Heading size='sm'>Sign in to your account</Heading>
            <Stack spacing={4}>
              <Input label='Username' />
              <Input label='Password' type='password' />
            </Stack>
            <Stack spacing={4}>
              <Button colorScheme='teal'>Sign in</Button>
              <Link fontSize={14} color='teal' textAlign='center'>
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
