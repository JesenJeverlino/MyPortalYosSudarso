import React, { createContext, useContext, useState } from 'react';

type SelectionContextType = {
  selectionEnabled: boolean;
  setSelectionEnabled: (value: boolean) => void;
};

const SelectionContext = createContext<SelectionContextType | undefined>(undefined);

export const SelectionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectionEnabled, setSelectionEnabled] = useState(true);

  return (
    <SelectionContext.Provider value={{ selectionEnabled, setSelectionEnabled }}>
      {children}
    </SelectionContext.Provider>
  );
};

export const useSelection = () => {
  const context = useContext(SelectionContext);
  if (!context) throw new Error("useSelection must be used within a SelectionProvider");
  return context;
};
