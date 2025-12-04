import React from 'react';

const About = () => {
    return (
        <div className="about">
            <div className="about-header">
                <h1>About Zomato</h1>
                <p className="about-tagline">Your Ultimate Food Discovery Platform</p>
            </div>

            <div className="about-content">
                <section className="about-section">
                    <h2>Who We Are</h2>
                    <p>
                        Zomato is a leading restaurant discovery and food delivery platform 
                        that connects millions of food lovers with the best dining experiences 
                        in their city. We make it easy to find, order, and enjoy great food 
                        from thousands of restaurants.
                    </p>
                </section>

                <section className="about-section">
                    <h2>Our Mission</h2>
                    <p>
                        Our mission is to ensure nobody has a bad meal. We provide detailed 
                        information about restaurants, user reviews, ratings, and seamless 
                        food delivery services to help you make the best dining decisions.
                    </p>
                </section>

                <section className="about-section">
                    <h2>What We Offer</h2>
                    <div className="features-list">
                        <div className="feature-item">
                            <h3>🔍 Restaurant Discovery</h3>
                            <p>Find the best restaurants, cafes, and bars in your area with detailed menus, photos, and reviews.</p>
                        </div>
                        <div className="feature-item">
                            <h3>🚚 Food Delivery</h3>
                            <p>Order food from your favorite restaurants and get it delivered quickly to your doorstep.</p>
                        </div>
                        <div className="feature-item">
                            <h3>⭐ Reviews & Ratings</h3>
                            <p>Read honest reviews from food lovers and share your own dining experiences.</p>
                        </div>
                        <div className="feature-item">
                            <h3>🎉 Events & Offers</h3>
                            <p>Discover special deals, discounts, and food events happening around you.</p>
                        </div>
                    </div>
                </section>

                <section className="about-section">
                    <h2>Our Impact</h2>
                    <p>
                        With presence in multiple cities worldwide, Zomato serves millions of 
                        users every month, partnering with thousands of restaurants to deliver 
                        exceptional food experiences. We're committed to supporting local 
                        restaurants and making great food accessible to everyone.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default About;
