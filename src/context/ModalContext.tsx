import { createContext, useContext, useState, ReactNode } from 'react';
import ProjectModal from '@/components/ProjectModal';
import { getAttributionFromUrl, trackEvent } from '@/utils/analytics';

interface ModalContextType {
  openModal: (source?: string) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (source = 'unknown') => {
    const attribution = getAttributionFromUrl();

    trackEvent('cta_clicked', {
      cta_source: source,
      cta_target: 'project_modal',
      ...attribution,
    });

    trackEvent('inquiry_started', {
      source,
      ...attribution,
    });

    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      <ProjectModal isOpen={isModalOpen} onClose={closeModal} />
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
}
