import { ReactElement } from "react"

export interface FormulaItems {
    key: string;
    label: string;
    children: ReactElement;
}

export interface FormulaStateInterface {
    items: FormulaItems[];
    addFormula: (formula: FormulaItems) => void;
}
