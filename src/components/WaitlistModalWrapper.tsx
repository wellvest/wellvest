import { useWaitlist } from '@/contexts/WaitlistContext';
import WaitlistModal from './WaitlistModal';

const WaitlistModalWrapper = () => {
  const { isWaitlistModalOpen, closeWaitlistModal } = useWaitlist();

  return (
    <WaitlistModal 
      isOpen={isWaitlistModalOpen}
      onClose={closeWaitlistModal}
    />
  );
};

export default WaitlistModalWrapper;
