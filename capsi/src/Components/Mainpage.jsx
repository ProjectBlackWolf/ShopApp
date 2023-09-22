import '../styles/App.css';
import React, { useEffect, useContext } from 'react';
import { ItemContext } from '../context/ItemContext';
import ItemFinder from '../api/ItemFinder';
import { Link, NavLink } from 'react-router-dom';
import ReadOne from '../routes/ReadOne';
// use the class method to fetch data

const Mainpage = (props) => {
  const { items, setItems } = useContext(ItemContext);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await ItemFinder.get('/getAll');
        console.log(response.data);
        setItems(response.data);
      } catch (err) { }
    };
    fetchData();
  }, []);
  const handleDelete = async (e, id) => {
    e.stopPropagation();
    try {
      await ItemFinder.delete(`/${id}`);
      setItems(
        items.filter((Item) => {
          return Item.id !== id;
        })
      );
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdate = async(e, id) => {
    e.stopPropagation();
    <Link to={(`/update/${id}`)} />
  };

  const handleItemSelect = async (e, id) => {
    e.stopPropagation();
    try {
      // setItems(
      //   items.filter((Item) => {
      //     Item.id !== id;
      //   })
      // );
      await ItemFinder.request(`/${id}`);
      <Link to={`/${id}`} />
    } catch (err) {
      console.log(err);
    }//
  };
  let im = [];
  im = items;
  return (
    <>
      {
        im.map((item) => {
          return (
            <div className='container' key={item.id}>
              <ol className='card'>
                <h5 className="card-title">{item.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{item.price}</h6>
                <img src={`${item.image}`}></img>
                <button onClick={(e) => handleItemSelect(e, item.id)}>Details</button>
                <button onClick={(e) => handleUpdate(e, item.id)}>Update</button>
                <button onClick={(e) => handleDelete(e, item.id)}>Delete</button>
              </ol>
            </div>
          )
        })
      }
    </>
  )
}

export default Mainpage