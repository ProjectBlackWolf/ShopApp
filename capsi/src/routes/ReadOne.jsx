import React from 'react';
// find a way to move the selected item onto this page.
import { useState, useEffect } from 'react';
import props from 'prop-types';
import { Link } from 'react-router-dom';
class ReadOne extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      item: null,
    };
  }
  async componentDidMount() {
    try {
      const response = await ItemFinder.get(`/${this.props.id}`);
      console.log(response.data);
      this.setState({
        item: response.data,
      });
    } catch (err) { }
  }
  render() {
    var item = this.props;
    const [tem, sI] = useState(null);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await ItemFinder.get(`/${item.id}`); 
          console.log(response.data);
          sI(response.data);
        } catch (err) { }
      };
      fetchData();
    }, []);
    const handleDelete = async (e) => {
      e.stopPropagation();
      try {
        await ItemFinder.delete(`/${item.id}`);
      } catch (err) {
        console.log(err);
      }
    };

    const handleUpdate = (e, item) => {
      e.stopPropagation();
      <Link to={(`/update/${item.id}`)}></Link>;
    };
    return (
      <>
        <tr className='card'>
          <td><h5 className="card-title">{item.name}</h5></td>
          <td><h6 className="card-subtitle mb-2 text-muted">{item.price}</h6></td>
          <td><img src={`${item.image}`}></img></td>
          <td><p className="card-text">{item.description}</p></td>
          <th>In-Stock:</th>
          <td><p>{item.quantity}</p></td>
          <td><p>{item.sku}</p></td>
          <td><button onClick={(e) => handleUpdate(e, item)}>Update</button></td>
          <td><button onClick={(e) => handleDelete(e)}>Delete</button></td>
        </tr>
      </>
    )
  }

}

export default ReadOne