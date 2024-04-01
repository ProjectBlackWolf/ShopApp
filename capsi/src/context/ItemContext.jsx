import React, { useState, createContext } from 'react';

export const ItemContext = createContext();

export const ItemContextProvider = (props) => {
    const [items, setItems] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);
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
        </>
    )
}

export default ItemContextProvider