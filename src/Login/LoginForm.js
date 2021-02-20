import React from 'react';
import './LoginForm.css';
import LoginField from './LoginField';

const LoginForm = () => {
    return (
        <div id="form-super-container">
            <div id="form-1">
                <h1 id="logo"> </h1>
                <div id="form-container">
                    <form id="form-content">
                        <div id="form-fields">
                            <LoginField label="Phone number, username, or email" name="username" type="text" />
                            <LoginField label="Password" name="password" type="password" />
                            <div className="submit-btn">
                                <button className="submit-button">
                                    <div className="submit-content" >
                                        Log In
                                    </div>
                                </button>
                            </div>
                            <div className="divider">
                                <div className="divider-line"></div>
                                <div className="divider-text">or</div>
                                <div className="divider-line"></div>
                            </div>
                            <div className="facebook-button">
                                <button className="facebook-btn">
                                    <span class="facebook-icon"></span>
                                    <span className="facebook-text">Log in with Facebook</span>
                                </button>
                            </div>
                        </div>
                        <a href="/" id="forgot-password">Forgot password?</a>
                    </form>
                </div>
            </div>
            <div id="signup-container">
                    <span id="signup-text">Don't have an account? <a href="/" id="signup-link">Sign up</a></span>
            </div>
        </div>
    )
}

export default LoginForm;
