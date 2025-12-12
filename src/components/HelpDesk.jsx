import React from "react";

const HelpDesk = () => {
    return (
        <div className = "help-support" >
            <h2>Help & Support</h2>

            <form classNmae="help-form">
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" placeholder = "Enter your name" required />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" placeholder = "Enter your Email" required />
                </div>

                <div className="form-group">
                    <label>Phone Number</label>
                    <input type="tel" placeholder="Enter your phoneNumber " required />

                </div>

                <div className="form-group">
                    <label>Issue Type</label>
                    <select required>
                        <option value="">select issue type</option>
                        <option value=""> Order Related</option>
                        <option value="">Payment Issue</option>
                        <option value="restaurant">Restaurant Issue</option>
                        <option value="delivery">Delivery Issue</option>
                        <option value="account">Account Issue</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Order ID (if applicable)</label>
                    <input type="text" placeholder="Enter order ID" />
                </div>

                <div className="form-group">
                    <label>Subject</label>
                    <input type="text" placeholder="Brief description" required />
                </div>

                <div className="form-group">
                    <label>Description</label>
                    <textarea 
                        rows="5" 
                        placeholder="Describe your issue in detail" 
                        required
                           ></textarea>
                </div>

                <button type="submit" className="submit-btn">Submit</button>

            </form>
        </div>
        

    )
}

export default HelpDesk;