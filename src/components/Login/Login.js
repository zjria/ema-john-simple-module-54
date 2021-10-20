import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css';

const Login = () => {
   const {googleUsingSignIn} = useAuth();
   const location = useLocation();
   const history = useHistory();
   const redirect_uri = location.state?.from || '/shop'
   console.log('came from', location.state?.from);


   const handleGoogleLogIn = () =>{
        googleUsingSignIn()
        .then(result =>{
            history.push(redirect_uri)
        })
   }

    return (
        <div className="login-form">
            <div>
                <h1>Log In </h1>
                <form>
                    <input type="email" name="" id="" placeholder="Your E-mail" />
                    <br />
                    <input type="password" name="" id="" placeholder="Your Password" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>New ema-jhon website link <Link to ="/register">Account</Link></p>
                <div>----------------ro....................</div>

                <button 
                className="btn-regular"
                onClick={handleGoogleLogIn}
                >Google Sign In</button>
                
            </div>
        </div>
    );
};

export default Login;