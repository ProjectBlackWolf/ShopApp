import '../styles/App.css';
import React, { useEffect, useContext } from 'react';
import { ItemContext } from '../context/ItemContext';
import ItemFinder from '../api/ItemFinder';
// use the class method to fetch data
const Mainpage = (props) => {
  const { items, setItems } = useContext(ItemContext);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await ItemFinder.get("/");
        console.log(response.data);
        setItems(response.data);
      } catch (err) { }
    };
    fetchData();
  }, []);
  const handleDelete = async (e, id) => {
    e.stopPropagation();
    try {
      const response = await ItemFinder.delete(`/${id}`);
      setItems(
        items.filter((Item) => {
          return Item.id !== id;
        })
      );
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdate = (e, id) => {
    e.stopPropagation();
    //return (`/${id}/update`) ;
  };

  const handleItemSelect = (id) => {
    //return (<Link to={(`/${id}`)}></Link>);
  };
  let im = [];
  im = items;
  return (
    <>
      <div>
        {
          im.map((item) => {
            return (
              <div key={item.id}>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{item.price}</h6>
                    <img src={`${item.image}`}></img>
                    <p className="card-text">{item.description}</p>
                    {/* <Link to={`/invItem/${item.id}/update`}/> */}
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default Mainpage