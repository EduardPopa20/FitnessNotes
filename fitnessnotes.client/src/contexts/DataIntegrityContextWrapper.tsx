import { useState, createContext, ReactNode } from 'react';

export const DataIntegrityContext = createContext({});

const DataIntegrityContextWrapper = ({ children }: { children: ReactNode }) => {

    const [isOldData, setIsOldData] = useState(false);

    return (
        <DataIntegrityContext.Provider value={{ isOldData, setIsOldData }}>
            {children}
        </DataIntegrityContext.Provider>
    );
}

export default DataIntegrityContextWrapper;