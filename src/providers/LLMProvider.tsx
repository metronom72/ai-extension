import { LLMContext } from "context/LLMContext";
import { ReactNode, useState } from "react";

export const LLMProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [llmModel, setLlmModel] = useState<any>("llama");

  return (
    <LLMContext.Provider value={{ llmModel, setLlmModel }}>
      {children}
    </LLMContext.Provider>
  );
};
