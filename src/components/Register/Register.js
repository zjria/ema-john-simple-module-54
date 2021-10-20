import React from 'react';
import { Link } from 'react-router-dom';


const Register = () => {
    return (
        <div className="login-form">
            <div>
                <h1>Register- Create account</h1>
                <form onSubmit="">
                    <input type="email" name="" id="" placeholder="Your E-mail" />
                    <br />
                    <input type="password" name="" id="" placeholder="Your Password" />
                    <br />
                    <input type="password" name="" id="" placeholder="Re-enter Your Password" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>Already have an account? <Link to="/login">Sign-In</Link></p>
                <div>----------------ro-------------</div>
                <button className="btn-regular">Google Sig-In</button>
            </div>
        </div>
    );
};

export default Register;