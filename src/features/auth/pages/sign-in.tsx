import {
  Button,
  Checkbox,
  InputPassword,
  InputText,
  Link,
  Logo,
  Text,
  Title,
} from '@/components/elements';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks';
import { signInForm } from '../schemas';
import { SignInForm } from '../types';

const SignInPage = () => {
  const { signIn } = useAuth();
  // TODO: add and use translation
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { control, handleSubmit } = useForm<SignInForm>({
    resolver: zodResolver(signInForm),
  });

  const onSubmit = handleSubmit((form) => {
    signIn.mutateAsync(form).then(() => navigate('/dashboard'));
  });

  return (
    <div className='flex w-full max-w-md flex-col gap-8'>
      <div className='flex flex-col gap-6'>
        <Logo size={3} />
        <div className='flex flex-col gap-2 text-center'>
          <Title size={2}>Sign in to your account</Title>
          <Text>
            Don't have an account? <Link>Sign up</Link>
          </Text>
        </div>
      </div>
      <div className='bg-transparent p-0 shadow-none sm:rounded-lg sm:bg-white sm:px-10 sm:py-8 sm:shadow-md'>
        <div className='flex flex-col gap-6'>
          <Controller
            control={control}
            name='username'
            render={({ field, fieldState }) => (
              <InputText
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
            control={control}
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
          <div className='flex justify-between'>
            <Controller
              control={control}
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
          </div>
          <Button color='brand' onClick={onSubmit} isLoading={signIn.isLoading}>
            Sign in
          </Button>
        </div>
      </div>
    </div>
  );
};

export { SignInPage };
