import React, {useState} from 'react'
import './LoginField.css'

const LoginField = props => {
    const [isLabelVisible, setLabelVisibility] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordButton, setShowPasswordButton] = useState(false);

    const text_inputted = (e) => {
        if(e.target.name === 'password'){
            if(e.target.value.length === 0){
                setShowPasswordButton(false);
            }
            else{
                setShowPasswordButton(true);
            }
        }
        if(e.target.value.length !== 0){
            setLabelVisibility(false);
        }
        else{
            setLabelVisibility(true);
        }
    }

    const togglePassword = (e) => {
        e.preventDefault();
        setShowPassword((prevState) => (!prevState));
    }
    
    return (
        <div className="form-field">
            <div className="form-box">
                <label className="form-field-label">
                    <span className="form-label" id={isLabelVisible ? "" : "hidden"}>{props.label}</span>
                    <input className="form-field-input" onChange={text_inputted} aria-label={props.label} aria-required="true" autoCapitalize="off" autoCorrect="off" maxLength="75" name={props.name} type={(showPassword || props.type === "text") ? "text" : "password"}></input>
                </label>
                <div className="gap" id={(props.type === "password") ? "hidden-field" : ""}></div>
                <div className="show gap" id={(props.type !== "password" || !showPasswordButton) ? "hidden-field" : ""}>
                    <div className="show-div">
                        <button onClick={togglePassword} className="show-button">{!showPassword ? "Show" : "Hide"}</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginField;
