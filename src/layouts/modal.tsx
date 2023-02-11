import { Center, Container } from '@chakra-ui/react';
import { ReactElement } from 'react';

type ModalProps = {
  children?: ReactElement | ReactElement[];
};

// TODO: create layout
const Modal = ({ children }: ModalProps) => {
  return (
    <Container>
      <Center w='100%' h='100vh'>
        {children}
      </Center>
    </Container>
  );
};

export { Modal };
export type { ModalProps };
