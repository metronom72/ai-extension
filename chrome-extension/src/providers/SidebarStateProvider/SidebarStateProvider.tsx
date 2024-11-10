import { createContext, useCallback, useEffect, useState } from "react";
import { setOpenedSidebar, unsetOpenedSidebar } from "../../content";

export interface SidebarState {
  isOpen: boolean;
}

export interface SidebarStateContextType extends SidebarState {
  toggleOpen: () => void;
}

export const defaultState: SidebarState = {
  isOpen: false,
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

  useEffect(() => {
    chrome.storage.local.get(["isOpen"], (result) => {
      if (result.isOpen !== undefined) {
        setState((prevState) => ({ ...prevState, isOpen: result.isOpen }));
      }
    });
  }, []);

  const toggleOpen = useCallback(() => {
    const newIsOpen = !state.isOpen;
    setState((prevState) => ({ ...prevState, isOpen: newIsOpen }));

    chrome.storage.local.set({ isOpen: newIsOpen }, () => {
      if (newIsOpen) {
        setOpenedSidebar();
      } else {
        unsetOpenedSidebar();
      }
    });
  }, [state, setState]);

  return (
    <SidebarStateContext.Provider value={{ ...state, toggleOpen }}>
      {children}
    </SidebarStateContext.Provider>
  );
};

export default SidebarStateProvider;
