import { createContext, useState, useContext, ReactNode } from 'react';

interface WaitlistContextType {
  isWaitlistModalOpen: boolean;
  openWaitlistModal: () => void;
  closeWaitlistModal: () => void;
}

const WaitlistContext = createContext<WaitlistContextType | undefined>(undefined);

export const WaitlistProvider = ({ children }: { children: ReactNode }) => {
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false);

  const openWaitlistModal = () => {
    setIsWaitlistModalOpen(true);
  };

  const closeWaitlistModal = () => {
    setIsWaitlistModalOpen(false);
  };

  return (
    <WaitlistContext.Provider
      value={{
        isWaitlistModalOpen,
        openWaitlistModal,
        closeWaitlistModal,
      }}
    >
      {children}
    </WaitlistContext.Provider>
  );
};

export const useWaitlist = (): WaitlistContextType => {
  const context = useContext(WaitlistContext);
  if (context === undefined) {
    throw new Error('useWaitlist must be used within a WaitlistProvider');
  }
  return context;
};
