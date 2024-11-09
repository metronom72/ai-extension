import { createContext, useContext, useState } from "react";

export interface GlobalState {
  // position: { x: number; y: number };
  isOpen: boolean;
}

export interface GlobalStateContextType extends GlobalState {
  // setPosition: (position: { x: number; y: number }) => void;
  toggleOpen: () => void;
}

export const defaultState: GlobalState = {
  // position: { x: 0, y: 0 },
  isOpen: true,
};

export const GlobalStateContext = createContext<
  GlobalStateContextType | undefined
>(undefined);

export const GlobalStateProvider = ({
  children,
}: {
  children: JSX.Element;
}) => {
  const [state, setState] = useState<GlobalState>(defaultState);
  // const setPosition = (position: { x: number; y: number }) => {
  //   setState((prevState) => ({ ...prevState, position }));
  // };
  const toggleOpen = () => {
    setState((prevState) => ({ ...prevState, isOpen: !prevState.isOpen }));
  };

  return (
    <GlobalStateContext.Provider
      value={{ ...state, /* setPosition, */ toggleOpen }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = (): GlobalStateContextType => {
  const context = useContext(GlobalStateContext);
  if (!context) {
    throw new Error("useGlobalState must be used within a GlobalStateProvider");
  }
  return context;
};

export default GlobalStateProvider;
