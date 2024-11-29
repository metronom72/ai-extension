import {
  CurrentConversationContext,
  CurrentConversationContextType,
} from "./CurrentConversationProvider";
import { useContext } from "react";

const useCurrentConversation = (): CurrentConversationContextType => {
  const context = useContext(CurrentConversationContext);

  if (!context) {
    throw new Error(
      "useCurrentConversation must be used inside a CurrentConversationProvider",
    );
  }

  return context;
};

export default useCurrentConversation;
