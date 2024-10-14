import { createContext } from "react";

export interface LLMContextProps {
  llmModel: any;
  setLlmModel: (model: any) => void;
}

export const LLMContext = createContext<LLMContextProps | undefined>(undefined);
