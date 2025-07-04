import React, { useState, createContext } from 'react';

export const AppContext = createContext();

export function AppProvider({ children }) {
    const [idea, setIdea] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [result, setResult] = useState(null);

  return (
    <AppContext.Provider value={{
        idea, setIdea,
        loading, setLoading,
        error, setError,
        result, setResult,
    }}>
      {children}
    </AppContext.Provider>
  )
};
