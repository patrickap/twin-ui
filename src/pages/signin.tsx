import { Button, Card, CardBody, Heading, Link, Stack } from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Logo } from '../components';
import { InputPassword, InputText } from '../components/input';
import { SignInForm, signInFormSchema } from '../schemas/forms';

const SignIn = () => {
  // TODO: use translation and make it type safe
  const { t } = useTranslation();
  const signInForm = useForm<SignInForm>({
    resolver: zodResolver(signInFormSchema),
  });

  return (
    <Card
      px={4}
      py={4}
      width='100%'
      maxWidth='sm'
      shadow='xs'
      bg='chakra-body-bg'
    >
      <CardBody>
        <Stack spacing={10}>
          <Logo />
          <Heading size='sm'>Sign in to your account</Heading>
          <Stack spacing={4}>
            <Controller
              control={signInForm.control}
              name='username'
              render={({ field, fieldState }) => (
                <InputText
                  ref={field.ref}
                  label={'Username'}
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
                  label={'Password'}
                  defaultValue={field.value}
                  isInvalid={!!fieldState.invalid}
                  error={fieldState.error?.message}
                  onChange={field.onChange}
                  onBlur={field.onBlur}
                />
              )}
            />
          </Stack>
          <Stack spacing={4}>
            <Button
              colorScheme='teal'
              onClick={signInForm.handleSubmit((form) => {
                console.log(form);
              })}
            >
              Sign in
            </Button>
            <Link fontSize={14} textAlign='center' color='teal'>
              Forgot your password?
            </Link>
          </Stack>
        </Stack>
      </CardBody>
    </Card>
  );
};

export { SignIn };
