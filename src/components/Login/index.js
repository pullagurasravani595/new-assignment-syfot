import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import './index.css'

const Login = () => {
    const [userName, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showError, setShowErr] = useState(false);
    const [errorMsg, setErr] = useState("");

    const navigate = useNavigate();

    const changeUsername = event => {
        setUsername(event.target.value)
    }

    const changePassword = event => {
        setPassword(event.target.value)
    }

    const submitSuccess = (data) => {
        navigate('/', { replace: true });
        localStorage.setItem("reqired_data", data)
    }

    const submitFailure = (data) => {
        setShowErr(true)
    }

    const submitFormLogin = async event => {
        event.preventDefault()
        const userDetails = {userName, password}
        const apiUrl = "https://syoft.dev/Api/userlogin/api/userlogin"
        const options = {
            method: "POST",
            body: JSON.stringify(userDetails)
        }
        const response = await fetch(apiUrl, options);
        const responseDataFormat = await response.text()
        console.log(responseDataFormat)
        if (response.ok === true) {
            submitSuccess(responseDataFormat)
        }else {
            submitFailure(responseDataFormat);
        }
    }

    return (
        <div className="login-container">
            <form onSubmit={submitFormLogin} className="form-container">
                <h1 className="heading">Login Form</h1>
                <div className="input-login-container">
                    <label>UserName:</label>
                    <input type="text" placeholder="Enter your Email" onChange={changeUsername} className="round" />
                </div>
                <div className="input-login-container">
                    <label>Password:</label>
                    <input type="password" placeholder="Enter your Password" onChange={changePassword} className="round" />
                </div>
                <button type="submit" className="login">Submit</button>  
            </form>
        </div>
    )

}

export default Login 