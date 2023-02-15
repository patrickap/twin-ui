import {
  Box,
  Button,
  Checkbox,
  Heading,
  HStack,
  Stack,
  Text,
} from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Logo } from '../../../components/elements';
import { InputPassword, InputText } from '../../../components/elements/input';
import { signInFormSchema } from '../schemas';
import { SignInForm } from '../types';

const SignIn = () => {
  // TODO: use translation and make it type safe
  const { t } = useTranslation();
  const signInForm = useForm<SignInForm>({
    resolver: zodResolver(signInFormSchema),
  });

  return (
    <Stack spacing={8} maxW='md' flexGrow={1} py={{ base: 4, sm: 0 }}>
      <Stack spacing={6}>
        <Logo size={12} />
        <Stack spacing={2} textAlign='center'>
          <Heading size={{ base: 'xs', sm: 'sm' }}>
            Sign in to your account
          </Heading>
          <HStack spacing={1} justify='center'>
            <Text color='muted'>Don't have an account?</Text>
            <Button variant='link' colorScheme='brand'>
              Sign up
            </Button>
          </HStack>
        </Stack>
      </Stack>
      <Box
        py={{ base: 0, sm: 8 }}
        px={{ base: 0, sm: 8 }}
        bg={{ base: 'transparent', sm: 'bg-surface' }}
        boxShadow={{ base: 'none', sm: 'sm' }}
        borderRadius={{ base: 'none', sm: 'md' }}
      >
        <Stack spacing={6}>
          <Stack spacing={6}>
            <Controller
              control={signInForm.control}
              name='username'
              render={({ field, fieldState }) => (
                <InputText
                  ref={field.ref}
                  label='Username'
                  defaultValue={field.value}
                  isInvalid={!!fieldState.invalid}
                  error={fieldState.error?.message}
                  onChange={field.onChange}
                  onBlur={field.onBlur}
                />
              )}
            />
            <Controller
              control={signInForm.control}
              name='password'
              render={({ field, fieldState }) => (
                <InputPassword
                  ref={field.ref}
                  label='Password'
                  defaultValue={field.value}
                  isInvalid={!!fieldState.invalid}
                  error={fieldState.error?.message}
                  onChange={field.onChange}
                  onBlur={field.onBlur}
                />
              )}
            />
          </Stack>
          <HStack justify='space-between'>
            <Controller
              control={signInForm.control}
              name='remember'
              render={({ field, fieldState }) => (
                <Checkbox
                  ref={field.ref}
                  defaultChecked={field.value}
                  isInvalid={!!fieldState.invalid}
                  onChange={field.onChange}
                  onBlur={field.onBlur}
                >
                  Remember me
                </Checkbox>
              )}
            />
            <Button variant='link' colorScheme='brand' size='sm'>
              Forgot password?
            </Button>
          </HStack>
          <Stack spacing={6}>
            <Button
              variant='primary'
              onClick={signInForm.handleSubmit((form) => {
                console.log(form);
              })}
            >
              Sign in
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  );
};

export { SignIn };
