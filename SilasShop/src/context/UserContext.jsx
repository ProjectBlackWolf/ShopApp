import React, { createContext, useState } from 'react';
//// user context is Auth context
export const UserContext = createContext({});

const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState([]);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;
