import React, { createContext, useContext } from 'react';


export const AuthContext = createContext();

export function useAuth(flag) {
    const context = useContext(AuthContext);
    // AuthContext(token);
    if (flag) {
        context.set(flag);
    }

    return useContext(AuthContext);
}