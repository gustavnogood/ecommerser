import React, { createContext, useState, useContext } from 'react';

const PopupContext = createContext();

export function PopupProvider({ children }) {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <PopupContext.Provider value={{ showPopup, setShowPopup }}>
      {children}
    </PopupContext.Provider>
  );
}

export function usePopup() {
  return useContext(PopupContext);
}