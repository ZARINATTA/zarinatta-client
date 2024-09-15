import { useModalStore } from '@/hooks/use-modal-store';
import { Flex } from 'antd';

export default function StationSearchModal() {
  const closeModal = useModalStore(({ closeModal }) => closeModal);

  return (
    <Flex
      justify="center"
      align="center"
      style={{
        position: 'fixed',
        width: '50vw',
        height: '50vh',
        top: '25vh',
        left: '25vw',
        backgroundColor: 'white',
      }}
      onClick={closeModal}
    >
      하이
    </Flex>
  );
}
