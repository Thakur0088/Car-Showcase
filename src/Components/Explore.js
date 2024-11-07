import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Ferrari from '../Images/Ferrari.png';
import Lambo from '../Images/Lambo.png';
import Porsche from '../Images/Porche.png';
import Chevrolet from '../Images/Chevrolet.png';
import Jaguar from '../Images/Jaguar F-Type.png';
import RollsRoyce from '../Images/Rolls Royce.png';
import BMW from '../Images/BMW.png';
import Merc from '../Images/Merc.png';
import Bentley from '../Images/Bentley.png';
import RangeRover from '../Images/RangeRover.png';
import Tesla from '../Images/Tesla.png';
import Rivian from '../Images/Rivian.webp';
import XUV from '../Images/XUV.png';
import Comet from '../Images/Comet.png';
import Kona from '../Images/Kona.png';
import UrbanCruiser from '../Images/Urban-Cruiser.png';
import JeepWrangler from '../Images/Jeep-Wrangler.png';
import Thar from '../Images/Thar.png';
import Defender from '../Images/Defender.png';
import Fortuner from '../Images/Fortuner.png';
import './Explore.css';


function Explore() {
    const [currentIndex, setCurrentIndex] = useState({
        sports: 0,
        classy: 0,
        electric: 0,
        off: 0,
    });

    const slidesPerCategory = {
        sports: 5,
        classy: 5,
        electric: 5,
        off: 5
    };

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [menuOpen, setMenuOpen] = useState(false); // Track menu state

    useEffect(() => {
        const handleResize = () => setScreenWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen); // Toggle the menu state
    };
    
    const calculateOffset = (category) => {
        let offsetPercentage, maxIndex;
        if (screenWidth <= 480) {
            offsetPercentage = -100; // One car visible
            maxIndex = slidesPerCategory[category] - 1;
        } else if (screenWidth <= 768) {
            offsetPercentage = -50;  // Two cars visible
            maxIndex = slidesPerCategory[category] - 2;
        } else {
            offsetPercentage = -33.33; // Three cars visible
            maxIndex = slidesPerCategory[category] - 3;
        }
        return { offsetPercentage, maxIndex };
    };

    const nextSlide = (category) => {
        const { offsetPercentage, maxIndex } = calculateOffset(category);
        setCurrentIndex((prevIndex) => {
            const newIndex = (prevIndex[category] + 1) % (maxIndex + 1);
            return { ...prevIndex, [category]: newIndex };
        });
    };

    const prevSlide = (category) => {
        const { offsetPercentage, maxIndex } = calculateOffset(category);
        setCurrentIndex((prevIndex) => {
            const newIndex = (prevIndex[category] - 1 + (maxIndex + 1)) % (maxIndex + 1);
            return { ...prevIndex, [category]: newIndex };
        });
    };

    return (
        <div>
            <header className="header">
                <a href="#" className="logo">Gear Craze</a>
                <nav className={`navbar ${menuOpen ? 'active' : ''}`}>
                <Link to="/"><b>Home</b></Link>
                <Link to="/#about"><b>About</b></Link> 
                <Link to="/#reviews"><b>Review</b></Link> 
                <Link to="/book"><b>Test Drive</b></Link>
                <a href="mailto:your-memep1243@gmail.com"><b>Contact Us</b></a>
                
            </nav>
               
            </header>

            {/* Video Section */}
            <div className="video-container">
                <video autoPlay muted loop>
                    <source src={require('../Images/aa.mp4')} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="video-overlay">
                    <h1>Welcome to Gear Craze</h1>
                    <p>The ultimate destination for car enthusiasts</p>
                </div>
            </div>

            {/* Sports Car Section */}
            <div className="slider-container">
                <h2>Sports Cars</h2>
                <button className="slider-button left" onClick={() => prevSlide('sports')} aria-label="Previous Sports Car Slide">‹</button>
                <div className="slider-track" id="sports-slider" style={{ transform: `translateX(${currentIndex.sports * calculateOffset('sports').offsetPercentage}%)` }}>
                    <div className="slider-item">
                        <img src={Ferrari} alt="Ferrari Roma" />
                        <h3>Ferrari Roma</h3><br></br>
                        <p>Price: $200,000</p><br></br>
                        <p>Max Speed: 199 mph</p><br></br>
                        <p>Acceleration: 3.4 sec</p><br></br>
                    </div>
                    <div className="slider-item">
                        <img src={Lambo} alt="Lamborghini Huracan" />
                        <h3>Lamborghini Huracan</h3><br></br>
                        <p>Price: $250,000</p><br></br>
                        <p>Max Speed: 202 mph</p><br></br>
                        <p>Acceleration: 2.9 sec</p><br></br>
                    </div>
                    <div className="slider-item">
                        <img src={Porsche} alt="Porsche 911 GT3" />
                        <h3>Porsche 911 GT3</h3><br></br>
                        <p>Price: $180,000</p><br></br>
                        <p>Max Speed: 197 mph</p><br></br>
                        <p>Acceleration: 3.1 sec</p><br></br>
                    </div>
                    <div className="slider-item">
                        <img src={Chevrolet} alt="Chevrolet Corvette" />
                        <h3>Chevrolet Corvette</h3><br></br>
                        <p>Price: $180,000</p><br></br>
                        <p>Max Speed: 197 mph</p><br></br>
                        <p>Acceleration: 3.1 sec</p><br></br>
                    </div>
                    <div className="slider-item">
                        <img src={Jaguar} alt="Jaguar F-Type" />
                        <h3>Jaguar F-Type</h3><br></br>
                        <p>Price: $180,000</p><br></br>
                        <p>Max Speed: 197 mph</p><br></br>
                        <p>Acceleration: 3.1 sec</p><br></br>
                    </div>
                </div>
                <button className="slider-button right" onClick={() => nextSlide('sports')} aria-label="Next Sports Car Slide">›</button>
            </div>

            {/* Luxury Cars Section */}
            <div className="slider-container">
                <h2>Luxury Cars</h2>
                <button className="slider-button left" onClick={() => prevSlide('classy')} aria-label="Previous Luxury Car Slide">‹</button>
                <div className="slider-track" id="classy-slider" style={{ transform: `translateX(${currentIndex.classy * calculateOffset('classy').offsetPercentage}%)` }}>
                    <div className="slider-item">
                        <img src={RollsRoyce} alt="Rolls Royce" />
                        <h3>Rolls Royce</h3><br></br>
                        <p>Price: $350,000</p><br></br>
                        <p>Max Speed: 155 mph</p><br></br>
                        <p>Acceleration: 5.3 sec</p><br></br>
                    </div>
                    <div className="slider-item">
                        <img src={BMW} alt="BMW 7 Series" />
                        <h3>BMW 7 Series</h3><br></br>
                        <p>Price: $150,000</p><br></br>
                        <p>Max Speed: 130 mph</p><br></br>
                        <p>Acceleration: 5.6 sec</p><br></br>
                    </div>
                    <div className="slider-item">
                        <img src={Merc} alt="Mercedes S-Class" />
                        <h3>Mercedes S-Class</h3><br></br>
                        <p>Price: $120,000</p><br></br>
                        <p>Max Speed: 155 mph</p><br></br>
                        <p>Acceleration: 5.1 sec</p><br></br>
                    </div>
                    <div className="slider-item">
                        <img src={Bentley} alt="Bentley Continental" />
                        <h3>Bentley Continental</h3><br></br>
                        <p>Price: $200,000</p><br></br>
                        <p>Max Speed: 190 mph</p><br></br>
                        <p>Acceleration: 3.9 sec</p><br></br>
                    </div>
                    <div className="slider-item">
                        <img src={RangeRover} alt="Range Rover Autobiography" />
                        <h3>Range Rover Autobiography</h3><br></br>
                        <p>Price: $135,000</p><br></br>
                        <p>Max Speed: 140 mph</p><br></br>
                        <p>Acceleration: 5.2 sec</p><br></br>
                    </div>
                </div>
                <button className="slider-button right" onClick={() => nextSlide('classy')} aria-label="Next Luxury Car Slide">›</button>
            </div>

            {/* Electric Cars Section */}
            <div className="slider-container">
                <h2>Electric Cars</h2>
                <button className="slider-button left" onClick={() => prevSlide('electric')} aria-label="Previous Electric Car Slide">‹</button>
                <div className="slider-track" id="electric-slider" style={{ transform: `translateX(${currentIndex.electric * calculateOffset('electric').offsetPercentage}%)` }}>
                    <div className="slider-item">
                        <img src={Tesla} alt="Tesla Model S" />
                        <h3>Tesla Model S</h3><br></br>
                        <p>Price: $90,000</p><br></br>
                        <p>Max Speed: 155 mph</p><br></br>
                        <p>Acceleration: 2.1 sec</p><br></br>
                    </div>
                    <div className="slider-item">
                        <img src={Rivian} alt="Rivian R1T" />
                        <h3>Rivian R1T</h3><br></br>
                        <p>Price: $70,000</p><br></br>
                        <p>Max Speed: 125 mph</p><br></br>
                        <p>Acceleration: 3.0 sec</p><br></br>
                    </div>
                    <div className="slider-item">
                        <img src={Comet} alt="Tata Comet" />
                        <h3>MG Comet</h3><br></br>
                        <p>Price: $25,000</p><br></br>
                        <p>Max Speed: 80 mph</p><br></br>
                        <p>Acceleration: 7.0 sec</p><br></br>
                    </div>
                    <div className="slider-item">
                        <img src={Kona} alt="Hyundai Kona Electric" />
                        <h3>Hyundai Kona Electric</h3><br></br>
                        <p>Price: $45,000</p><br></br>
                        <p>Max Speed: 104 mph</p><br></br>
                        <p>Acceleration: 6.5 sec</p><br></br>
                    </div>
                    <div className="slider-item">
                        <img src={UrbanCruiser} alt="Urban Cruiser" />
                        <h3>Urban Cruiser</h3><br></br>
                        <p>Price: $35,000</p><br></br>
                        <p>Max Speed: 90 mph</p><br></br>
                        <p>Acceleration: 8.0 sec</p><br></br>
                    </div>
                </div>
                <button className="slider-button right" onClick={() => nextSlide('electric')} aria-label="Next Electric Car Slide">›</button>
            </div>

            {/* Off-Road Cars Section */}
            <div className="slider-container">
                <h2>Off-Road Cars</h2>
                <button className="slider-button left" onClick={() => prevSlide('off')} aria-label="Previous Off-Road Car Slide">‹</button>
                <div className="slider-track" id="off-slider" style={{ transform: `translateX(${currentIndex.off * calculateOffset('off').offsetPercentage}%)` }}>
                    <div className="slider-item">
                        <img src={JeepWrangler} alt="Jeep Wrangler" />
                        <h3>Jeep Wrangler</h3><br></br>
                        <p>Price: $35,000</p><br></br>
                        <p>Max Speed: 120 mph</p><br></br>
                        <p>Acceleration: 6.0 sec</p><br></br>
                    </div>
                    <div className="slider-item">
                        <img src={Thar} alt="Mahindra Thar" />
                        <h3>Mahindra Thar</h3><br></br>
                        <p>Price: $20,000</p><br></br>
                        <p>Max Speed: 100 mph</p><br></br>
                        <p>Acceleration: 8.2 sec</p><br></br>
                    </div>
                    <div className="slider-item">
                        <img src={Defender} alt="Land Rover Defender" />
                        <h3>Land Rover Defender</h3><br></br>
                        <p>Price: $50,000</p><br></br>
                        <p>Max Speed: 130 mph</p><br></br>
                        <p>Acceleration: 6.5 sec</p><br></br>
                    </div>
                    <div className="slider-item">
                        <img src={Fortuner} alt="Toyota Fortuner" />
                        <h3>Toyota Fortuner</h3><br></br>
                        <p>Price: $45,000</p><br></br>
                        <p>Max Speed: 115 mph</p><br></br>
                        <p>Acceleration: 7.3 sec</p><br></br>
                    </div>
                    <div className="slider-item">
                        <img src={UrbanCruiser } alt="Toyota Fortuner" />
                        <h3>Urban Cruiser</h3><br></br>
                        <p>Price: $45,000</p><br></br>
                        <p>Max Speed: 115 mph</p><br></br>
                        <p>Acceleration: 7.3 sec</p><br></br>
                    </div>
                </div>
                <button className="slider-button right" onClick={() => nextSlide('off')} aria-label="Next Off-Road Car Slide">›</button>
            </div>

            
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

</div>
        
    );
}

export default Explore;
