
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login'
import Dashboard from './components/Dashboard';

const user = {
  avatar: 'https://res.cloudinary.com/dj6c4lrt9/image/upload/v1694782382/photo-1535713875002-d1d0cf377fde_lfxk7k.jpg',
  name: 'John Doe',
  email: 'john.doe@example.com',
  location: 'New York, USA',
  bio: 'Passionate software developer with a keen interest in front-end development and user experience design. Skilled in React, JavaScript, and CSS, I love creating intuitive and visually appealing web applications. With a background in design and a strong eye for detail, I enjoy solving complex problems and bringing ideas to life through code. Outside of work, I am an avid coffee enthusiast, a tech blog reader, and always on the lookout for the latest in web development trends.',
};




const App = () => (
  <Router>
    <Routes>
      <Route exact path="/signup" element={<Signup />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/" element={<Dashboard userData={user} />} />
    </Routes>
  </Router>
)

export default App;

