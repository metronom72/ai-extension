import { createContext, useContext, useState } from "react";

export interface SidebarState {
  isOpen: boolean;
}

export interface SidebarStateContextType extends SidebarState {
  toggleOpen: () => void;
}

export const defaultState: SidebarState = {
  isOpen: true,
};

export const SidebarStateContext = createContext<
  SidebarStateContextType | undefined
>(undefined);

export const SidebarStateProvider = ({
  children,
}: {
  children: JSX.Element;
}) => {
  const [state, setState] = useState<SidebarState>(defaultState);
  const toggleOpen = () => {
    setState((prevState) => ({ ...prevState, isOpen: !prevState.isOpen }));
  };

  return (
    <SidebarStateContext.Provider value={{ ...state, toggleOpen }}>
      {children}
    </SidebarStateContext.Provider>
  );
};

export const useSidebarState = (): SidebarStateContextType => {
  const context = useContext(SidebarStateContext);

  if (!context) {
    throw new Error(
      "useSidebarState must be used within a SidebarStateProvider",
    );
  }
  return context;
};

export default SidebarStateProvider;
