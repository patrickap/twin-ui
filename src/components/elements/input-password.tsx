import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { forwardRef, useState } from 'react';
import { Input, InputProps } from './input';

type InputPasswordProps = InputProps;

const InputPassword = forwardRef((props: InputPasswordProps, ref) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <Input
      {...props}
      ref={ref}
      type={isVisible ? 'text' : 'password'}
      icon={{
        right: (
          <span
            onClick={() =>
              !props.isDisabled ? setIsVisible(!isVisible) : null
            }
          >
            {isVisible ? (
              <EyeIcon
                className={clsx(
                  'cursor-pointer',
                  props.isDisabled && '!cursor-not-allowed',
                )}
              />
            ) : (
              <EyeSlashIcon
                className={clsx(
                  'cursor-pointer',
                  props.isDisabled && '!cursor-not-allowed',
                )}
              />
            )}
          </span>
        ),
      }}
    />
  );
});

export { InputPassword };
export type { InputPasswordProps };
