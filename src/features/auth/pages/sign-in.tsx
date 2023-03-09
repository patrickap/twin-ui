import {
  Button,
  Checkbox,
  InputPassword,
  InputText,
  Link,
  Logo,
  Text,
  Title,
} from '@/components';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks';
import { signInFormSchema } from '../schemas';
import { SignInForm } from '../types';

const SignInPage = () => {
  const { signIn } = useAuth();
  // TODO: use translation everywhere
  const { t } = useTranslation('auth');
  const navigate = useNavigate();
  const { control, handleSubmit } = useForm<SignInForm>({
    resolver: zodResolver(signInFormSchema),
  });

  const onSubmit = handleSubmit((form) => {
    signIn.mutateAsync(form).then(() => navigate('/dashboard'));
  });

  return (
    <div className='flex w-full max-w-md flex-col gap-8'>
      <div className='flex flex-col gap-6'>
        <Logo size={3} />
        <div className='flex flex-col gap-2 text-center'>
          <Title size={2}>{t('page.sign_in.title')}</Title>
          <Text>
            {t('page.sign_in.text')} <Link>{t('action.sign_up')}</Link>
          </Text>
        </div>
      </div>
      <div className='bg-transparent p-0 shadow-none sm:rounded-lg sm:bg-white sm:px-10 sm:py-8 sm:shadow-lg'>
        <form className='flex flex-col gap-6'>
          <Controller
            control={control}
            name='username'
            render={({ field, fieldState }) => (
              <InputText
                ref={field.ref}
                label={t('form.field.username')}
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
                label={t('form.field.password')}
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
                  label={t('form.field.remember_me')}
                  isChecked={field.value}
                  isError={!!fieldState.invalid}
                  onChange={field.onChange}
                  onBlur={field.onBlur}
                />
              )}
            />
            <Link>{t('action.forgot_password')}</Link>
          </div>
          <Button
            type='submit'
            color='brand'
            onClick={onSubmit}
            isLoading={signIn.isLoading}
          >
            {t('action.sign_in')}
          </Button>
        </form>
      </div>
    </div>
  );
};

export { SignInPage };
