
import './index.css'

const Dashboard = (props) => {
    const {userData} = props 
    const {avatar, name, email, location, bio} = userData
    return (
        <div className='profile-container'>
            <div className='avatar-container'>
                <img src={avatar} alt="avatar" className="image-element" />
                <h1>{name}</h1>
                <p>{email}</p>
            </div>
            <div className='details-container'>
                <p>{location}</p>
                <p>{bio}</p>
            </div>
            
        </div>
    )
}

export default Dashboard