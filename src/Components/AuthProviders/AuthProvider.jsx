import { createContext } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const allValues={name:"f"}
    return (
    <AuthContext.Provider value={allValues}>
        {children}
    </AuthContext.Provider>
    )
};

export default AuthProvider;
