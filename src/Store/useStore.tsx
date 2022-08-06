import create from 'zustand';

export interface StoreInterface {
  storeName: string;
  storeAge: number;
  storeLive: string;
  storePackage: string;
  storePremium: string;
  setStoreName: (name: string) => void;
  setStoreAge: (age: number) => void;
  setStoreLive: (live: string) => void;
  setStorePackage: (pack: string) => void;
  setStorePremium: (premium: string) => void;
}

const useStore = create<StoreInterface>((set, get) => ({
  storeName: '',
  storeAge: 0,
  storeLive: '',
  storePackage: '',
  storePremium: '',

  setStoreName: (name: string) => {
    set({ storeName: name });
  },
  setStoreAge: (age: number) => {
    set({ storeAge: age });
  },
  setStoreLive: (live: string) => {
    set({ storeLive: live });
  },
  setStorePackage: (pack: string) => {
    set({ storePackage: pack });
  },
  setStorePremium: (premium: string) => {
    set({ storePremium: premium });
  }
}));

export default useStore;
