import { create } from "zustand";
import { FormulaStateInterface } from "../ts/interfaces/formulaState.interface.ts";

const formulaStore = create<FormulaStateInterface>((set) => ({
    items: [],
    addFormula: (formula) => set((state) => ({ items: [...state.items, formula] })),
}));

export default formulaStore;


