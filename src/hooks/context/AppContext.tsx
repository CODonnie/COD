import { createContext, useState, type ReactNode } from "react";


type AppContextType = {
    state: string;
    setState: (value: string) => void;
}

export const AppContext = createContext<AppContextType | null>(null);

export const AppProvider = ({ children }: {children: ReactNode}) => {

    const [state, setState] = useState("welcome");
    
    const value = {
        state,
        setState
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}