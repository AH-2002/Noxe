import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Movies from './Movies';
import NotFound from './NotFound';
import People from './People';
import Register from './Register';
import Login from './Login';
import TV from './TV';
import Footer from './Footer';
import About from './About';
import Contacts from './Contacts';
import { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import MovieDetails from './MovieDetails';
import MoviesContextProvider from './Store';
import CategoryContextProvider from './CategoryContext';


function App() {
  let navigate = useNavigate();
  let [userData, setUserData] = useState(null);
  function saveUserData() {
    let encodedToken = localStorage.getItem('userToken');
    //let decodedToken = jwtDecode(encodedToken);
    setUserData(encodedToken);
    //console.log(decodedToken);
  }

  function logOut() {
    setUserData(null);
    localStorage.removeItem('userToken');
    navigate('/login')

  }

  //component did mount
  useEffect(() => {
    if (localStorage.getItem('userToken')) {
      saveUserData();

    }
  }, [])

  function ProtectedRoute(props) {
    let path = useLocation().pathname;
    let publicPaths = ['/login', '/register'];
    if (localStorage.getItem('userToken')) {
      return props.children;

    }
    else if (publicPaths.includes(path)) {
      return props.children;

    }
    else {
      return <Navigate to='/login' />

    }
  }


  return (
    <div>
      <MoviesContextProvider>
        <CategoryContextProvider>
          <Navbar logOut={logOut} userData={userData} />
          <div className="container-fluid">
            <Routes>
              <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
              <Route path="home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
              <Route path="movies" element={<ProtectedRoute><Movies /></ProtectedRoute>} />
              <Route path="tv" element={<ProtectedRoute><TV /></ProtectedRoute>} />
              <Route path="people" element={<People />} />
              <Route path="login" element={<ProtectedRoute><Login saveUserData={saveUserData} /></ProtectedRoute>} />
              <Route path="register" element={<ProtectedRoute><Register /></ProtectedRoute>} />
              <Route path="about" element={<ProtectedRoute><About /></ProtectedRoute>} />
              <Route path="contacts" element={<ProtectedRoute><Contacts /></ProtectedRoute>} />
              <Route path="moviedetails" element={<ProtectedRoute><MovieDetails /></ProtectedRoute>} >
                <Route path=":id" element={<ProtectedRoute><MovieDetails /></ProtectedRoute>} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <Footer />
        </CategoryContextProvider>
      </MoviesContextProvider>
    </div >
  )
}

export default App;
