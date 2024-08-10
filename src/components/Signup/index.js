import { useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaEyeSlash } from "react-icons/fa";
import { IoMdEye } from "react-icons/io";
import './index.css'

const Signup = () => {
    const [fullname, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showError, setShowErr] = useState(false);
    const [errorMsg, setErr] = useState("");
    const [checkbox, setCheckbox] = useState(false);
    const [showPassword, setTypePaaaword] = useState(false);

    const navigate = useNavigate();

    const changeFullName = event => {
        setFullName(event.target.value)
    }

    const changeEmail = (event) => {
        setEmail(event.target.value)
    }

    const changePassword = (event) => {
        setPassword(event.target.value)
    }

    const changeCompany = (event) => {
        setPassword(event.target.value)
    }

    const onSubmitFailure = (errorMsg) => {
        setShowErr(true);
        setErr(errorMsg)
    }

    const onSubmitSuccess = () => {
        navigate('/login', { replace: true });
    };

    const changeCheckboxStatus = (event) => {
        setCheckbox(event.target.checked);
    }
            
    const toggleEyeIcon = () => {
        setTypePaaaword(prevState => !prevState)
    }
    



    const accountSucessfull = async (event) => {
        event.preventDefault() 
        const userDetails = {
            "user_firstname": `${fullname}`,
            "user_email": `${email}`,
            "user_phone":"9876543210",
            "user_password":`${password}`,
            "user_lastname":"ni",  
            "user_city":"Hyderabad",
            "user_zipcode": "500072"        
        }
        const url = 'https://syoft.dev/Api/user_registeration/api/user_registeration';
        const options = {
            method: 'POST',
            body: JSON.stringify(userDetails),
        }
        const response = await fetch(url, options)
        const data = await response.json()
        if (response.ok === true) {
          console.log(response.ok)
          onSubmitSuccess()
        } else {
          onSubmitFailure(data.error_msg)
        }
    }

    return (
        <div className='sinup-container'>
            <div className='first-container'>
                <h1 className='main-heading'>Welcome to <br />our community</h1>
                <p className='paragraph'>Fuse help to developers to bulid organized and well coded dashboards full of beautiful and rich modules. Join us and start building your application today.</p>
                <div className='first-inner-container'>
                    <div>
                        <img src={`${process.env.PUBLIC_URL}/display-pic.png`} alt="profile" className="profile" />
                        <img src={`${process.env.PUBLIC_URL}/display-pic.png`} alt="profile" className="profile" />
                        <img src={`${process.env.PUBLIC_URL}/display-pic.png`} alt="profile" className="profile" />
                        <img src={`${process.env.PUBLIC_URL}/display-pic.png`} alt="profile" className="profile" />
                    </div>
                    <p className='paragraph'>More than 17k people joined us, it's your turn</p>
                </div>
            </div>
            <div className='second-container'>
                <div>
                    <h1 className='form-heading'>Sign up</h1>
                    <p>Already have an account? <Link to="/login" className='link-element'><span>Sign in</span></Link></p>
                </div>
                <form onSubmit={accountSucessfull}>
                    <div className='input-container'>
                        <label>Full name *</label>
                        <input value={fullname} onChange={changeFullName} />
                    </div>
                    <div className='input-container'>
                        <label>Email address *</label>
                        <input value={email} onChange={changeEmail} />
                    </div>
                    <div className='input-container'>
                        <label>Password *</label>
                        <div className='password-container'>
                            <input type={showPassword ? "text" : "password"} className='password-input' value={password} onChange={changePassword} />
                            {showPassword ? <IoMdEye className='eyes' onClick={toggleEyeIcon} /> : <FaEyeSlash className='eyes' onClick={toggleEyeIcon} />}
                        </div>
                    </div>
                    <div className='input-container'>
                        <label>Company</label>
                        <input type="text"  onChange={changeCompany} />
                    </div>
                    <div className='checkbox-container'>
                        <label className='sinup-container terms-container'>
                            <input type="checkbox" className='input-element' checked={checkbox} onChange={changeCheckboxStatus} />
                            <p className='terms'>I agree to the <Link className='link-element'><span>Terms of Services</span></Link> and <Link className='link-element'><span>Terms of Services</span></Link></p>
                        </label>
                    </div>
                    <div>
                        <button className={checkbox ? "account-btn" : "in-active"} type="submit" disabled={!checkbox}>Create your free account</button>
                    </div>
                    {showError && <p>{errorMsg}</p>}
                </form>
            </div>
        </div>
    )
}

export default Signup