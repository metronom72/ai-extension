import { useContext } from "react";
import {
  SidebarStateContext,
  SidebarStateContextType,
} from "./SidebarStateProvider";

const useSidebarState = (): SidebarStateContextType => {
  const context = useContext(SidebarStateContext);

  if (!context) {
    throw new Error(
      "useSidebarState must be used within a SidebarStateProvider",
    );
  }

  return context;
};

export default useSidebarState;
