import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ClassContextProps {
  cssClass: string;
  updateClass: (newClass: string) => void;
}

export const ClassContext = createContext<ClassContextProps | undefined>(undefined);

export const useClass = () => {
  const context = useContext(ClassContext);
  if (!context) {
    throw new Error('useClass must be used within a ClassProvider');
  }
  return context;
};

export const ClassProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cssClass, setCssClass] = useState<string>('linear-background');

  const updateClass = (newClass: string) => {
    setCssClass(newClass);
  };

  return (
    <ClassContext.Provider value={{ cssClass, updateClass }}>
      {children}
    </ClassContext.Provider>
  );
};
