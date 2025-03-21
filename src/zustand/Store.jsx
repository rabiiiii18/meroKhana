import { create } from 'zustand';

const useClickStore = create((set) => ({
  click: "appretizers", 
  setClick: (value) => set({ click: value }),
}));

export default useClickStore;
