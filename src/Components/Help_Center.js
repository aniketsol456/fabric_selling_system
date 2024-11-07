import React, { useState } from 'react';
import './Help_Center.css';

const Help_Center = () => {
  const [formData, setFormData] = useState({
    email: '',
    description: '',
    topic: 'Other'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <section className='help_center'>
      <div className='form_container'>
        <h1>Submit a request</h1>
        <form onSubmit={submitForm}>
          <div className='form_group'>
            <label htmlFor='email'>Your email address *</label>
            <input
              type='email'
              name='email'
              id='email'
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className='form_group'>
            <label htmlFor='description'>Description *</label>
            <div className='textarea_container'>
              <div className='toolbar'>
                <button type='button'><b>B</b></button>
                <button type='button'><i>I</i></button>
                <button type='button'>•</button>
                <button type='button'>🔗</button>
                <button type='button'>🖼</button>
                <button type='button'>"</button>
              </div>
              <textarea
                name='description'
                id='description'
                value={formData.description}
                onChange={handleChange}
                placeholder='Please enter the details of your request. A member of our Support team will respond as soon as possible.'
                required
              ></textarea>
            </div>
          </div>

          <div className='form_group'>
            <label htmlFor='topic'>What are you writing to us about? (optional)</label>
            <select
              name='topic'
              id='topic'
              value={formData.topic}
              onChange={handleChange}
            >
              <option value='Other'>Other</option>
              <option value='Order Entered At FJS Site'>Order Entered At FJS Site</option>
              <option value='Product Question'>Product Question</option>
              <option value='Shipping Issue'>Shipping Issue</option>
              <option value='Technical Issue'>Technical Issue</option>
              <option value='Wholesale Orders'>Wholesale Orders</option>
            </select>
          </div>

          <button type='submit' className='submit_button'>Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Help_Center;
