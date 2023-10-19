import React, { useState, useEffect, useContext } from 'react';
import ItemFinder from '../api/ItemFinder';
import { ItemContext } from '../context/ItemContext';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/App.css';

const Update = () => {
    const { id } = useParams();
    const [message, setMessage] = useState('');
    const [formState, setFormState] = useState({
        cid: id,
        name: '',
        price: '',
        description: '',
        image: '',
        quantity: 0,
        category_id: 0,
        sku: ''
    });
    // this does return needed data
    const dataRetrieval = async () => {
        const {
            data: { data }
        } = await ItemFinder.get(`/${id}/update`, formState)
        if (item) {
            setSelectedItem(item);
            setFormState({
                id, name, price,
                description, image,
                quantity, category_id, sku
            });
        }
        const { id, name, price,
            description, image,
            quantity, category_id, sku } = item
        const { item } = data
        setMessage(item);
    }

    const { selectedItem, setSelectedItem } = useContext(ItemContext);

    // this shouldn't return anything except 
    // cleanup
    useEffect(() => {
        //const sndUpdate = await useContext(ItemContext)
        try {
            dataRetrieval();
        } catch (err) {
            console.error(err)
        }
    }, []);

    const { cid, name, price, description, image, quantity, category_id, sku } = formState;
    const propsForFormDisplay = { cid, price, description, image, quantity, category_id, sku };

    return (
        <>
            <div>
                {(selectedItem) ? (propsForFormDisplay) : (message)}
            </div>
        </>
    )
}

export default Update