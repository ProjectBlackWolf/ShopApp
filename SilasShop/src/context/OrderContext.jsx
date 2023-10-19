import React, { createContext, useState } from 'react';

export const OrderContext = createContext();

const OrderContextProvider = ({ children }) => {
    const [orders, setOrders] = useState([]);

    const addOrder = (newOrder) => {
        setOrders([...orders, newOrder]);
    };

    const removeOrder = (orderId) => {
        setOrders(orders.filter((order) => order.id !== orderId));
    };

    return (
        <OrderContext.Provider value={{ orders, addOrder, removeOrder }}>
            {children}
        </OrderContext.Provider>
    );
};

export default OrderContextProvider;
