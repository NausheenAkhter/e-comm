import { createContext, useContext, useReducer } from 'react';
const AppStateContext = createContext();

export const AppStateProvider = ({ reducer, initialState, children }) => {
  return (
    <AppStateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </AppStateContext.Provider>
  );
};

export default () => useContext(AppStateContext);
