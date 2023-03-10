import { DialogProps } from '@/components';
import { globalStore } from '@/stores';
import { v4 as uuidv4 } from 'uuid';

const useDialog = () => {
  const dialogs = globalStore.useState((s) => s.dialogs);

  const open = (dialog: DialogProps) => {
    const id = dialog.id ?? uuidv4();

    globalStore.update((s) => {
      s.dialogs = [...s.dialogs, { ...dialog, id }];
    });

    return id;
  };

  const close = (id: string) => {
    globalStore.update((s) => {
      s.dialogs = s.dialogs.filter((dialog) => dialog.id !== id);
    });
  };

  return { dialogs, open, close };
};

export { useDialog };
