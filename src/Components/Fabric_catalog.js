import React, { useState, useEffect } from 'react';
import './Fabric_catalog.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import fabricimage from '../assets/Images/cotton5.jpg';

const FabricCatalog = () => {
  const navigate = useNavigate();
  const [fabricList, setFabricList] = useState([]);
  const [cart, setCart] = useState([]);
  const [userId, setUserId] = useState('');;
  const [filters, setFilters] = useState({
    color: '',
    type: '',
    weight: '',
    content: '',
    width: '',
    design: '',
    onSale: false,
  });

  const getCookie = (name) => {
    const matches = document.cookie.match(new RegExp(`(?:^|; )${name.replace(/([.$?*|{}()[]\/+^])/g, '\\$1')}=([^;]*)`));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  };

  const fetchFabrics = async () => {
    const token = getCookie('usercookie');
    try {
      const response = await axios.get('http://localhost:8009/fabric/all', {
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      });
      if (response.status === 200) {
        setFabricList(response.data.fabrics);
      }
    } catch (error) {
      console.error('Error fetching fabric data:', error);
    }
  };

  const fetchCart = async () => {
    const token = getCookie('usercookie');
    const userId = getCookie('userid'); 
    try {
      const response = await axios.get(`http://localhost:8009/cart/${userId}`, {
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      });
      if (response.status === 200) {
        setCart(response.data.cart.items);
      }
    } catch (error) {
      console.error('Error fetching cart data:', error);
    }
  };

  const handleAddToCart = async (fabric) => {
    const token = getCookie('usercookie');
    console.log(fabric);
    if (!token) {
      alert('You need to login first!');
      navigate('/login');
      return;
    }
    try {
      const response = await axios.post(
        'http://localhost:8009/cart/add',
        {
          userId,
          fabricId: fabric._id,
          quantity: 1,
          price: fabric.price,
          discount: fabric.discount || 0,
        },
        {
          headers: { "Authorization": `Bearer ${token}` },
        }
      );
      if (response.status === 200 || response.status === 201) {
        alert(`${fabric.name} added to cart!`);
        fetchCart(); // Refresh cart data
      }
    } catch (error) {
      console.error('Error adding item to cart:', error);
    }
  };

  const handleUpdateQuantity = async (fabric, newQuantity) => {
    const token = getCookie('usercookie');
    const userId = getCookie('userid');
  
    if (newQuantity < 1) {
      // Remove item from cart if quantity is less than 1
      handleRemoveFromCart(fabric);
      return;
    }
  
    try {
      const response = await axios.patch(
        `http://localhost:8009/cart/update/${userId}/${fabric._id}`,
        { quantity: newQuantity },
        {
          headers: { "Authorization": `Bearer ${token}` },
        }
      );
      if (response.status === 200) {
        fetchCart();
      }
    } catch (error) {
      console.error('Error updating item quantity:', error);
    }
  };
  

  const handleRemoveFromCart = async (fabric) => {
    const token = getCookie('usercookie');
    const userId = getCookie('userid');
    try {
      const response = await axios.delete(
        `http://localhost:8009/cart/remove/${userId}/${fabric._id}`,
        {
          headers: { "Authorization": `Bearer ${token}` },
        }
      );
      if (response.status === 200) {
        fetchCart(); // Refresh cart data
      }
    } catch (error) {
      console.error('Error removing item from cart:', error);
    }
  };

  useEffect(() => {
    const userIdFromCookie = getCookie('userid'); 
    setUserId(userIdFromCookie);  
  
    fetchFabrics();
    fetchCart();
  }, [])

  const isInCart = (fabricId) => cart.some((item) => item.fabricId._id === fabricId);
  
  const getQuantity = (fabricId) => {
    const item = cart.find((item) => item.fabricId._id === fabricId);
    return item ? item.quantity : 0;
  };

  const filteredData = fabricList.filter((fabric) => {
    const noFiltersSet = Object.values(filters).every((val) => val === '' || val === false);

    if (noFiltersSet) {
      return true;
    }

    return (
      (!filters.color || fabric.color === filters.color) &&
      (!filters.type || fabric.type === filters.type) &&
      (!filters.weight || fabric.weight === filters.weight) &&
      (!filters.content || fabric.content === filters.content) &&
      (!filters.width || fabric.width === filters.width) &&
      (!filters.design || fabric.design === filters.design) &&
      (!filters.onSale || fabric.onSale === filters.onSale)
    );
  });

  return (
    <div className="catalog-page">
      <aside className="sidebar">
        <h3>Filters</h3>
        <div className="filter-group">
          <label>Color</label>
          <select name="color" value={filters.color} onChange={(e) => {
            const { name, value, type, checked } = e.target;
            setFilters((prevFilters) => ({
              ...prevFilters,
              [name]: type === 'checkbox' ? checked : value,
            }));
          }}>
            <option value="">All</option>
            {filters.availableColors?.map((color, index) => (
              <option key={index} value={color}>
                {color}
              </option>
            ))}
          </select>
        </div>
        <div className="filter-group">
          <label>Type</label>
          <select name="type" value={filters.type} onChange={(e) => {
            const { name, value, type, checked } = e.target;
            setFilters((prevFilters) => ({
              ...prevFilters,
              [name]: type === 'checkbox' ? checked : value,
            }));
          }}>
            <option value="">All</option>
            {filters.availableTypes?.map((type, index) => (
              <option key={index} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <div className="filter-group">
          <label>Weight</label>
          <select name="weight" value={filters.weight} onChange={(e) => {
            const { name, value, type, checked } = e.target;
            setFilters((prevFilters) => ({
              ...prevFilters,
              [name]: type === 'checkbox' ? checked : value,
            }));
          }}>
            <option value="">All</option>
            {filters.availableWeights?.map((weight, index) => (
              <option key={index} value={weight}>
                {weight}
              </option>
            ))}
          </select>
        </div>
        <div className="filter-group">
          <label>Fabric Content</label>
          <select name="content" value={filters.content} onChange={(e) => {
            const { name, value, type, checked } = e.target;
            setFilters((prevFilters) => ({
              ...prevFilters,
              [name]: type === 'checkbox' ? checked : value,
            }));
          }}>
            <option value="">All</option>
            {filters.availableContents?.map((content, index) => (
              <option key={index} value={content}>
                {content}
              </option>
            ))}
          </select>
        </div>
        <div className="filter-group">
          <label>Width</label>
          <select name="width" value={filters.width} onChange={(e) => {
            const { name, value, type, checked } = e.target;
            setFilters((prevFilters) => ({
              ...prevFilters,
              [name]: type === 'checkbox' ? checked : value,
            }));
          }}>
            <option value="">All</option>
            {filters.availableWidths?.map((width, index) => (
              <option key={index} value={width}>
                {width}
              </option>
            ))}
          </select>
        </div>
        <div className="filter-group">
          <label>Design</label>
          <select name="design" value={filters.design} onChange={(e) => {
            const { name, value, type, checked } = e.target;
            setFilters((prevFilters) => ({
              ...prevFilters,
              [name]: type === 'checkbox' ? checked : value,
            }));
          }}>
            <option value="">All</option>
            {filters.availableDesigns?.map((design, index) => (
              <option key={index} value={design}>
                {design}
              </option>
            ))}
          </select>
        </div>
        <div className="filter-group">
          <label>
            <input
              type="checkbox"
              name="onSale"
              checked={filters.onSale}
              onChange={(e) => {
                const { name, value, type, checked } = e.target;
                setFilters((prevFilters) => ({
                  ...prevFilters,
                  [name]: type === 'checkbox' ? checked : value,
                }));
              }}
            />
            On Sale
          </label>
        </div>
      </aside>
      <main className="catalog-container">
        <h2 className="catalog-title">All Fabric</h2>
        <div className="fabric-grid">
          {filteredData.map((fabric) => (
            <div key={fabric._id} className="fabric-card">
              {/* <img src={fabric.image} alt={fabric.name} className="fabric-image" /> */}
              <img src={fabricimage} alt={fabric.name} className="fabric-image" />
              <div className="fabric-info">
                <h3 className="fabric-name">{fabric.name}</h3>
                <div className="fabric-price">
                  {fabric.discount ? (
                    <>
                      <span className="discounted-price">
                        ₹{fabric.price - (fabric.price * fabric.discount) / 100}
                      </span>
                      <span className="original-price">₹{fabric.price}</span>
                    </>
                  ) : (
                    <span className="original-price">₹{fabric.price}</span>
                  )}
                </div>

                {isInCart(fabric._id) ? (
                  <div className="quantity-controls">
                    <button onClick={() => handleUpdateQuantity(fabric, getQuantity(fabric._id) - 1)}>-</button>
                    <span>{getQuantity(fabric._id)}</span>
                    <button onClick={() => handleUpdateQuantity(fabric, getQuantity(fabric._id) + 1)}>+</button>
                  </div>
                ) : (
                  <button
                    className="add-to-cart-button"
                    onClick={() => handleAddToCart(fabric)}
                  >
                    Add to Cart
                  </button>
                )}
              </div>
            </div>
          ))}
          {filteredData.length === 0 && <p>No fabrics match your filters.</p>}
        </div>
      </main>
    </div>
  );
};

export default FabricCatalog;
