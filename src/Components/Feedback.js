import React, { useState } from 'react';
import './Feedback.css';

const Feedback = () => {
  const [feedback, setFeedback] = useState({
    email: '',
    rating: '',
    description: ''
  });

  const handleChange = (e) => {
    setFeedback({ ...feedback, [e.target.name]: e.target.value });
  };

  const submitFeedback = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log(feedback);
  };

  return (
    <section>
      <div className='feedback-container'>
        <div className='feedback-header'>
          <h1>We Value Your Feedback</h1>
          <p>Please provide your feedback below.</p>
        </div>
        <form onSubmit={submitFeedback} className='feedback-form'>
          <div className='feedback-input'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              name='email'
              id='email'
              value={feedback.email}
              onChange={handleChange}
              placeholder='Enter your email address'
            />
          </div>
          <div className='feedback-input'>
            <label htmlFor='rating'>Rating</label>
            <input
              type='number'
              name='rating'
              id='rating'
              value={feedback.rating}
              onChange={handleChange}
              placeholder='Rate us from 1 to 5'
              min='1'
              max='5'
            />
          </div>
          <div className='feedback-input'>
            <label htmlFor='description'>Description</label>
            <textarea
              name='description'
              id='description'
              value={feedback.description}
              onChange={handleChange}
              placeholder='Write your feedback here'
            ></textarea>
          </div>
          <button type='submit' className='feedback-submit-btn'>Submit Feedback</button>
        </form>
      </div>
    </section>
  );
};

export default Feedback;
