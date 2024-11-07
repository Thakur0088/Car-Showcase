import React, { useState } from 'react';
import './Main.css';
import mainImage from '../Images/main.png';
import { Link } from 'react-router-dom'; // Import Link

const Main = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoginForm, setIsLoginForm] = useState(false);
  const [reviews, setReviews] = useState([
    {
      name: 'John Doe',
      message: 'The sleek design and powerful engine make this car a dream to drive. It\'s everything I wanted in a vehicle!',
      rating: '5',
    },
    {
      name: 'Jane Smith',
      message: 'The interior is pure luxury. The seats are incredibly comfortable, and the tech features are impressive.',
      rating: '4',
    },
    {
      name: 'Michael Lee',
      message: 'This car offers outstanding value. It combines performance with efficiency, and the after-sales support was excellent.',
      rating: '5',
    },
    {
      name: 'Sarah Johnson',
      message: 'I am blown away by the handling and responsiveness of this vehicle. It feels like I\'m driving a sports car every day.',
      rating: '5',
    },
    {
      name: 'Mark Thompson',
      message: 'The advanced safety features give me peace of mind on the road, especially with my family. A solid choice!',
      rating: '4',
    },
    {
      name: 'Emily Davis',
      message: 'I appreciate the fuel efficiency and smooth ride this car offers. It\'s a perfect blend of style and practicality.',
      rating: '5',
    },
  ]);

  const [reviewText, setReviewText] = useState('');
  const [reviewerName, setReviewerName] = useState('');
  const [rating, setRating] = useState('5');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  // Handle functions
  const handleSignup = (event) => {
    event.preventDefault();
    // Handle signup logic
    localStorage.setItem("user", JSON.stringify({ username, email, password }));
    alert("Account created successfully! You can now log in.");
    setIsLoginForm(true); // Switch to login form after successful signup
  };

  const handleLogin = (event) => {
    event.preventDefault();
    // Handle login logic
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser && storedUser.email === loginEmail && storedUser.password === loginPassword) {
      alert(`Login successful! Welcome back, ${storedUser.username}!`);
      closeSignupModal(); // Close the modal after successful login
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  const openSignupModal = (e) => {
    e.preventDefault();  // Prevent the default anchor behavior
    setIsModalOpen(true);
  };

  const closeSignupModal = () => setIsModalOpen(false);

  const submitReview = () => {
    if (reviewerName && reviewText && rating) {
      const newReview = {
        name: reviewerName,
        message: reviewText,
        rating,
      };
      setReviews([...reviews, newReview]);
      setReviewText('');
      setReviewerName('');
      setRating('5');
    }
  };

  return (
    <div>
      <header className="header">
        <a href="#" className="logo">Gear Craze</a>
        <nav className="navbar">
          <a href="#home"><b>Home</b></a>
          <a href="#" className="signup-link" onClick={openSignupModal}><b>Sign Up</b></a>  {/* Fixed: Added e.preventDefault() */}
          <a href="#reviews"><b>Review</b></a>
          <a href="/"><b>Test Drive</b></a>
          <a href="mailto:your-memep1243@gmail.com"><b>Contact Us</b></a>
        </nav>
      </header>

      <section className="home" id="home">
        <div className="home-content">
          <h1>Car Showcase</h1>
          <h3>Redefined!</h3>
          <p>Experience the thrill of driving with our latest collection of cars,<br></br> featuring sleek designs and unparalleled performance.<br></br> From sporty coupes to luxurious sedans, our showcase<br></br> has something for every car enthusiast.</p>
          <Link to="/explore" className="btn">Explore Cars</Link> 
          <div className="social-media">
            <a href="#"><i className='bx bxl-twitter'></i></a>
            <a href="#"><i className='bx bxl-facebook'></i></a>
            <a href="#"><i className='bx bxl-instagram-alt'></i></a>
          </div>
        </div>

        <div className="home-img">
          <div className="rhombus">
            <img src={mainImage} alt="Car Showcase" />
          </div>
        </div>
        <div className="rhombus2"></div>
      </section>

      <section className="reviews" id="reviews">
        <h2>Customer Reviews</h2>
        <div className="reviews-container">
          {reviews.map((review, index) => (
            <div key={index} className="review-card">
              <p>"{review.message}"</p>
              <div className="stars">
                {[...Array(Number(review.rating))].map((_, idx) => (
                  <i key={idx} className='bx bxs-star'></i>
                ))}
              </div>
              <span>- {review.name}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="submit-review" id="submitReview">
        <h2>Submit Your Review</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="reviewText">Your Review:</label>
          <textarea
            id="reviewText"
            name="reviewText"
            rows="4"
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            required
          />
          <label htmlFor="reviewerName">Your Name:</label>
          <input
            type="text"
            id="reviewerName"
            name="reviewerName"
            value={reviewerName}
            onChange={(e) => setReviewerName(e.target.value)}
            required
          />
          <label htmlFor="rating">Rating:</label>
          <select
            id="rating"
            name="rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            required
          >
            <option value="5">5 Stars</option>
            <option value="4">4 Stars</option>
            <option value="3">3 Stars</option>
            <option value="2">2 Stars</option>
            <option value="1">1 Star</option>
          </select>
          <button type="button" onClick={submitReview}>Submit Review</button>
        </form>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2024 Gear Craze. All Rights Reserved.</p>
          <div className="social-media">
            <a href="#"><i className='bx bxl-twitter'></i></a>
            <a href="#"><i className='bx bxl-facebook'></i></a>
            <a href="#"><i className='bx bxl-instagram-alt'></i></a>
          </div>
        </div>
      </footer>

      {isModalOpen && (
        <div id="signupModal" className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeSignupModal}>&times;</span>
            <div id="modalForm">
              {!isLoginForm ? (
                <form onSubmit={handleSignup}>
                  <h2>Sign Up</h2>
                  <label htmlFor="username">Username:</label>
                  <input type="text" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                  <label htmlFor="email">Email:</label>
                  <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                  <label htmlFor="password">Password:</label>
                  <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                  <button type="submit">Sign Up</button>
                  <p>Already have an account? <a href="#" onClick={() => setIsLoginForm(true)}>Log In</a></p>
                </form>
              ) : (
                <form onSubmit={handleLogin}>
                  <h2>Log In</h2>
                  <label htmlFor="loginEmail">Email:</label>
                  <input type="email" id="loginEmail" name="loginEmail" value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} required />
                  <label htmlFor="loginPassword">Password:</label>
                  <input type="password" id="loginPassword" name="loginPassword" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} required />
                  <button type="submit">Log In</button>
                  <p>Don't have an account? <a href="#" onClick={() => setIsLoginForm(false)}>Sign Up</a></p>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Main;
