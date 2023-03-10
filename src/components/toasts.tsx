import { useToast } from '@/hooks';
import * as toast from '@radix-ui/react-toast';
import { AnimatePresence } from 'framer-motion';
import { Toast } from '.';

const Toasts = () => {
  const { toasts } = useToast();

  return (
    <toast.Provider>
      <AnimatePresence>
        {toasts?.map((props) => (
          <Toast {...props} key={props.id} />
        ))}
      </AnimatePresence>
      <toast.Viewport className='fixed top-0 right-0 z-10 flex max-h-screen w-full max-w-sm flex-col gap-4 overflow-y-scroll p-4' />
    </toast.Provider>
  );
};

export { Toasts };
