import { useToast } from '@/hooks';
import * as toast from '@radix-ui/react-toast';
import { AnimatePresence } from 'framer-motion';
import { Toast } from './toast';

const Toasts = () => {
  const { toasts, add } = useToast();

  (window as any).add = (id: string) => {
    return add({
      title: 'as' + id,
      type: 'error',
      description: 'sdgsdgsd sd sdvsd',
      duration: 3000,
    });
  };

  (window as any).gett = () => {
    return toasts;
  };

  return (
    <toast.Provider>
      <AnimatePresence>
        {toasts?.map((props) => (
          <Toast {...props} key={props.id} />
        ))}
      </AnimatePresence>
      <toast.Viewport className='fixed top-4 right-4 z-10 flex flex-col gap-4' />
    </toast.Provider>
  );
};

export { Toasts };
