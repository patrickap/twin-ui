import {
  Button,
  Checkbox,
  Input,
  InputPassword,
  Link,
  Logo,
  Text,
  Title,
} from '@/components/elements';
import { Box, HStack, Stack } from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks';
import { signInFormSchema } from '../schemas';
import { SignInForm } from '../types';

const SignInPage = () => {
  // TODO: add and use translation
  const { t } = useTranslation();

  const signInForm = useForm<SignInForm>({
    resolver: zodResolver(signInFormSchema),
  });
  const navigate = useNavigate();

  const { signIn } = useAuth();

  const onSubmit = signInForm.handleSubmit((form) => {
    signIn.mutateAsync(form).then(() => navigate('/dashboard'));
  });

  return (
    <Stack spacing={8} maxW='md' flexGrow={1} py={{ base: 4, sm: 0 }}>
      <Stack spacing={6}>
        <Logo size={3} />
        <Stack spacing={2} textAlign='center'>
          <Title size={2}>Sign in to your account</Title>
          <HStack spacing={1} justify='center'>
            <Text>Don't have an account?</Text>
            <Link>Sign up</Link>
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
                <Input
                  ref={field.ref}
                  label='Username'
                  value={field.value}
                  isError={!!fieldState.invalid}
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
                  value={field.value}
                  isError={!!fieldState.invalid}
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
                  label='Remember me'
                  isChecked={field.value}
                  isError={!!fieldState.invalid}
                  onChange={field.onChange}
                  onBlur={field.onBlur}
                />
              )}
            />
            <Link>Forgot password?</Link>
          </HStack>
          <Stack spacing={6}>
            <Button
              color='brand'
              onClick={onSubmit}
              isLoading={signIn.isLoading}
            >
              Sign in
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  );
};

export { SignInPage };
