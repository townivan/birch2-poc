import { create } from "zustand";
import { BLUEPRINTS } from "./blueprints";

interface Instance {
  id: string;
  blueprintId: string;
  data: Record<string, any>;
  isThin?: boolean;
}

interface EmailStore {
  instances: Instance[];
  selectedId: string;
  isEditPanelOpen: boolean;
  addInstance: (blueprintId: string) => void;
  updateData: (id: string, newData: Record<string, any>) => void;
  toggleEditPanel: () => void;
  closeEditPanel: () => void;
}

export const useEmailStore = create<EmailStore>((set) => ({
  // The 'Document': An ordered list of instances
  instances: [
    // {
    //   id: "initial-1",
    //   blueprintId: "HEADER",
    //   data: { title: "Hello World" },
    // },
  ],
  selectedId: "initial-1",
  isEditPanelOpen: false,

  // Actions
  toggleEditPanel: () =>
    set((state) => ({ isEditPanelOpen: !state.isEditPanelOpen })),

  closeEditPanel: () => set({ isEditPanelOpen: false }),

  addInstance: (blueprintId) =>
    set((state) => {
      const newId = crypto.randomUUID();
      const blueprint = BLUEPRINTS[blueprintId];
      return {
        selectedId: newId,
        instances: [
          ...state.instances,
          {
            id: newId,
            blueprintId,
            data: { ...(blueprint?.defaultData || {}) },
            isThin: blueprint?.isThin,
          },
        ],
      };
    }),

  updateData: (id: string, newData: Record<string, any>) =>
    set((state) => ({
      instances: state.instances.map((inst) =>
        inst.id === id ? { ...inst, data: { ...inst.data, ...newData } } : inst,
      ),
    })),
}));
