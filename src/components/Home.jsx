import React from 'react';

const Home = () => {
    return (
        <div className="home">
            <div className="hero-section">
                <h1>Welcome to Zomato</h1>
                <p className="tagline">Discover the best food & drinks in your city</p>
                <div className="search-bar">
                    <input 
                        type="text" 
                        placeholder="Search for restaurants, cuisines, or dishes..." 
                        className="search-input"
                    />
                    <button className="search-btn">Search</button>
                </div>
            </div>

            <div className="features">
                <div className="feature-card">
                    <h3>🍽️ Order Food</h3>
                    <p>Order from your favorite restaurants and get it delivered to your doorstep</p>
                </div>
                <div className="feature-card">
                    <h3>🍷 Dining Out</h3>
                    <p>Discover the best restaurants, cafes, and bars near you</p>
                </div>
                <div className="feature-card">
                    <h3>🌙 Nightlife</h3>
                    <p>Explore the best pubs and bars for a great night out</p>
                </div>
            </div>
        </div>
    );
};

export default Home;
