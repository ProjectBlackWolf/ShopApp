import React, { createContext, useState } from 'react';
//// user context is Auth context
export const UserContext = createContext({});

const UserContextProvider = (props) => {
    const { user, setUser } = useState({});

    const localStorageUser = localStorage.getItem('user');
    if (localStorageUser) {
        setUser(JSON.parse(localStorageUser));
    }

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {props.children}
            {user && localStorage.setItem('user', JSON.stringify(user))}
        </UserContext.Provider>
    );
};

export default UserContextProvider;
