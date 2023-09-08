import React, { useState, createContext } from 'react';

export const ItemContext = createContext();

export const ItemContextProvider = props => {
    const [items, setItems] = useState([]);
    return (
            <>
                <ItemContext.Provider value={{items: items, setItems: setItems}}>
                    {props.children}
                </ItemContext.Provider>
            </>
        )
    }

export default ItemContextProvider