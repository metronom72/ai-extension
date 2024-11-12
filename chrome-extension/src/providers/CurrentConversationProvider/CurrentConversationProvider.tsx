import { createContext, useCallback, useState } from "react";

export interface CurrentConversationState {
  conversationId: string | null;
}

export interface CurrentConversationContextType
  extends CurrentConversationState {
  setConversationId: (conversationId: string) => void;
}

export const defaultState: CurrentConversationState = {
  conversationId: null,
};

export const CurrentConversationContext = createContext<
  CurrentConversationContextType | undefined
>(undefined);

export const CurrentConversationProvider = ({
  children,
}: {
  children: JSX.Element;
}) => {
  const [state, setState] = useState<CurrentConversationState>(defaultState);
  const setConversationId = useCallback(
    (conversationId: string | null) => {
      setState((prevState) => ({ ...prevState, conversationId }));
    },
    [state, setState],
  );

  return (
    <CurrentConversationContext.Provider
      value={{ ...state, setConversationId }}
    >
      {children}
    </CurrentConversationContext.Provider>
  );
};

export default CurrentConversationProvider;
