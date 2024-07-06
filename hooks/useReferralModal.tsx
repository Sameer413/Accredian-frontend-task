import { create } from "zustand";

interface ReferralModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useReferralModal = create<ReferralModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useReferralModal;