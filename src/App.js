import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import About from './Pages/About/About';
import Community from './Pages/Community/Community';
import Donation from './Pages/Donation/Donation';
import Home from './Pages/Home/Home';
import Footer from './Components/Footer/Footer'
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import { useSelector } from 'react-redux'
import CreatePost from './Pages/CreatePost/CreatePost';
import { ToastContainer, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const user = useSelector(s => s.user.user)
  console.log(user)
  return (
    <>
      <Header />
      <Routes>
        <Route path='/home' element={user ? <Home /> : <Navigate to='/login' />} />
        <Route path='/about' element={<About />} />
        <Route path='/community' element={<Community />} />
        <Route path='/donation' element={<Donation />} />
        <Route path='/login' element={!user ? <Login /> : <Navigate to='/home' />} />
        <Route path='/register' element={!user ? <Register /> : <Navigate to='/home' />} />
        <Route path='/createpost' element={user ? <CreatePost /> : <Navigate to='/login' />}></Route>
      </Routes>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        theme={"colored"}
        transition={Flip}
        pauseOnHover={false}
      />
      <Footer />
    </>
  );
}

export default App;
