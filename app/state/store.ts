import { create } from 'zustand'

interface FormData {
  name: string;
  email: string;
  age: string;
}

interface FormStore {
  formData: FormData[];
  addFormData: (data: FormData) => void;
  clearFormData: () => void;
}

export const useFormStore = create<FormStore>((set) => ({
  formData: [],
  addFormData: (data) => set((state) => ({ formData: [...state.formData, data] })),
  clearFormData: () => set(() => ({ formData: [] })),
}));
