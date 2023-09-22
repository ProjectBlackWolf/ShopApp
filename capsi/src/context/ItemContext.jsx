import React, { useState, createContext } from 'react';
import SignUp from '../Components/SignUp';

export const ItemContext = createContext();
// export const AuthContext = createContext();

export const ItemContextProvider = (props) => {
    const [items, setItems] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);
    const [token, setToken] = useState(null);

    const addItems = (item) => {
        setItems([...items, item]);
    };
    return (
        <>
            <ItemContext.Provider value={{
                items,
                setItems,
                addItems,
                selectedItem,
                setSelectedItem,
            }}>
                {props.children}
            </ItemContext.Provider>
            {/* <AuthContext.Provider value={[token, setToken]}> */}
            {/* {token} ?
            : <SignUp token={token} setToken={setToken} /> */}
            {/* </AuthContext.Provider> */}
        </>
    )
}

export default ItemContextProvider