import { create } from "zustand";
import { BLUEPRINTS } from "./blueprints";

interface Instance {
    id: string;
    blueprintId: string;
    data: Record<string, any>;
}

interface EmailStore {
    instances: Instance[];
    selectedId: string;
    addInstance: (blueprintId: string) => void;
    updateData: (id: string, newData: Record<string, any>) => void;
}

export const useEmailStore = create<EmailStore>((set) => ({
    // The 'Document': An ordered list of instances
    instances: [{ id: "initial-1", blueprintId: "HEADER", data: { title: "Hello World" } }],
    selectedId: "initial-1",

    // Actions
    addInstance: (blueprintId) =>
        set((state) => {
            const newId = crypto.randomUUID();
            return {
                selectedId: newId,
                instances: [
                    ...state.instances,
                    {
                        id: newId,
                        blueprintId,
                        data: { ...(BLUEPRINTS[blueprintId]?.defaultData || {}) },
                    },
                ],
            };
        }),

    updateData: (id: string, newData: Record<string, any>) =>
        set((state) => ({
            instances: state.instances.map((inst) => (inst.id === id ? { ...inst, data: { ...inst.data, ...newData } } : inst)),
        })),
}));
